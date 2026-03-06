import { useMemo } from 'react';

const R = 50; // hex circumradius in px
const SQRT3 = Math.sqrt(3);
const COL_W = R * SQRT3;  // ~86.6px  — horizontal distance between centers
const ROW_H = R * 1.5;   // 75px     — vertical distance between row centers

/** Pointy-top hex: returns SVG points string for a hexagon centered at (cx, cy) */
function hexPoints(cx: number, cy: number): string {
    return Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${cx + R * Math.cos(a)},${cy + R * Math.sin(a)}`;
    }).join(' ');
}

/**
 * HexGrid — subtle hexagonal network pattern for the Hero background.
 * Fades in from left to right so it doesn't compete with the text.
 */
export const HexGrid = () => {
    const COLS = 18;
    const ROWS = 14;

    /** Pre-compute hex center positions */
    const hexes = useMemo<{ cx: number; cy: number }[]>(() => {
        const list: { cx: number; cy: number }[] = [];
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const cx = col * COL_W + (row % 2 === 1 ? COL_W / 2 : 0);
                const cy = row * ROW_H;
                list.push({ cx, cy });
            }
        }
        return list;
    }, []);

    /** Pre-compute unique vertex dots (deduplicated) */
    const dots = useMemo<{ x: number; y: number }[]>(() => {
        const seen = new Set<string>();
        const pts: { x: number; y: number }[] = [];
        for (const { cx, cy } of hexes) {
            for (let i = 0; i < 6; i++) {
                const a = (Math.PI / 3) * i - Math.PI / 6;
                const x = Math.round((cx + R * Math.cos(a)) * 10) / 10;
                const y = Math.round((cy + R * Math.sin(a)) * 10) / 10;
                const key = `${x}|${y}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    pts.push({ x, y });
                }
            }
        }
        return pts;
    }, [hexes]);

    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* Fade mask: transparent on the left, opaque on the right */}
                <linearGradient id="hg-fade-h" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="35%" stopColor="white" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.9" />
                </linearGradient>

                {/* Vertical fade: slightly transparent at top and bottom */}
                <linearGradient id="hg-fade-v" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                </linearGradient>

                {/* Combined mask */}
                <mask id="hg-mask">
                    <rect width="100%" height="100%" fill="url(#hg-fade-h)" />
                </mask>

                {/* Subtle blue glow on top-right */}
                <radialGradient id="hg-glow" cx="80%" cy="20%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Glow overlay */}
            <rect width="100%" height="100%" fill="url(#hg-glow)" />

            {/* Hex grid group — masked to fade left-to-right */}
            <g mask="url(#hg-mask)" opacity="0.18">
                {/* Hex outlines */}
                {hexes.map(({ cx, cy }, i) => (
                    <polygon
                        key={i}
                        points={hexPoints(cx, cy)}
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="0.6"
                    />
                ))}

                {/* Node dots at hex vertices */}
                {dots.map(({ x, y }, i) => (
                    <circle key={i} cx={x} cy={y} r={1.8} fill="#93c5fd" opacity="0.7" />
                ))}
            </g>
        </svg>
    );
};

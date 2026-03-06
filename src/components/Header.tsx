import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Sobre', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projetos', href: '#projects', id: 'projects' },
    { label: 'Contato', href: '#contact', id: 'contact' },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const ticking = useRef(false);

    // ── Scroll detection (requestAnimationFrame-throttled) ────────────────────
    useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                setScrolled(y > 60);

                // Active section detection
                const offsets = navLinks.map(({ id }) => {
                    const el = document.getElementById(id);
                    return el ? { id, top: el.getBoundingClientRect().top } : null;
                }).filter(Boolean) as { id: string; top: number }[];

                const passed = offsets.filter(o => o.top <= 100);
                setActiveSection(passed.length > 0 ? passed[passed.length - 1].id : '');
                ticking.current = false;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initialise
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/*
             * Strategy: two layers stacked.
             * 1. Glass layer — always blurred, fades IN when scrolled.
             *    backdrop-filter is a CSS property, NOT animated via Framer Motion
             *    (animating it crashes in Safari/Chrome). We only animate opacity.
             * 2. Content layer — always on top.
             */}

            {/* ── Glass layer ───────────────────────────────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    backgroundColor: scrolled ? 'rgba(5, 8, 18, 0.78)' : 'rgba(5, 8, 18, 0)',
                    borderBottom: `1px solid ${scrolled ? 'rgba(59,130,246,0.14)' : 'transparent'}`,
                    boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.055)' : 'none',
                    transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                }}
            />

            {/* ── Accent line at bottom (fades in on scroll) ───────────── */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{
                    background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)',
                    opacity: scrolled ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                }}
            />

            {/* ── Main content (always on top of glass) ────────────────── */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group flex-shrink-0" onClick={closeMenu}>
                    <div className="relative w-8 h-8 flex-shrink-0">
                        <span className="absolute inset-0 rounded-lg bg-blue-500/25 blur-sm transition-all group-hover:bg-blue-400/40" />
                        <span className="relative flex w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center text-white font-black text-xs shadow shadow-blue-900/60">
                            JT
                        </span>
                    </div>
                    <div className="hidden sm:block leading-none">
                        <p className="text-white font-bold text-sm">Juliano Teixeira</p>
                        <p className="text-blue-400/60 text-[10px] font-medium tracking-widest uppercase">Data &amp; Dev</p>
                    </div>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ label, href, id }) => {
                        const active = activeSection === id;
                        return (
                            <a
                                key={href}
                                href={href}
                                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group"
                            >
                                {/* Active pill — CSS transition only, no layoutId jumping */}
                                <span
                                    className="absolute inset-0 rounded-lg border border-blue-500/20 bg-blue-500/10 transition-opacity duration-300"
                                    style={{ opacity: active ? 1 : 0 }}
                                />
                                <span className={`relative transition-colors duration-200 ${active ? 'text-blue-300' : 'text-slate-400 group-hover:text-slate-100'}`}>
                                    {label}
                                </span>
                            </a>
                        );
                    })}

                    <a
                        href="https://wa.me/5511986598865"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 relative px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-900/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-blue-700/50 active:scale-95"
                    >
                        Contate-me
                    </a>
                </nav>

                {/* Mobile burger */}
                <button
                    onClick={() => setOpen(v => !v)}
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
                    aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={open}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={open ? 'x' : 'menu'}
                            initial={{ opacity: 0, rotate: open ? -90 : 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: open ? 90 : -90 }}
                            transition={{ duration: 0.18 }}
                            className="block"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>

            {/* ── Mobile menu ──────────────────────────────────────────── */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="md:hidden relative"
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            backgroundColor: 'rgba(5, 8, 18, 0.92)',
                            borderBottom: '1px solid rgba(59,130,246,0.15)',
                            boxShadow: '0 16px 40px rgba(0,0,0,0.55)',
                        }}
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navLinks.map(({ label, href, id }, i) => {
                                const active = activeSection === id;
                                return (
                                    <motion.a
                                        key={href}
                                        href={href}
                                        onClick={closeMenu}
                                        initial={{ x: -12, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.04, duration: 0.18 }}
                                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active
                                                ? 'bg-blue-500/12 border border-blue-500/20 text-blue-300'
                                                : 'text-slate-300 hover:bg-white/6 hover:text-white'
                                            }`}
                                    >
                                        {label}
                                    </motion.a>
                                );
                            })}

                            <motion.a
                                href="https://wa.me/5511986598865"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                initial={{ x: -12, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: navLinks.length * 0.04, duration: 0.18 }}
                                className="mt-2 text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-full shadow-lg shadow-blue-900/40 transition-all"
                            >
                                Contate-me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

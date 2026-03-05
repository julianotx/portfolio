import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm group-hover:bg-blue-500 transition-colors">
                        JT
                    </span>
                    <span className="font-bold text-white hidden sm:block">Juliano Teixeira</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5511986598865"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-colors"
                    >
                        Contate-me
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-slate-400 hover:text-white transition-colors"
                    aria-label="Menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-[#0d0d14] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-slate-300 hover:text-white font-medium py-2"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5511986598865"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-full"
                    >
                        Contate-me
                    </a>
                </div>
            )}
        </header>
    );
};

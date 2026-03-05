import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass h-16' : 'bg-transparent h-20'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                    JT.
                </motion.span>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300 backdrop-blur-md bg-dark/30 px-6 py-2 rounded-full border border-white/5 shadow-xl">
                    <a href="#about" className="hover:text-white transition-colors">Sobre</a>
                    <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contato</a>
                </nav>

                {/* Mobile menu button (simplified for now) */}
                <div className="md:hidden flex items-center">
                    <a href="#contact" className="text-sm font-semibold text-primary hover:text-white transition">Falar Comigo</a>
                </div>
            </div>
        </header>
    );
};

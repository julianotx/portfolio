import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-[#0a0a0f]">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative max-w-7xl mx-auto w-full pt-24 pb-16">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-8"
                    >
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        Disponível para novos projetos
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
                    >
                        Analista de Dados
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                            &amp; Desenvolvedor
                        </span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mb-10"
                    >
                        Olá, sou <strong className="text-white font-semibold">Juliano Gabriel Teixeira</strong> —
                        transformo dados complexos em insights acionáveis e construo sistemas
                        responsivos que entregam resultados reais.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex flex-wrap gap-4 mb-14"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                        >
                            Ver Projetos
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://wa.me/5511986598865"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:-translate-y-0.5"
                        >
                            Entrar em Contato
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-5"
                    >
                        <span className="text-slate-600 text-sm">Encontre-me em:</span>
                        <a
                            href="https://github.com/julianotx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/juliano-g-teixeira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors text-sm"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                        <a
                            href="mailto:julianogab.tx@gmail.com"
                            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
                        >
                            <Mail size={18} />
                            E-mail
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

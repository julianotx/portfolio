import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { fadeUp, scaleIn, staggerContainer } from '../hooks/useScrollReveal';
import { HexGrid } from './HexGrid';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-[#060912]">
                <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-64 sm:w-80 h-64 sm:h-80 bg-violet-700/15 rounded-full blur-[100px]" />
                <div className="absolute top-1/3 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-[80px]" />
                <HexGrid />
            </div>

            <motion.div
                className="relative max-w-7xl mx-auto w-full pt-28 sm:pt-32 pb-16 sm:pb-20"
                variants={staggerContainer(0.12, 0.1)}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        variants={scaleIn}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8"
                    >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
                        Disponível para novos projetos
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-5 sm:mb-6"
                    >
                        Analista de Dados
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                            &amp; Desenvolvedor
                        </span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mb-8 sm:mb-10"
                    >
                        Olá, sou <strong className="text-white font-semibold">Juliano Gabriel Teixeira</strong> —
                        transformo dados complexos em insights acionáveis e construo sistemas
                        responsivos que entregam resultados reais.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-14"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm sm:text-base"
                        >
                            Ver Projetos
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://wa.me/5511986598865"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 text-sm sm:text-base"
                        >
                            Entrar em Contato
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap items-center gap-4 sm:gap-5"
                    >
                        <span className="text-slate-600 text-xs sm:text-sm">Encontre-me em:</span>
                        <a
                            href="https://github.com/julianotx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-white transition-colors text-xs sm:text-sm"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/juliano-g-teixeira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Meu Perfil no LinkedIn"
                            className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                        >
                            <Linkedin size={16} />
                            LinkedIn
                        </a>
                        <a
                            href="mailto:julianogab.tx@gmail.com"
                            aria-label="Enviar um e-mail"
                            className="flex items-center gap-1.5 sm:gap-2 text-slate-500 hover:text-white transition-colors text-xs sm:text-sm"
                        >
                            <Mail size={16} />
                            E-mail
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

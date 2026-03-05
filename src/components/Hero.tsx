import { motion } from 'framer-motion';
import { socialLinks } from '../data/social';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-20 right-0 md:right-20 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-10 left-0 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col items-start gap-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold tracking-widest uppercase mb-4"
                >
                    Disponível para novos projetos
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-slate-300 text-xl font-medium mb-2"
                >
                    Olá, eu sou o Juliano Teixeira 👋
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
                >
                    Analista de Dados <span className="opacity-40">&</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                        Desenvolvedor
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
                >
                    Transformo dados brutos em insights e automações, desenvolvendo sistemas responsivos focados em impacto, performance e design inteligente.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-4 w-full md:w-auto"
                >
                    <a href="#projects" className="w-full md:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
                        Explorar Projetos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href={socialLinks.whatsapp.url} target="_blank" rel="noreferrer" className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-dark border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 hover:border-slate-500 transition-all hover:-translate-y-1">
                        Entrar em Contato
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { fadeUp, staggerContainer, viewport } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

const GITHUB_URL = 'https://github.com/julianotx';

export const Projects = () => {
    return (
        <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16"
                >
                    <div>
                        <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">Portfólio</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                            Projetos em Destaque
                        </h2>
                    </div>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start sm:self-auto inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium rounded-full transition-all"
                    >
                        <Github size={14} />
                        Ver no GitHub
                    </a>
                </motion.div>

                {/* Project cards */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
                    variants={staggerContainer(0.13)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    {projects.map((p) => (
                        <motion.div
                            key={p.num}
                            variants={fadeUp}
                            className={`group relative bg-[#111118] border ${p.accent} hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]`}
                        >
                            <div className={`h-1 w-full bg-gradient-to-r transition-all duration-500 group-hover:h-1.5 ${p.gradient.replace('/60', '')}`} />

                            {/* Project Image Container */}
                            <div className="relative h-48 sm:h-64 overflow-hidden border-b border-white/5 bg-slate-900">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-[#111118] to-transparent opacity-60`} />
                                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-white/70 uppercase tracking-widest">
                                    Projeto {p.num}
                                </div>
                            </div>

                            <div className="p-5 sm:p-7">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                                    {p.tags.map((t) => (
                                        <span key={t} className={`text-[11px] sm:text-xs font-medium px-3 sm:px-3.5 py-1 rounded-full border ${p.tag_color}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
                                    {p.title}
                                </h3>

                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-7 h-auto">
                                    {p.desc}
                                </p>

                                <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-5 border-t border-white/5">
                                    <a
                                        href={p.demoLink}
                                        target={p.demoLink === '#' ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={13} />
                                        Ver Demo
                                    </a>
                                    <a href={p.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-white transition-colors">
                                        <Github size={13} />
                                        Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

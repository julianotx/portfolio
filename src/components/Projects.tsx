import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 text-center md:text-left md:flex md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                        >
                            Projetos em Destaque
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400 leading-relaxed"
                        >
                            Uma visão prática de soluções reais construídas, unindo análise de dados complexa a interfaces web amigáveis e automatizadas.
                        </motion.p>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="https://github.com/julianotx"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-darker border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
                    >
                        <Github className="w-5 h-5" /> Ver Repositório
                    </motion.a>
                </div>

                {/* Grid of Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projectsData.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            key={project.title}
                            className="bg-darker rounded-[2rem] border border-slate-800/80 overflow-hidden group hover:border-slate-600 transition-colors duration-500 flex flex-col"
                        >
                            {/* Media Space */}
                            <div className={`h-64 sm:h-80 relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <span className="text-white/40 font-bold tracking-widest text-sm uppercase flex items-center gap-3">
                                    <div className="w-10 h-[1px] bg-white/20"></div>
                                    Espaço para Mídia
                                    <div className="w-10 h-[1px] bg-white/20"></div>
                                </span>

                                {/* 
                  Instrução para uso futuro com imagens reais na pasta public: 
                  <img src="/projeto-x.png" alt={project.title} className="w-full h-full object-cover" /> 
                */}
                            </div>

                            {/* Data & Content */}
                            <div className="p-8 sm:p-10 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs sm:text-sm font-semibold px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed flex-1 font-light">
                                    {project.desc}
                                </p>

                                {/* Actions */}
                                <div className="flex flex-wrap items-center gap-6 mt-auto pt-6 border-t border-slate-800/80">
                                    <a href={project.demoLink} className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-primary transition-colors">
                                        <ExternalLink className="w-5 h-5" /> Ver Resultado
                                    </a>
                                    <a href={project.repoLink} className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" /> Código Fonte
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View Github link */}
                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/julianotx" className="inline-flex items-center gap-2 px-6 py-3 bg-dark border border-slate-700 text-white rounded-full font-medium active:bg-slate-800">
                        <Github className="w-5 h-5" /> Mais no GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

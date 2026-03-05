import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const GITHUB_URL = 'https://github.com/julianotx';

const projects = [
    {
        num: '01',
        title: 'Dashboard Financeiro — Power BI',
        tags: ['Power BI', 'SQL', 'DAX', 'Excel'],
        desc: 'Painel executivo consolidando KPIs financeiros, receita mensal e análise de despesas. Permite filtros dinâmicos por período e centro de custo para apoio à tomada de decisão.',
        gradient: 'from-blue-900/60 to-slate-900/60',
        accent: 'border-blue-500/30',
        tag_color: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
        repoLink: GITHUB_URL,
        demoLink: '#',
    },
    {
        num: '02',
        title: 'Automação de Relatórios — Python',
        tags: ['Python', 'Pandas', 'Openpyxl', 'Automação'],
        desc: 'Script que automatiza a geração de relatórios mensais a partir de planilhas brutas, consolidando dados de múltiplas fontes e exportando em formato padronizado.',
        gradient: 'from-violet-900/60 to-slate-900/60',
        accent: 'border-violet-500/30',
        tag_color: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        repoLink: GITHUB_URL,
        demoLink: '#',
    },
    {
        num: '03',
        title: 'Sistema Web — React + TypeScript',
        tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
        desc: 'Aplicação web responsiva com interface moderna, navegação por componentes, integração com APIs e design system próprio otimizado para performance.',
        gradient: 'from-cyan-900/60 to-slate-900/60',
        accent: 'border-cyan-500/30',
        tag_color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
        repoLink: GITHUB_URL,
        demoLink: '#',
    },
    {
        num: '04',
        title: 'Análise de Dados — SQL & Python',
        tags: ['SQL', 'Python', 'Matplotlib', 'Jupyter'],
        desc: 'Análise exploratória aprofundada com queries SQL otimizadas, visualizações em Python e relatório final com insights e recomendações estratégicas de negócio.',
        gradient: 'from-emerald-900/60 to-slate-900/60',
        accent: 'border-emerald-500/30',
        tag_color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        repoLink: GITHUB_URL,
        demoLink: '#',
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-28 px-6 bg-[#0d0d14]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div>
                        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Portfólio</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            Projetos em Destaque
                        </h2>
                    </div>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full transition-all"
                    >
                        <Github size={16} />
                        Ver no GitHub
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative bg-[#111118] border ${p.accent} hover:border-opacity-60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1`}
                        >
                            {/* Colored top bar */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient.replace('/60', '')}`} />

                            {/* Media placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center border-b border-white/5`}>
                                <span className="text-6xl font-black text-white/[0.07] select-none">{p.num}</span>
                            </div>

                            <div className="p-7">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {p.tags.map((t) => (
                                        <span key={t} className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${p.tag_color}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                    {p.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-7">
                                    {p.desc}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center gap-6 pt-5 border-t border-white/5">
                                    <a
                                        href={p.demoLink}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={15} />
                                        Ver Demo
                                    </a>
                                    <a
                                        href={p.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-white transition-colors"
                                    >
                                        <Github size={15} />
                                        Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

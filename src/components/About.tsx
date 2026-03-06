import { motion } from 'framer-motion';
import { BarChart3, Code2, TrendingUp } from 'lucide-react';
import { fadeLeft, fadeRight, staggerContainer, viewport } from '../hooks/useScrollReveal';

const pillars = [
    {
        icon: BarChart3,
        title: 'Análise de Dados',
        desc: 'Transformo dados brutos em insights claros usando SQL, Python, Power BI e Excel avançado.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
        icon: Code2,
        title: 'Desenvolvimento Web',
        desc: 'Construo sistemas e dashboards interativos com React, TypeScript e tecnologias modernas.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10 border-violet-500/20',
    },
    {
        icon: TrendingUp,
        title: 'Automação & BI',
        desc: 'Automatizo processos repetitivos e crio relatórios que aceleram tomadas de decisão.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
];

export const About = () => {
    return (
        <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0d0d14]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                    {/* Text */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">Sobre mim</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 sm:mb-6 leading-tight">
                            Dados que geram valor.<br />
                            <span className="text-slate-400 font-normal">Código que funciona.</span>
                        </h2>
                        <div className="space-y-3 sm:space-y-4 text-slate-400 text-base sm:text-lg leading-relaxed font-light">
                            <p>
                                Sou Analista de Dados e Desenvolvedor com foco em criar soluções que combinam
                                análise quantitativa com experiências digitais bem construídas.
                            </p>
                            <p>
                                Minha experiência vai de dashboards financeiros em Power BI até aplicações
                                web completas em React — sempre com atenção aos detalhes e ao impacto real
                                para o negócio.
                            </p>
                        </div>
                    </motion.div>

                    {/* Pillar cards — stagger from right, stack on mobile */}
                    <motion.div
                        className="flex flex-col gap-3 sm:gap-4"
                        variants={staggerContainer(0.14)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        {pillars.map((p) => (
                            <motion.div
                                key={p.title}
                                variants={fadeRight}
                                className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border ${p.bg} transition-transform hover:translate-x-1 duration-300`}
                            >
                                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${p.bg}`}>
                                    <p.icon size={18} className={p.color} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-0.5 sm:mb-1 text-sm sm:text-base">{p.title}</h3>
                                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

import { motion } from 'framer-motion';
import { BarChart3, Code2, TrendingUp } from 'lucide-react';

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
        <section id="about" className="py-28 px-6 bg-[#0d0d14]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Sobre mim</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Dados que geram valor.<br />
                            <span className="text-slate-400 font-normal">Código que funciona.</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 text-lg leading-relaxed font-light">
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

                    {/* Pillar cards */}
                    <div className="flex flex-col gap-4">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className={`flex items-start gap-4 p-5 rounded-2xl border ${p.bg}`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${p.bg} border ${p.bg.split(' ')[1]}`}>
                                    <p.icon size={20} className={p.color} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">{p.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

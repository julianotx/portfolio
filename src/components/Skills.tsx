import { motion } from 'framer-motion';
import { BarChart3, Settings, Database, Code } from 'lucide-react';

const skills = [
    { icon: BarChart3, title: 'Dashboards', desc: 'Criação de visões analíticas complexas e storytelling de dados, facilitando o monitoramento de KPIs para a tomada de decisão.' },
    { icon: Settings, title: 'Automações', desc: 'Desenvolvimento de scripts estruturados capazes de orquestrar e simplificar fluxos de trabalho rotineiros.' },
    { icon: Database, title: 'Engenharia de Dados', desc: 'Atuação com bases de dados SQL, noSQL e tratamento ETL utilizando as melhores práticas para garantir escalabilidade.' },
    { icon: Code, title: 'Desenvolvimento Web', desc: 'Construção de aplicações Full-Stack modernas, responsivas e performáticas com React, Node e ecossistema TypeScript.' }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-darker relative">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Habilidades Principais
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400"
                    >
                        Um resumo das ferramentas práticas e dos contextos onde possuo maior domínio e foco de estudos contínuos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={skill.title}
                            className="p-8 bg-dark rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors group cursor-default"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <skill.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

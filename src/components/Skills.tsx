import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: 'Dados & BI',
        color: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
        dot: 'bg-blue-400',
        skills: ['SQL', 'Python', 'Power BI', 'Excel Avançado', 'DAX', 'ETL', 'Pandas', 'NumPy'],
    },
    {
        category: 'Desenvolvimento',
        color: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
        dot: 'bg-violet-400',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Vite', 'Node.js', 'REST APIs'],
    },
    {
        category: 'Ferramentas',
        color: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
        dot: 'bg-cyan-400',
        skills: ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Docker (básico)', 'Linux', 'Notion', 'Jira'],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-28 px-6 bg-[#0a0a0f]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Habilidades</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Stack &amp; Ferramentas
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.1 }}
                            className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/10 transition-colors"
                        >
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 ${group.color}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                                {group.category}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/5 border border-white/8 text-slate-300 text-sm rounded-lg hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

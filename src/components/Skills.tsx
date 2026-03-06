import { motion, type Variants } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer, viewport } from '../hooks/useScrollReveal';

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

const pillVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, willChange: 'opacity, transform' },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
};

export const Skills = () => {
    return (
        <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="mb-10 sm:mb-16"
                >
                    <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">Habilidades</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                        Stack &amp; Ferramentas
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                    variants={staggerContainer(0.08)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    {skillGroups.map((group) => (
                        <motion.div
                            key={group.category}
                            variants={fadeUp}
                            className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <motion.div
                                variants={scaleIn}
                                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-4 sm:mb-6 ${group.color}`}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                                {group.category}
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-1.5 sm:gap-2"
                                variants={staggerContainer(0.015, 0.05)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewport}
                            >
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={pillVariant}
                                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/[0.02] border border-white/5 text-slate-300 text-xs sm:text-sm rounded-full hover:bg-white/10 hover:border-white/10 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

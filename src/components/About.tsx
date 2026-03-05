import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-dark">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-darker p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre a minha trajetória</h2>

                    <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                        <p>
                            Com formação e atuação no mercado como <strong className="text-slate-200">Analista</strong>, venho trilhando um caminho sólido conectando a Análise de Dados ao Desenvolvimento de Sistemas modernos.
                        </p>
                        <p>
                            Minha missão é transformar processos manuais e planilhas complexas em produtos digitais robustos, aplicando ferramentas eficientes que reduzem o atrito no dia a dia.
                        </p>
                        <p>
                            Atualmente, foco meus estudos na criação de <strong className="text-slate-200">Dashboards interativos, Automações e Engenharia de Software</strong>, entregando soluções que aliam UI/UX excepcionais a backends consistentes.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

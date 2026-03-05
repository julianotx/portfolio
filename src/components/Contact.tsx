import { motion } from 'framer-motion';
import { socialLinks } from '../data/social';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-gradient-to-b from-darker to-dark border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-dark p-10 md:p-16 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Vamos construir o futuro?
                    </h2>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
                        Aberto para novas oportunidades, projetos desafiadores no mercado financeiro e tecnológico. Sinta-se à vontade para me chamar para um café virtual.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a
                            href={socialLinks.whatsapp.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-darker rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105"
                        >
                            <socialLinks.whatsapp.icon className="w-5 h-5" />
                            Chamar no WhatsApp
                        </a>
                        <a
                            href={socialLinks.linkedin.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-darker border border-slate-600 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                        >
                            <socialLinks.linkedin.icon className="w-5 h-5" />
                            LinkedIn
                        </a>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

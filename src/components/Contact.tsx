import { motion } from 'framer-motion';
import { fadeUp, scaleIn, staggerContainer, viewport } from '../hooks/useScrollReveal';

const contactLinks = [
    {
        href: 'https://wa.me/5511986598865',
        external: true,
        bg: 'bg-[#25D366]/10',
        border: 'border-[#25D366]/30',
        hoverBg: 'hover:bg-[#25D366]/20',
        hoverBorder: 'hover:border-[#25D366]/50',
        iconBg: 'bg-[#25D366]',
        label: 'WhatsApp',
        sub: '+55 11 98659‑8865',
        subColor: 'text-[#25D366]',
        icon: (
            <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        href: 'mailto:julianogab.tx@gmail.com',
        external: false,
        bg: 'bg-white/5',
        border: 'border-white/10',
        hoverBg: 'hover:bg-white/10',
        hoverBorder: 'hover:border-white/20',
        iconBg: 'bg-white',
        label: 'E-mail',
        sub: 'julianogab.tx@gmail.com',
        subColor: 'text-slate-400',
        icon: (
            <svg viewBox="0 0 24 24" fill="#0a0a0f" className="w-6 h-6">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
    },
    {
        href: 'https://www.linkedin.com/in/juliano-g-teixeira/',
        external: true,
        bg: 'bg-[#0A66C2]/10',
        border: 'border-[#0A66C2]/30',
        hoverBg: 'hover:bg-[#0A66C2]/20',
        hoverBorder: 'hover:border-[#0A66C2]/50',
        iconBg: 'bg-[#0A66C2]',
        label: 'LinkedIn',
        sub: 'juliano-g-teixeira',
        subColor: 'text-[#0A66C2]',
        icon: (
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0a0a0f]">
            <div className="max-w-3xl mx-auto text-center">
                {/* Section intro — fade up */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="relative mb-12"
                >
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

                    <p className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-5 relative">Contato</p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-5 relative">
                        Vamos trabalhar juntos?
                    </h2>

                    <p className="text-sm sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl mx-auto relative px-2 sm:px-0">
                        Estou aberto a novas oportunidades, freelas e projetos desafiadores.
                        Escolha o canal de preferência e me chame!
                    </p>
                </motion.div>

                {/* Contact cards — stagger + scaleIn */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full"
                    variants={staggerContainer(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    {contactLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noopener noreferrer' : undefined}
                            variants={scaleIn}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className={`flex flex-col items-center justify-center gap-2 sm:gap-3 p-5 sm:p-6 rounded-2xl ${link.bg} border ${link.border} ${link.hoverBg} ${link.hoverBorder} transition-colors group w-full sm:w-48`}
                        >
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${link.iconBg} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">{link.label}</p>
                                <p className={`${link.subColor} text-[10px] sm:text-xs mt-0.5`}>{link.sub}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

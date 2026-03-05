import { socialLinks } from '../data/social';

export const Footer = () => {
    return (
        <footer className="py-12 bg-darker border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">

                <p className="font-medium">
                    © {new Date().getFullYear()} Juliano Gabriel Teixeira.
                </p>

                <div className="flex items-center gap-6">
                    <a href={socialLinks.github.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <socialLinks.github.icon className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href={socialLinks.linkedin.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <socialLinks.linkedin.icon className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={socialLinks.whatsapp.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                        <socialLinks.whatsapp.icon className="w-5 h-5" />
                        <span className="sr-only">WhatsApp</span>
                    </a>
                </div>

                <p className="font-light">
                    Construído com <strong className="font-semibold text-slate-300">Vite + React</strong>
                </p>

            </div>
        </footer>
    );
};

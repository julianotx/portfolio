import { motion } from 'framer-motion'
import { BarChart3, Settings, Database, Code, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'

// Neste início, o App.tsx abrigará toda a estrutura da página.
// Depois poderemos refatorar em componentes separados.

function App() {
    return (
        <div className="min-h-screen bg-darker">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 glass">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        JT
                    </span>
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                        <a href="#about" className="hover:text-white transition-colors">Sobre</a>
                        <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contato</a>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center max-w-7xl mx-auto relative">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-medium tracking-wider uppercase mb-4"
                    >
                        Olá, eu sou o Juliano Teixeira
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Analista de Dados & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Desenvolvedor
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        Transformo dados brutos em insights práticos, crio automações para fluxos de trabalho e desenvolvo sistemas modernos. Sempre buscando soluções que tragam impacto real.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                            Ver Projetos
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-dark border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                            Entrar em Contato
                        </a>
                    </motion.div>
                </section>

                {/* About & Skills */}
                <section id="skills" className="py-24 px-6 bg-dark">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <h2 className="text-3xl font-bold text-white mb-6">Sobre mim</h2>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Com formação e atuação no mercado como Analista, venho estudando e construindo soluções em Análise de Dados e Desenvolvimento de Sistemas.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Sou apaixonado por construir relatórios e automações que facilitam a vida das pessoas e empresas, utilizando as melhores tecnologias disponíveis.
                                </p>
                            </div>

                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: BarChart3, title: 'Dashboards', desc: 'Criação de visões analíticas complexas para tomada de decisão.' },
                                    { icon: Settings, title: 'Automações', desc: 'Scripts e robôs para simplificar tarefas e ganhar tempo.' },
                                    { icon: Database, title: 'Engenharia de Dados', desc: 'Tratamento, modelagem e disponibilização de dados.' },
                                    { icon: Code, title: 'Sistemas Web', desc: 'Desenvolvimento de aplicações com React e Node.' }
                                ].map((skill, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        key={skill.title}
                                        className="p-6 bg-darker rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group"
                                    >
                                        <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Space */}
                <section id="projects" className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Projetos em Destaque</h2>
                        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
                            Uma seleção de projetos pessoais e profissionais focados em dados, automação e desenvolvimento full-stack.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Dashboard de Performance Estratégica',
                                    tags: ['Power BI', 'SQL', 'DAX'],
                                    color: 'from-blue-900 to-slate-900',
                                    desc: 'Painel interativo consolidando métricas financeiras e KPIs estratégicos, permitindo monitoramento diário e suporte rápido para a tomada de decisão executiva.'
                                },
                                {
                                    title: 'Automação de Pipeline de Dados (ETL)',
                                    tags: ['Python', 'Pandas', 'Cloud'],
                                    color: 'from-emerald-900 to-slate-900',
                                    desc: 'Arquitetura escalável para extração, transformação e carga de grandes volumes de dados de múltiplas fontes de parceiros para um Data Warehouse centralizado.'
                                },
                                {
                                    title: 'Sistema Web de Gestão Interna',
                                    tags: ['React', 'Node.js', 'Typescript'],
                                    color: 'from-indigo-900 to-slate-900',
                                    desc: 'Aplicação web full-stack desenvolvida para digitalizar fluxos de trabalho manuais da equipe, contando com autenticação, níveis de permissão e geração de relatórios.'
                                },
                                {
                                    title: 'Análise Preditiva e Forecast',
                                    tags: ['Python', 'Jupyter', 'Machine Learning'],
                                    color: 'from-purple-900 to-slate-900',
                                    desc: 'Estudo de dados focado em prever a demanda sazonal de produtos utilizando algoritmos de regressão para otimizar a cadeia de suprimentos e as metas operacionais.'
                                }
                            ].map((project, index) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    key={project.title}
                                    className="bg-dark rounded-2xl border border-slate-800 overflow-hidden group hover:border-slate-600 transition-colors duration-300 flex flex-col"
                                >
                                    <div className={`h-56 relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                                        <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <span className="text-white/40 font-medium z-0 tracking-widest text-sm uppercase">Imagem do Projeto</span>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-1">
                                            {project.desc}
                                        </p>
                                        <div className="flex items-center gap-6 mt-auto">
                                            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                                                <ExternalLink className="w-4 h-4" /> Preview Visual
                                            </a>
                                            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                                                <Github className="w-4 h-4" /> Repositório
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section id="contact" className="py-24 px-6 bg-gradient-to-b from-dark to-darker border-t border-slate-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Vamos trabalhar juntos?</h2>
                        <p className="text-lg text-slate-400 mb-10">
                            Estou sempre aberto a discutir projetos de dados, automações ou oportunidades de desenvolvimento web.
                        </p>
                        <a href="mailto:seu-email@exemplo.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-darker rounded-lg font-bold hover:bg-slate-200 transition-colors">
                            <Mail className="w-5 h-5" /> Enviar Mensagem
                        </a>

                        <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-slate-800">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Juliano Gabriel Teixeira. Construído com Vite, React e Tailwind CSS.</p>
            </footer>
        </div>
    )
}

export default App

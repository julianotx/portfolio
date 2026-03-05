import { socialLinks } from './social';

export interface Project {
    title: string;
    tags: string[];
    color: string;
    desc: string;
    repoLink?: string;
    demoLink?: string;
}

export const projectsData: Project[] = [
    {
        title: 'Dashboard de Performance Estratégica',
        tags: ['Power BI', 'SQL', 'DAX'],
        color: 'from-blue-900 to-slate-900',
        desc: 'Painel interativo consolidando métricas financeiras e KPIs estratégicos, permitindo monitoramento diário e suporte rápido para a tomada de decisão executiva.',
        repoLink: socialLinks.github.url,
        demoLink: '#'
    },
    {
        title: 'Automação de Pipeline de Dados (ETL)',
        tags: ['Python', 'Pandas', 'Cloud'],
        color: 'from-emerald-900 to-slate-900',
        desc: 'Arquitetura escalável para extração, transformação e carga de grandes volumes de dados de múltiplas fontes de parceiros para um Data Warehouse centralizado.',
        repoLink: 'https://github.com/julianotx',
        demoLink: '#'
    },
    {
        title: 'Sistema Web de Gestão Interna',
        tags: ['React', 'Node.js', 'Typescript'],
        color: 'from-indigo-900 to-slate-900',
        desc: 'Aplicação web full-stack desenvolvida para digitalizar fluxos de trabalho manuais da equipe, contando com autenticação, níveis de permissão e geração de relatórios.',
        repoLink: 'https://github.com/julianotx',
        demoLink: '#'
    },
    {
        title: 'Análise Preditiva e Forecast',
        tags: ['Python', 'Jupyter', 'Machine Learning'],
        color: 'from-purple-900 to-slate-900',
        desc: 'Estudo de dados focado em prever a demanda sazonal de produtos utilizando algoritmos de regressão para otimizar a cadeia de suprimentos e as metas operacionais.',
        repoLink: 'https://github.com/julianotx',
        demoLink: '#'
    }
];

import dashboardImg from '../assets/projects/dashboard_financeiro.png';
import automationImg from '../assets/projects/automacao_python.png';
import webSystemImg from '../assets/projects/sistema_web.png';
import dataAnalysisImg from '../assets/projects/analise_dados.png';

export interface Project {
    num: string;
    title: string;
    tags: string[];
    desc: string;
    image: string;
    gradient: string;
    accent: string;
    tag_color: string;
    repoLink: string;
    demoLink: string;
}

const GITHUB_URL = 'https://github.com/julianotx';

export const projects: Project[] = [
    {
        num: '01',
        title: 'Dashboard Financeiro — Power BI',
        tags: ['Power BI', 'SQL', 'DAX', 'Excel'],
        desc: 'Painel executivo consolidando KPIs financeiros, receita mensal e análise de despesas. Permite filtros dinâmicos por período e centro de custo para apoio à tomada de decisão.',
        image: dashboardImg,
        gradient: 'from-blue-900/60 to-slate-900/60',
        accent: 'border-blue-500/30',
        tag_color: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
        repoLink: GITHUB_URL,
        demoLink: 'https://app.powerbi.com/view?r=eyJrIjoi...', // Exemplo de link real
    },
    {
        num: '02',
        title: 'Automação de Relatórios — Python',
        tags: ['Python', 'Pandas', 'Openpyxl', 'Automação'],
        desc: 'Script que automatiza a geração de relatórios mensais a partir de planilhas brutas, consolidando dados de múltiplas fontes e exportando em formato padronizado.',
        image: automationImg,
        gradient: 'from-violet-900/60 to-slate-900/60',
        accent: 'border-violet-500/30',
        tag_color: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
        repoLink: GITHUB_URL,
        demoLink: '#',
    },
    {
        num: '03',
        title: 'Sistema Web — React + TypeScript',
        tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
        desc: 'Aplicação web responsiva com interface moderna, navegação por componentes, integração com APIs e design system próprio otimizado para performance.',
        image: webSystemImg,
        gradient: 'from-cyan-900/60 to-slate-900/60',
        accent: 'border-cyan-500/30',
        tag_color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
        repoLink: GITHUB_URL,
        demoLink: 'https://vith-beta.vercel.app/', // Exemplo de link real
    },
    {
        num: '04',
        title: 'Análise de Dados — SQL & Python',
        tags: ['SQL', 'Python', 'Matplotlib', 'Jupyter'],
        desc: 'Análise exploratória aprofundada com queries SQL otimizadas, visualizações em Python e relatório final com insights e recomendações estratégicas de negócio.',
        image: dataAnalysisImg,
        gradient: 'from-emerald-900/60 to-slate-900/60',
        accent: 'border-emerald-500/30',
        tag_color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
        repoLink: GITHUB_URL,
        demoLink: '#',
    },
];

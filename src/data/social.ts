// =============================================
// Dados de contato centralizados
// Para editar: basta alterar os valores abaixo
// =============================================

export const WHATSAPP_URL = 'https://wa.me/5511986598865';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/juliano-g-teixeira/';
export const GITHUB_URL = 'https://github.com/julianotx';
export const EMAIL_URL = 'mailto:julianogab.tx@gmail.com';

// Objeto backward-compatible para outros componentes
export const socialLinks = {
    whatsapp: { url: WHATSAPP_URL, display: '+55 11 98659-8865' },
    linkedin: { url: LINKEDIN_URL, display: 'linkedin.com/in/juliano-g-teixeira' },
    github: { url: GITHUB_URL, display: 'github.com/julianotx' },
    email: { url: EMAIL_URL, display: 'julianogab.tx@gmail.com' },
};

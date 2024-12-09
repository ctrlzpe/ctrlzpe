import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Drops',
      href: getPermalink('/drops'),
    },
    {
      text: 'Podcast',
      href: getPermalink('/podcast'),
    },
    {
      text: 'Recursos',
      href: getPermalink('/recursos'),
    },
    {
      text: 'Manifesto',
      href: getPermalink('/manifesto'),
    },
  ],
  actions: [{ text: 'Ver Podcast', href: 'https://www.youtube.com/@CtrlZpe', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Categorías',
      links: [
        { text: 'Drops', href: '#' },
        { text: 'Podcast', href: '#' },
        { text: 'Recursos', href: '#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Youtube', href: '#' },
        { text: 'Spotify', href: '#' },
        { text: 'Instagram', href: '#' },
        { text: 'Tik Tok', href: '#' },
      ],
    },
    {
      title: 'Info',
      links: [
        { text: 'Manifesto', href: '#' },
        { text: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Gerónimo', href: '#' },
        { text: 'Kioshi', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Spotify', icon: 'tabler:brand-spotify', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
  ],
  footNote: `
    <img class="w-3 h-3 md:w-3 md:h-3 inline-block mr-1 mb-1 rtl:mr-0 rtl:ml-1 dark:hidden" src="/src/assets/favicons/logo-ks.png" alt="Logo" loading="lazy"></img>
    <img class="w-3 h-3 md:w-3 md:h-3 inline-block mr-1 mb-1 rtl:mr-0 rtl:ml-1 hidden dark:inline-block" src="/src/assets/favicons/logo-ks-dark.png" alt="Logo" loading="lazy"></img>
    Hecho con <3 en Perú por <a class="text-gray-500 underline dark:text-muted" href="https://www.instagram.com/kioshishimabuku/" target="_blank" rel="noopener"> @kioshishimabuku</a> · Todos los derechos reservados.
  `,
};

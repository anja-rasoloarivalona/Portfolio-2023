import { Locale } from '../types';
import { projects } from './projects';
import { shortcutLinks } from './shortcut-links';

export const config = {
    locales: {
        supported: [...Object.values(Locale)],
        default: Locale.EN,
    },
    emailsJS: {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    },
    projects: projects,
    shortcutLinks: shortcutLinks,
};

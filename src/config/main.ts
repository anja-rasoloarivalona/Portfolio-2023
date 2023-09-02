export enum Locales {
    EN = 'en',
    FR = 'fr',
}

export const config = {
    locales: {
        supported: [...Object.values(Locales)],
        default: Locales.EN,
    },
    emailsJS: {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    },
};

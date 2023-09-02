import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { config } from '../config/main';

emailjs.init(config.emailsJS.publicKey);

/**
 * Configure email js keys and send email
 * @param {string} name
 * @param {string} email
 * @param {string} message
 * @return {Promise<EmailJSResponseStatus>}
 */
export const sendEmail = (name: string, email: string, message: string): Promise<EmailJSResponseStatus> => {
    return emailjs.send(config.emailsJS.serviceId, config.emailsJS.templateId, {
        name: name,
        email: email,
        message: message,
    });
};

// icons
import { IoLogoBitbucket } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import pdf from '../assets/Anja Rasoloarivalona - CV.pdf';

export const shortcutLinks = [
    {
        label: 'Bitbucket',
        Icon: IoLogoBitbucket,
        path: 'https://bitbucket.org/anjanirina/workspace/projects',
    },
    {
        label: 'Github',
        Icon: BsGithub,
        path: 'https://github.com/anja-rasoloarivalona',
    },
    {
        label: 'LinkedIn',
        Icon: FaLinkedinIn,
        path: 'https://linkedin.com/in/anja-rasoloarivalona',
    },
    {
        label: 'Download CV',
        Icon: HiDocumentText,
        path: pdf,
    },
];

import { RoutesPath } from '../routes';
import { Project, ProjectId } from '../types';

import bizbizshareImage from '../assets/bizbizshare.png';
import bizbizshareImageHero from '../assets/bizbizshare-hero.png';

import mphaseImage from '../assets/mphase.png';
import mphaseImageHero from '../assets/mphase-hero.png';

import naiaImage from '../assets/naia.png';
import naiaImageHero from '../assets/naia-hero.png';

export const projects: Map<ProjectId, Project> = new Map([
    [
        ProjectId.BIZBIZSHARE,
        {
            id: ProjectId.BIZBIZSHARE,
            post: 'generic.full_stack_developer',
            companyName: 'BizbizShare',
            translationKey: 'bizbizshare',
            companyDescription:
                'BizBizShare is a Quebec-based startup that owns several B2B marketplaces and offer white label marketplaces as well for various clients.  I was in charge of rebuilding the whole interface of the marketplaces with React and Redux.',
            path: RoutesPath.BIZBIZSHARE,
            image: bizbizshareImage,
            imageHero: bizbizshareImageHero,
            websiteUrl: 'https://bizbizshare.com',
        },
    ],
    [
        ProjectId.MPHASE,
        {
            id: ProjectId.MPHASE,
            post: 'generic.full_stack_developer',
            companyName: 'mPhase',
            translationKey: 'mphase',
            companyDescription:
                'Voluptatem dignissimos sequi modi, ratione accusantium nihil iste, expedita numquam nam esse odit pariatur quasi, vitae amet? A saepe vitae animi error voluptates facere ipsa id enim vel assumenda dolorum perferendis quos architecto voluptas, doloribus cumque magnam neque!',
            path: RoutesPath.MPHASE,
            image: mphaseImage,
            imageHero: mphaseImageHero,
            websiteUrl: 'https://mphase.ca',
        },
    ],
    [
        ProjectId.NAIA,
        {
            id: ProjectId.NAIA,
            post: 'generic.full_stack_developer',
            companyName: 'NAIA',
            translationKey: 'naia',
            companyDescription:
                'Voluptatem dignissimos sequi modi, ratione accusantium nihil iste, expedita numquam nam esse odit pariatur quasi, vitae amet? A saepe vitae animi error voluptates facere ipsa id enim vel assumenda dolorum perferendis quos architecto voluptas, doloribus cumque magnam neque!',
            path: RoutesPath.NAIA,
            image: naiaImage,
            imageHero: naiaImageHero,
            websiteUrl: 'https://staging-naia-web-91d64945f832.herokuapp.com',
        },
    ],
]);

import { ResourceKey } from 'i18next';
import { RoutesPath } from '../routes';

export enum ProjectId {
    BIZBIZSHARE = 'BIZBIZSHARE',
    MPHASE = 'MPHASE',
    NAIA = 'NAIA',
}

export type Project = {
    id: ProjectId;
    companyName: string;
    post: ResourceKey;
    translationKey: ResourceKey;
    companyDescription: string;
    path: RoutesPath;
    image: string;
    imageHero: string;
    websiteUrl: string;
};

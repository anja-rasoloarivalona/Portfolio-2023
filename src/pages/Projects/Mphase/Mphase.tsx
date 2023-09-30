import React from 'react';
import { ProjectWrapper } from '../components';
import {
    MphaseAbout,
    // MphaseAchievements,
    MphaseProjects,
} from './sections';
import { config } from '../../../config/main';
import { ProjectId } from '../../../types';

const Mphase = () => {
    return (
        <ProjectWrapper project={config.projects.get(ProjectId.MPHASE)!}>
            <MphaseAbout />
            <MphaseProjects />
            {/* <MphaseAchievements /> */}
        </ProjectWrapper>
    );
};

export default Mphase;

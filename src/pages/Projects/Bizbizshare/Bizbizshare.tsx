import React, { useMemo } from 'react';
import { ProjectWrapper } from '../components';
import { BizbizshareAbout, BizbizshareAchievements, BizbizshareMarketplaces } from './sections';
import { config } from '../../../config/main';
import { ProjectId } from '../../../types';

const Bizbizshare = () => {
    const project = useMemo(() => {
        return config.projects.get(ProjectId.BIZBIZSHARE)!;
    }, []);

    return (
        <ProjectWrapper project={project}>
            <BizbizshareAbout />
            <BizbizshareMarketplaces />
            <BizbizshareAchievements />
        </ProjectWrapper>
    );
};

export default Bizbizshare;

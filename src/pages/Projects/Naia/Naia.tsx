import React, { useMemo } from 'react';
import { ProjectWrapper } from '../components';
import { config } from '../../../config/main';
import { ProjectId } from '../../../types';
import { NaiaAbout, NaiaRoles } from './sections';

const Naia = () => {
    const project = useMemo(() => config.projects.get(ProjectId.NAIA)!, []);

    return (
        <>
            <ProjectWrapper project={project}>
                <NaiaAbout />
                <NaiaRoles />
            </ProjectWrapper>
        </>
    );
};

export default Naia;

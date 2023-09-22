import React from 'react';
import { config } from '../../../../../../config/main';
import { Container } from './HomeProjects-styles';
import { Title } from '../../../../../../components';
import { useTranslation } from 'react-i18next';
import { HomeProject } from './components';

const HomeProjects = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Title isCentered={false}>{t('generic.my_works')}</Title>
            {[...config.projects.values()].map((project, index) => (
                <HomeProject project={project} index={index} />
            ))}
        </Container>
    );
};

export default HomeProjects;

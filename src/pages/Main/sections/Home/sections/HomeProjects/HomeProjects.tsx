import React from 'react';
import { config } from '../../../../../../config/main';
import { Container } from './HomeProjects-styles';
import { ProjectCard, Title } from '../../../../../../components';
import { useTranslation } from 'react-i18next';
import Scroll from 'react-scroll';

const HomeProjects = () => {
    const { t } = useTranslation();

    return (
        <Container id="works">
            <Scroll.Element name="#works" />

            <Title isCentered={false} expandBottomSpace>
                {t('generic.my_works')}
            </Title>
            {[...config.projects.values()].map((project, index) => (
                <ProjectCard
                    key={project.id}
                    title={project.companyName}
                    subTitle={project.post as string}
                    description={`projects.${project.translationKey}.tagline`}
                    image={project.image}
                    path={project.path}
                    index={index}
                />
            ))}
        </Container>
    );
};

export default HomeProjects;

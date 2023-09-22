import React, { useRef } from 'react';
import {
    Container,
    Content,
    ContentCompanyName,
    ContentDescription,
    ContentPost,
    Image,
    ImageContainer,
} from './HomeProject-styles';
import { Project } from '../../../../../../../../types';
import { ResourceKey } from 'i18next';
import { Animated, OutlinedButton } from '../../../../../../../../components';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'usehooks-ts';
import { useScrollTrigger, useViewedPath } from '../../../../../../../../hooks';

type HomeProjectProps = {
    project: Project;
    index: number;
};

const HomeProject = ({ project, index }: HomeProjectProps) => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const windowSize = useWindowSize();
    const isViewed = useViewedPath();
    const { isTriggered } = useScrollTrigger({
        triggerRef: containerRef,
        offset: windowSize.height * 0.6,
    });

    return (
        <Container ref={containerRef} key={index} isOdd={index % 2 === 1} className="project-container">
            <ImageContainer isDisplayed={isTriggered || isViewed} className="image-container">
                <Image src={project.image} />
            </ImageContainer>

            <Content>
                <Animated isTriggered={isTriggered} isDisabled={isViewed}>
                    <ContentPost>{t(project.post)}</ContentPost>
                    <ContentCompanyName>{project.companyName}</ContentCompanyName>
                    <ContentDescription>
                        {t(`projects.${project.translationKey}.tagline` as ResourceKey)}
                    </ContentDescription>
                    <OutlinedButton path={project.path}>{t('generic.learn_more')}</OutlinedButton>
                </Animated>
            </Content>
        </Container>
    );
};

export default HomeProject;

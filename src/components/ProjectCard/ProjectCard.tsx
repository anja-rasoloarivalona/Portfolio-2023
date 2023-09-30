import React, { useRef } from 'react';
import { ResourceKey } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'usehooks-ts';
import { useViewedPath, useScrollTrigger } from '../../hooks';
import Animated from '../Animated';
import { OutlinedButton } from '../Button';
import {
    Container,
    ImageContainer,
    Image,
    Content,
    ContentSubtitle,
    ContentTitle,
    ContentDescription,
} from './ProjectCard-styles';

type ProjectCardProps = {
    index: number;
    title: string;
    subTitle: string;
    description: string;
    image: string;
    path?: string;
    externalPath?: string;
    ctaText?: string;
};

const ProjectCard = ({
    subTitle,
    title,
    description,
    image,
    path,
    externalPath,
    index,
    ctaText = 'generic.learn_more',
}: ProjectCardProps) => {
    const { t } = useTranslation();

    const containerRef = useRef<HTMLDivElement>(null);
    const windowSize = useWindowSize();
    const isViewed = useViewedPath();
    const { isTriggered } = useScrollTrigger({
        triggerRef: containerRef,
        offset: windowSize.height * 0.6,
    });

    return (
        <Container ref={containerRef} key={index} isOdd={index % 2 === 1} className="project-card">
            <ImageContainer isDisplayed={isTriggered || isViewed} className="project-card-image">
                <Image src={image} />
            </ImageContainer>
            <Content className="project-card-content">
                <Animated isTriggered={isTriggered} isDisabled={isViewed}>
                    <ContentSubtitle>{t(subTitle as ResourceKey)}</ContentSubtitle>
                    <ContentTitle>{title}</ContentTitle>
                    <ContentDescription>{t(description as ResourceKey)}</ContentDescription>
                    <OutlinedButton path={path} externalPath={externalPath}>
                        {t(ctaText as ResourceKey)}
                    </OutlinedButton>
                </Animated>
            </Content>
        </Container>
    );
};

export default ProjectCard;

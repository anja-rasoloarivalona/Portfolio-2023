import React, { useEffect } from 'react';
import {
    Container,
    ContentWrapper,
    Content,
    HeaderWrapper,
    Header,
    HeaderCta,
    HeaderImage,
    HeaderTitleContainer,
    HeaderTitle,
} from './ProjectWrapper-styles';
import { Animated, OutlinedButton } from '../../../../components';
import { Project } from '../../../../types';
import { useTranslation } from 'react-i18next';
import { useViewedPath } from '../../../../hooks';

type ProjectWrapperProps = {
    children: React.ReactNode;
    project: Project;
};

const ProjectWrapper = ({ children, project }: ProjectWrapperProps) => {
    const { t } = useTranslation();

    const isViewed = useViewedPath();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <HeaderWrapper>
                <Header>
                    <HeaderImage src={project.imageHero} />
                    <HeaderTitleContainer>
                        <Animated isTriggered isDisabled={isViewed}>
                            <HeaderTitle>{project.companyName}</HeaderTitle>
                        </Animated>
                    </HeaderTitleContainer>
                    <HeaderCta>
                        <OutlinedButton externalPath={project.websiteUrl}>
                            {t('generic.visit_website')}
                        </OutlinedButton>
                    </HeaderCta>
                </Header>
            </HeaderWrapper>

            <ContentWrapper>
                <Content>{children}</Content>
            </ContentWrapper>
        </Container>
    );
};

export default ProjectWrapper;

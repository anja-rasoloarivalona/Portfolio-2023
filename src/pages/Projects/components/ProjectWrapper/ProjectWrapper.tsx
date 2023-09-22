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
import { OutlinedButton } from '../../../../components';
import { Project } from '../../../../types';
import { useTranslation } from 'react-i18next';

type ProjectWrapperProps = {
    children: React.ReactNode;
    project: Project;
};

const ProjectWrapper = ({ children, project }: ProjectWrapperProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <HeaderWrapper>
                <Header>
                    <HeaderImage src={project.imageHero} />
                    <HeaderTitleContainer>
                        <HeaderTitle>{project.companyName}</HeaderTitle>
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

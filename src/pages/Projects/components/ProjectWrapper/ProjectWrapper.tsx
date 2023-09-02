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
import image from '../../../../assets/test.png';
import { OutlinedButton } from '../../../../components';

type ProjectWrapperProps = {
    children: React.ReactNode;
};

const ProjectWrapper = ({ children }: ProjectWrapperProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container>
            <HeaderWrapper>
                <Header>
                    <HeaderImage src={image} />
                    <HeaderTitleContainer>
                        <HeaderTitle>Bizbizshare</HeaderTitle>
                    </HeaderTitleContainer>
                    <HeaderCta>
                        <OutlinedButton>Visit website</OutlinedButton>
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

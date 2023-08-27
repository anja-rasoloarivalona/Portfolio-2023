import React from 'react';
import { Container, Content, ContentIntro, ContentTitle, ContentPresentation } from './HomeHero-styles';
import { OutlinedButton } from '../../../../components';

const HomeHero = () => {
    return (
        <Container>
            <Content>
                <ContentIntro>Hi, my name is</ContentIntro>
                <ContentTitle>Anja Rasoloarivalona.</ContentTitle>
                <ContentPresentation>I am a full-stack developer</ContentPresentation>
                <OutlinedButton>Contact</OutlinedButton>
            </Content>
        </Container>
    );
};

export default HomeHero;

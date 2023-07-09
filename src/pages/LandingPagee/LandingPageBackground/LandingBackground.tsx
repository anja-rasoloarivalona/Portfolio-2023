import React from 'react';
import {
    Container,
    Video,
    AnimatedTextContainer,
    AnimatedText,
    Content,
    ContentText,
} from './LandingPageBackground-styles';
import { ThreeDButton } from '../../../components';
import video from '../../../assets/background.mp4';

type LandingPageBackgroundProps = {
    text: string;
};

const LandingPageBackground = ({ text }: LandingPageBackgroundProps) => {
    return (
        <Container>
            <Video autoPlay loop muted width="100%" height="auto">
                <source src={video} type="video/mp4" />
            </Video>
            <AnimatedText>{text}</AnimatedText>

            <AnimatedTextContainer>
                <AnimatedText>{text}</AnimatedText>
                <ThreeDButton>Let's begin</ThreeDButton>
            </AnimatedTextContainer>

            <Content>
                <ContentText>{text}</ContentText>
                <ThreeDButton>Let's begin</ThreeDButton>
            </Content>
        </Container>
    );
};

export default LandingPageBackground;

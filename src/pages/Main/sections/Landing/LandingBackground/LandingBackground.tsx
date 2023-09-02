import React from 'react';
import {
    Container,
    Video,
    AnimatedTextContainer,
    AnimatedText,
    Content,
    ContentText,
} from './LandingBackground-styles';
import { OutlinedButton } from '../../../../../components';
import video from '../../../../../assets/background.mp4';

type LandingPageBackgroundProps = {
    text: string;
};

const LandingBackground = ({ text }: LandingPageBackgroundProps) => {
    return (
        <Container>
            <Video autoPlay loop muted width="100%" height="auto">
                <source src={video} type="video/mp4" />
            </Video>
            <AnimatedText>{text}</AnimatedText>

            <AnimatedTextContainer>
                <AnimatedText>{text}</AnimatedText>
                <OutlinedButton hasDarkBackground={false}>Let's begin</OutlinedButton>
            </AnimatedTextContainer>

            <Content>
                <ContentText>{text}</ContentText>
                <OutlinedButton hasDarkBackground={false}>Let's begin</OutlinedButton>
            </Content>
        </Container>
    );
};

export default LandingBackground;

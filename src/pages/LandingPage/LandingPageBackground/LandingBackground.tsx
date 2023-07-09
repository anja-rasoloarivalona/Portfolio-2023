import React from 'react';
import { Container, Video, Text } from './LandingPageBackground-styles';
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
            <Text>{text}</Text>
        </Container>
    );
};

export default LandingPageBackground;

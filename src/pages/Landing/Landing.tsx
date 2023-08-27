import React from 'react';
import { Container } from './Landing-styles';
import LandingBackground from './LandingBackground';
import LadingForeground from './LadingForeground';

const Landing = () => {
    const text = 'Unleashing digital potential';

    return (
        <Container>
            <LandingBackground text={text} />
            <LadingForeground text={text} />
        </Container>
    );
};

export default Landing;

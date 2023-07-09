import React from 'react';
import { Container } from './LandingPage-styles';
import LandingPageBackground from './LandingPageBackground';
import LandingPageForeground from './LadingPageForeground';

const LandingPage = () => {
    const text = 'Unleashing digital potential';

    return (
        <Container>
            <LandingPageBackground text={text} />
            <LandingPageForeground text={text} />
        </Container>
    );
};

export default LandingPage;

import React from 'react';
import { Container } from './Landing-styles';
import LandingBackground from './LandingBackground';
import LadingForeground from './LadingForeground';

type LandingProps = {
    onClickLandingCta: () => void;
};

const Landing = ({ onClickLandingCta }: LandingProps) => {
    const text = 'Unleashing digital potential';

    // const text = 'Donnez vie au numerique';

    return (
        <Container>
            <LandingBackground text={text} onClickLandingCta={onClickLandingCta} />
            <LadingForeground text={text} onClickLandingCta={onClickLandingCta} />
        </Container>
    );
};

export default Landing;

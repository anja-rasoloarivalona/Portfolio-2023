import React from 'react';
import { Container } from './Landing-styles';
import LandingBackground from './LandingBackground';
import LadingForeground from './LadingForeground';
import { DISPLAY_STATE } from '../../../../types';

type LandingProps = {
    onClickLandingCta: () => void;
    displayState: DISPLAY_STATE;
};

const Landing = ({ onClickLandingCta, displayState }: LandingProps) => {
    return (
        <Container>
            <LandingBackground onClickLandingCta={onClickLandingCta} displayState={displayState} />
            {displayState === DISPLAY_STATE.LOADED && (
                <LadingForeground onClickLandingCta={onClickLandingCta} />
            )}
        </Container>
    );
};

export default Landing;

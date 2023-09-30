import React from 'react';
import {
    Container,
    Video,
    AnimatedTextContainer,
    AnimatedText,
    Content,
    ContentText,
} from './LandingBackground-styles';
import { Animated, OutlinedButton } from '../../../../../components';
import video from '../../../../../assets/background.mp4';
import { DISPLAY_STATE } from '../../../../../types';
import { useTranslation } from 'react-i18next';

type LandingPageBackgroundProps = {
    onClickLandingCta: () => void;
    displayState: DISPLAY_STATE;
};

const LandingBackground = ({ onClickLandingCta, displayState }: LandingPageBackgroundProps) => {
    const { t } = useTranslation();

    return (
        <Container>
            {displayState === DISPLAY_STATE.LOADED && (
                <Video autoPlay loop muted width="100%" height="auto">
                    <source src={video} type="video/mp4" />
                </Video>
            )}

            <AnimatedTextContainer>
                <Animated
                    isTriggered={displayState === DISPLAY_STATE.PLAYING_ANIMATION}
                    isDisabled={displayState === DISPLAY_STATE.LOADED}
                    useDarkBackground={false}
                >
                    <AnimatedText>{t('landing.title')}</AnimatedText>
                </Animated>
                <OutlinedButton hasDarkBackground={false} onClick={() => onClickLandingCta()}>
                    {t('landing.cta')}
                </OutlinedButton>
            </AnimatedTextContainer>

            <Content displayState={displayState}>
                <ContentText>{t('landing.title')}</ContentText>
                <OutlinedButton hasDarkBackground={false} onClick={() => onClickLandingCta()}>
                    {t('landing.cta')}
                </OutlinedButton>
            </Content>
        </Container>
    );
};

export default LandingBackground;

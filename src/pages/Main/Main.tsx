import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Content, LandingPageWrapper, ContentWrapper, Curtain } from './Main-styles';
import { Landing, Home } from './sections';
import { LightHeader } from '../../elements';
import { useWindowSize } from 'usehooks-ts';
import { useScrollPosition } from '../../hooks';
import { useAnimation } from './hooks';
import { AppContext } from '../../App';
import Scroll from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { DISPLAY_STATE } from '../../types';

const Main = () => {
    const { hash } = useLocation();
    const windowSize = useWindowSize();
    const scrollPosition = useScrollPosition();
    const { isLoaded } = useContext(AppContext);

    const landingRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const animationDisabled = useRef(false);

    const [isScrolling, setIsScrolling] = useState(false);
    const [displayState, setDisplayState] = useState(isLoaded ? DISPLAY_STATE.LOADED : DISPLAY_STATE.INITIAL);

    // Animation for cube
    useAnimation(landingRef, contentRef, animationDisabled.current);

    useEffect(() => {
        if (isLoaded === true && hash.length === 0) {
            // If no targeted hash, load Main page from Hero section instead of Landing section
            setIsScrolling(true);
            jumpTo('content', 1);
        }
    }, []);

    useEffect(() => {
        if (isLoaded === true && hash.length > 0 && windowSize.height > 0) {
            setIsScrolling(true);
            if (scrollPosition < windowSize.height) {
                window.scrollTo(0, windowSize.height + 1);
            }
            setTimeout(() => {
                jumpTo(hash);
            }, 500);
        }
    }, [hash, isLoaded, windowSize.height]);

    useEffect(() => {
        if (displayState === DISPLAY_STATE.INITIAL) {
            setTimeout(() => {
                setDisplayState(DISPLAY_STATE.PLAYING_ANIMATION);
                setTimeout(() => {
                    setDisplayState(DISPLAY_STATE.LOADED);
                }, 1500);
            }, 1000);
        }
    }, [displayState]);

    /**
     * Jump to element
     * @param {String}  target - element name
     * @param {Number} offset
     */
    const jumpTo = (target: string, offset = -50) => {
        animationDisabled.current = true;
        Scroll.scroller.scrollTo(target, {
            duration: 0,
            smooth: false,
            offset: offset,
        });
        setTimeout(() => {
            animationDisabled.current = false;
        }, 500);
        setIsScrolling(false);
    };

    const onClickLandingCta = () => {
        Scroll.scroller.scrollTo('content', {
            duration: 1200,
            smooth: true,
            linear: true,
            offset: 1,
        });
    };

    return (
        <Container className="main">
            {isScrolling && <Curtain />}

            <LandingPageWrapper ref={landingRef} className="landing-wrapper">
                <LightHeader displayState={displayState} />
                <Landing onClickLandingCta={onClickLandingCta} displayState={displayState} />
            </LandingPageWrapper>

            <Scroll.Element name="content" />
            <ContentWrapper
                ref={contentRef}
                className="content-wrapper"
                isForwarded={scrollPosition >= windowSize.height / 2}
            >
                <Content>
                    <Home />
                </Content>
            </ContentWrapper>
        </Container>
    );
};

export default Main;

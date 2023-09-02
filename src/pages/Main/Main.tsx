import React, { useContext, useEffect, useRef } from 'react';
import { Container, Content, LandingPageWrapper, ContentWrapper } from './Main-styles';
import { Landing, Home } from './sections';
import { Header } from '../../elements';
import { useWindowSize } from 'usehooks-ts';
import { useScrollPosition } from '../../hooks';
import { useAnimation } from './hooks';
import { AppContext } from '../../App';

const Main = () => {
    const landingRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const { isLoaded } = useContext(AppContext);

    const animationDisabled = useRef(false);
    useAnimation(landingRef, contentRef, animationDisabled.current);

    useEffect(() => {
        if (isLoaded === true) {
            animationDisabled.current = true;
            window.scrollTo({
                top: contentRef.current!.offsetTop,
            });
            setTimeout(() => {
                animationDisabled.current = false;
            }, 500);
        }
    }, []);

    return (
        <Container>
            <LandingPageWrapper ref={landingRef} className="landing-wrapper">
                <Header isMainHeader={false} />
                <Landing />
            </LandingPageWrapper>

            <ContentWrapper
                ref={contentRef}
                className="content-wrapper"
                onTop={scrollPosition >= windowSize.height / 2}
            >
                <Content>
                    <Home />
                </Content>
            </ContentWrapper>
        </Container>
    );
};

export default Main;

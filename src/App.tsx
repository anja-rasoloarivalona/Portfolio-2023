import React from 'react';
import { Wrapper, Container, Content, LandingPageWrapper, ContentWrapper } from './App-styles';
import { LandingPage, HomePage } from './pages';

import { Header, SendEmail, ShortcutLinks } from './elements';
import { useAppAnimation, useScrollPosition } from './hooks';
import { useWindowSize } from 'usehooks-ts';

const App = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    useAppAnimation();

    return (
        <Wrapper>
            <Header />
            <ShortcutLinks />
            <SendEmail />

            <Container>
                <LandingPageWrapper id="landing-wrapper">
                    <Header isMainHeader={false} />
                    <LandingPage />
                </LandingPageWrapper>

                <ContentWrapper id="content-wrapper" onTop={scrollPosition >= windowSize.height / 2}>
                    <Content>
                        <HomePage />
                    </Content>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default App;

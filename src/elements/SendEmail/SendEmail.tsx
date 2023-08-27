import React from 'react';
import { Container, Content, ContentBar, ContentText } from './SendEmail-styles';

// hooks
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';

const SendEmail = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    return (
        <Container scrollPosition={scrollPosition} windowHeight={windowSize.height}>
            <Content>
                <ContentText href="mailto:rasoloanja@gmail.com" target="_blank">
                    rasoloanja@gmail.com
                </ContentText>
                <ContentBar />
            </Content>
        </Container>
    );
};

export default SendEmail;

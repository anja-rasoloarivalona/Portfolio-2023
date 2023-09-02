import React, { useContext } from 'react';
import { Container, Content, ContentBar, ContentText } from './SendEmail-styles';

// hooks
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../App';

const SendEmail = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const { pathname } = useLocation();
    const { openedMenu } = useContext(AppContext);

    return (
        <Container
            isDisplayed={pathname !== '/' || openedMenu != null || scrollPosition >= windowSize.height}
        >
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

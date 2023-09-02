import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

// styles and components
import { Container, Content, Cta } from './Header-styles';
import { Logo } from '../../components';
import { HeaderMenuIcon, HeaderMenu, HeaderForm } from './components';

// hooks
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';

// types
import { MenuList } from '../../types';

type HeaderProps = {
    isMainHeader?: boolean;
};

const Header = ({ isMainHeader = true }: HeaderProps) => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const { pathname } = useLocation();
    const { openedMenu } = useContext(AppContext);

    useEffect(() => {
        // Function to disable body scroll
        const disableScroll = (e: Event) => {
            e.preventDefault();
        };

        if (openedMenu != null) {
            // Add event listeners when menu is toggled
            document.body.addEventListener('touchmove', disableScroll, { passive: false });
            document.body.addEventListener('wheel', disableScroll, { passive: false });
        } else {
            // Remove event listeners when menu is not toggled
            document.body.removeEventListener('touchmove', disableScroll);
            document.body.removeEventListener('wheel', disableScroll);
        }

        // Clean up by removing event listeners when the component unmounts
        return () => {
            document.body.removeEventListener('touchmove', disableScroll);
            document.body.removeEventListener('wheel', disableScroll);
        };
    }, [openedMenu]);

    return (
        <Container
            id="app-header"
            isMainHeader={isMainHeader}
            isDisplayed={pathname !== '/' || openedMenu != null || scrollPosition >= windowSize.height}
            useBackground={isMainHeader === true && pathname !== '/' && openedMenu == null}
            disabledTransition={
                isMainHeader === true && pathname === '/' && scrollPosition < windowSize.height
            }
        >
            <Content>
                <Logo hasDarkBackground={isMainHeader || openedMenu != null} />
                <HeaderMenuIcon hasDarkBackground={isMainHeader} isMenuOpened={openedMenu != null} />
            </Content>
            {isMainHeader && (
                <Cta isDisplayed={openedMenu != null}>
                    {openedMenu === MenuList.DEFAULT && <HeaderMenu />}
                    {openedMenu === MenuList.FORM && <HeaderForm />}
                </Cta>
            )}
        </Container>
    );
};

export default Header;

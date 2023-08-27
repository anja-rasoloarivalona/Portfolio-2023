import React, { useEffect, useState } from 'react';
import { Container, Content } from './Header-styles';
import { Logo } from '../../components';
import { HeaderMenuIcon } from './components';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';

type HeaderProps = {
    isMainHeader?: boolean;
};

const Header = ({ isMainHeader = true }: HeaderProps) => {
    const [isToggled, setIsToggled] = useState(false);
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    useEffect(() => {
        // Function to disable body scroll
        const disableScroll = (e: Event) => {
            e.preventDefault();
        };

        if (isToggled) {
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
    }, [isToggled]);

    return (
        <Container
            id="app-header"
            scrollPosition={scrollPosition}
            isMainHeader={isMainHeader}
            windowHeight={windowSize.height}
        >
            <Content>
                <Logo hasDarkBackground={isMainHeader || isToggled} />
                <HeaderMenuIcon
                    hasDarkBackground={isMainHeader}
                    isToggled={isToggled}
                    setIsToggled={setIsToggled}
                />
            </Content>
            <HeaderMenu isToggled={isToggled} />
        </Container>
    );
};

export default Header;

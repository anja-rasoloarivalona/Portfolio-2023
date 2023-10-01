import React, { useContext, useEffect, useMemo, useState } from 'react';
import { config } from '../../../../config/main';

// hooks
import { useLocale, useScrollPosition } from '../../../../hooks';
import { useWindowSize } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';

// styles
import {
    Container,
    Content,
    Links,
    MenuContainer,
    PortfolioLink,
    ProjectList,
    ProjectListActiveIndicator,
    ProjectListItem,
} from './DarkHeader-styles';
import { Logo } from '../../../../components';
import { AppContext } from '../../../../App';
import { HeaderForm, HeaderMenu, HeaderMenuIcon, HeaderMobileMenuFooter } from '../../components';
import { MenuList } from '../../../../types';

const DarkHeader = () => {
    const locale = useLocale();
    const { pathname } = useLocation();
    const { openedMenu } = useContext(AppContext);
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [indicatorConfig, setIndicatorConfig] = useState({
        width: 0,
        offset: 0,
    });

    const list = useMemo(() => [...config.projects.values()], []);

    const showProjectList = useMemo(() => {
        return list.some((item) => pathname.includes(item.path));
    }, [pathname]);

    useEffect(() => {
        updateIndicatorConfig();
    }, []);

    useEffect(() => {
        updateIndicatorConfig();
    }, [locale, pathname]);

    const updateIndicatorConfig = () => {
        const index = Math.max(
            list.findIndex((item) => pathname.includes(item.path) && item.path !== ''),
            0
        );

        if (activeTabIndex !== index) {
            setActiveTabIndex(index);
        }
        const { id } = list[index];
        const el = document.getElementById(id);
        if (el != null) {
            setIndicatorConfig({
                width: el.offsetWidth,
                offset: el.offsetLeft,
            });
        }
    };

    useEffect(() => {
        // Function to disable body scroll
        // const disableScroll = (e: Event) => {
        //     e.preventDefault();
        // };
        // if (openedMenu != null) {
        //     // Add event listeners when menu is toggled
        //     document.body.addEventListener('touchmove', disableScroll, { passive: false });
        //     document.body.addEventListener('wheel', disableScroll, { passive: false });
        // } else {
        //     // Remove event listeners when menu is not toggled
        //     document.body.removeEventListener('touchmove', disableScroll);
        //     document.body.removeEventListener('wheel', disableScroll);
        // }
        // // Clean up by removing event listeners when the component unmounts
        // return () => {
        //     document.body.removeEventListener('touchmove', disableScroll);
        //     document.body.removeEventListener('wheel', disableScroll);
        // };
    }, [openedMenu]);

    return (
        <Container
            id="app-header"
            className="app-header app-header--dark"
            isDisplayed={pathname !== '/' || openedMenu != null || scrollPosition >= windowSize.height}
            useBackground={pathname !== '/' && pathname !== '/about'}
            disabledTransition={pathname === '/' && scrollPosition < windowSize.height}
        >
            <Content>
                <Logo hasDarkBackground />
                {showProjectList && openedMenu == null && (
                    <Links>
                        <PortfolioLink to="/">Portfolio</PortfolioLink>
                        <ProjectList>
                            {list.map((item, index) => (
                                <ProjectListItem key={index} id={item.id} to={item.path} end>
                                    {item.companyName}
                                </ProjectListItem>
                            ))}
                            <ProjectListActiveIndicator {...indicatorConfig} />
                        </ProjectList>
                    </Links>
                )}
                <HeaderMenuIcon isMainHeader={true} isMenuOpened={openedMenu != null} />
            </Content>

            <MenuContainer isDisplayed={openedMenu != null}>
                {openedMenu === MenuList.DEFAULT && <HeaderMenu />}
                {openedMenu === MenuList.FORM && <HeaderForm />}
                <HeaderMobileMenuFooter />
            </MenuContainer>
        </Container>
    );
};

export default DarkHeader;

import React, { useEffect } from 'react';
import { Container, Content } from './Home-styles';
import { HomeAbout, HomeContact, HomeHero, HomeProjects, HomeSkills } from './sections';
import { useScrollPosition } from '../../../../hooks';
import { useWindowSize } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';
// import Scroll from 'react-scroll';

const Home = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const { hash } = useLocation();

    useEffect(() => {
        // if (hash?.length > 0) {
        //     const element = document.querySelector(hash);
        //     if (element != null) {
        //         // Scroll.scroller.scrollTo('content', {
        //         //     // duration: 0,
        //         //     smooth: false,
        //         //     offset: 100,
        //         // });
        //         // Scroll.scroller.scrollTo(hash, {
        //         //     // duration: 1200,
        //         //     smooth: false,
        //         //     // linear: true,
        //         //     offset: 100,
        //         // });
        //         element.scrollIntoView({
        //             block: 'start',
        //         });
        //         // Add more space from the top, e.g., 100 pixels
        //         const offset = 100;
        //         window.scroll(0, window.scrollY - offset);
        //     }
        // }
    }, [hash]);

    return (
        <Container>
            <HomeHero />
            <Content isDisplayed={scrollPosition >= windowSize.height}>
                <HomeProjects />
                <HomeSkills />
                <HomeAbout />
                <HomeContact />
            </Content>
        </Container>
    );
};

export default Home;

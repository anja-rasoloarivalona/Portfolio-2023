import React from 'react';
import { Container, Content } from './Home-styles';
import { HomeHero, HomeProjects, HomeSkills } from './sections';
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';

const Home = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    return (
        <Container>
            <HomeHero />
            <Content isDisplayed={scrollPosition >= windowSize.height}>
                <HomeProjects />
                <HomeSkills />
            </Content>
        </Container>
    );
};

export default Home;

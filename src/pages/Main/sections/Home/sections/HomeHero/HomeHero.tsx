import React, { useContext } from 'react';
import { Container, Content, ContentIntro, ContentTitle, ContentPresentation } from './HomeHero-styles';
import { OutlinedButton } from '../../../../../../components';
import { AppContext } from '../../../../../../App';
import { MenuList } from '../../../../../../types';

const HomeHero = () => {
    const { setOpenedMenu } = useContext(AppContext);

    return (
        <Container>
            <Content>
                <ContentIntro>Hi, my name is</ContentIntro>
                <ContentTitle>Anja Rasoloarivalona.</ContentTitle>
                <ContentPresentation>I am a full-stack developer</ContentPresentation>
                <OutlinedButton onClick={() => setOpenedMenu(MenuList.FORM)}>Contact</OutlinedButton>
            </Content>
        </Container>
    );
};

export default HomeHero;

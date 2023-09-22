import React, { useContext, useRef } from 'react';
import { Container, Content, ContentIntro, ContentTitle, ContentPresentation } from './HomeHero-styles';
import { Animated, OutlinedButton } from '../../../../../../components';
import { AppContext } from '../../../../../../App';
import { MenuList } from '../../../../../../types';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'usehooks-ts';

const HomeHero = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const { setOpenedMenu } = useContext(AppContext);
    const windowSize = useWindowSize();

    return (
        <Container ref={containerRef}>
            <Content>
                <Animated triggerPosition={windowSize.height}>
                    <ContentIntro>{t('homepage.hero.intro')}</ContentIntro>
                    <ContentTitle>Anja Rasoloarivalona.</ContentTitle>
                    <ContentPresentation>{t('homepage.hero.text')}</ContentPresentation>
                    <OutlinedButton onClick={() => setOpenedMenu(MenuList.FORM)}>
                        {t('homepage.hero.cta')}
                    </OutlinedButton>
                </Animated>
            </Content>
        </Container>
    );
};

export default HomeHero;

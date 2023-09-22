import React from 'react';
import { Container, Text, TextContainer } from './BizbizshareAbout-styles';
import { Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';

const BizbizshareAbout = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Title isCentered={false}>{t('projects.bizbizshare.page.about.title')}</Title>
            <TextContainer>
                <Text>{t('projects.bizbizshare.page.about.text_1')}</Text>
                <Text>{t('projects.bizbizshare.page.about.text_2')}</Text>
                <Text>{t('projects.bizbizshare.page.about.text_3')}</Text>
            </TextContainer>
        </Container>
    );
};

export default BizbizshareAbout;

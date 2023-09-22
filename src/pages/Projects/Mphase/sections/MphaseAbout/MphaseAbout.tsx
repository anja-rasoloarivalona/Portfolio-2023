import React from 'react';
import { Container, Text, TextContainer } from './MphaseAbout-styles';
import { Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';

const MphaseAbout = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Title isCentered={false}>{t('projects.mphase.page.about.title')}</Title>
            <TextContainer>
                <Text>{t('projects.mphase.page.about.text_1')}</Text>
                <Text>{t('projects.mphase.page.about.text_2')}</Text>
            </TextContainer>
        </Container>
    );
};

export default MphaseAbout;

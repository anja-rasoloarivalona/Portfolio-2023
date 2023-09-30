import React from 'react';
import { Container, Cta } from './HomeAbout-styles';
import { OutlinedButton, Paragraph, Title, Section } from '../../../../../../components';
import { RoutesPath } from '../../../../../../routes';
import { useTranslation } from 'react-i18next';
import { formatText } from '../../../../../../tools';

const HomeAbout = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Section>
                <Title isCentered={false}>{t('homepage.about.title')}</Title>
                <Paragraph>{formatText(t('homepage.about.text_1'))}</Paragraph>
                <Paragraph>{formatText(t('homepage.about.text_2'))}</Paragraph>
                <Cta>
                    <OutlinedButton path={RoutesPath.ABOUT}>{t('homepage.about.cta')}</OutlinedButton>
                </Cta>
            </Section>
        </Container>
    );
};

export default HomeAbout;

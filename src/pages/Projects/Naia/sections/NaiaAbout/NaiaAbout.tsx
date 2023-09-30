import React from 'react';
import { Paragraph, Section, Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { formatText } from '../../../../../tools';

const NaiaAbout = () => {
    const { t } = useTranslation();

    return (
        <Section>
            <Title isCentered={false}>{t('projects.naia.page.about.title')}</Title>
            <Paragraph>{formatText(t('projects.naia.page.about.text_1'))}</Paragraph>
            <Paragraph>{formatText(t('projects.naia.page.about.text_2'))}</Paragraph>
            <Paragraph>{formatText(t('projects.naia.page.about.text_3'))}</Paragraph>
        </Section>
    );
};

export default NaiaAbout;

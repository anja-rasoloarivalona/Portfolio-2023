import React from 'react';
import { List, ListItem, ListItemTitle } from './MphaseProjects-styles';
import { Paragraph, Section, Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';

const projects = [
    {
        id: 'mtransport',
        name: 'mTransport',
    },
    {
        id: 'astus',
        name: 'Astus ELD',
    },
    {
        id: 'scoola',
        name: 'Scoola',
    },
];

const MphaseProjects = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Title>{t('projects.mphase.page.projects.title')}</Title>
            <List>
                {projects.map((project, index) => (
                    <ListItem key={index}>
                        <ListItemTitle>{project.name}</ListItemTitle>
                        <Paragraph displayType="onSurface">
                            {t(`projects.mphase.page.projects.${project.id}.text` as ResourceKey)}
                        </Paragraph>
                    </ListItem>
                ))}
            </List>
        </Section>
    );
};

export default MphaseProjects;

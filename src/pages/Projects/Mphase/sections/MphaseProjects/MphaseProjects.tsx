import React from 'react';
import { Container, List, ListItem, ListItemText, ListItemTitle } from './MphaseProjects-styles';
import { Title } from '../../../../../components';
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
        <Container>
            <Title>{t('projects.mphase.page.projects.title')}</Title>
            <List>
                {projects.map((project, index) => (
                    <ListItem key={index}>
                        <ListItemTitle>{project.name}</ListItemTitle>
                        <ListItemText>
                            {t(`projects.mphase.page.projects.${project.id}.text` as ResourceKey)}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default MphaseProjects;

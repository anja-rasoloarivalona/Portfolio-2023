import React from 'react';
import { List, ListItem, ListItemCta, ListItemHeader, ListItemHeaderRole } from './NaiaRoles-styles';
import { OutlinedButton, Paragraph, Section, Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import CryptoJS from 'crypto-js';
import { projects } from '../../../../../config/projects';
import { ProjectId } from '../../../../../types';

const loginOptions = [
    {
        role: 'admin',
        color: {
            secondary: '#e1eaef',
            main: '#035b83',
        },
    },
    {
        role: 'lawyer',
        color: {
            secondary: '#ccfbf1',
            main: '#24a195',
        },
    },
    {
        role: 'employee',
        color: {
            secondary: '#fef3c7',
            main: '#e9af5d',
        },
    },
    {
        role: 'client',
        color: {
            secondary: '#e1eaef',
            main: '#035b83',
        },
    },
];

const NaiaRoles = () => {
    const { t } = useTranslation();

    const getAuthString = (role: string): string => {
        const auth = CryptoJS.AES.encrypt(
            `${role}@mail.com ${process.env.REACT_APP_NAIA_PASS}`,
            process.env.REACT_APP_SECRET
        ).toString();

        return encodeURIComponent(auth);
    };

    const project = projects.get(ProjectId.NAIA)!;

    return (
        <Section>
            <Title>{t('projects.naia.page.roles.title')}</Title>
            <List>
                {loginOptions.map((option, index) => (
                    <ListItem key={index}>
                        <ListItemHeader>
                            <ListItemHeaderRole roleColor={option.color}>
                                {t(`projects.naia.page.roles.${option.role}.title` as ResourceKey)}
                            </ListItemHeaderRole>
                        </ListItemHeader>
                        <Paragraph displayType="onSurface">
                            {t(`projects.naia.page.roles.${option.role}.text` as ResourceKey)}
                        </Paragraph>
                        <ListItemCta>
                            <OutlinedButton
                                hasArrow={false}
                                externalPath={`${project.websiteUrl}/uuid?auth=${getAuthString(option.role)}`}
                            >
                                {t('projects.naia.page.roles.login')}
                            </OutlinedButton>
                        </ListItemCta>
                    </ListItem>
                ))}
            </List>
        </Section>
    );
};

export default NaiaRoles;

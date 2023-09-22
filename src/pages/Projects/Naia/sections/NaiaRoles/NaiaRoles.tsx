import React from 'react';
import {
    Container,
    List,
    ListItem,
    ListItemCta,
    ListItemDescription,
    ListItemHeader,
    ListItemHeaderRole,
} from './NaiaRoles-styles';
import { OutlinedButton, Title } from '../../../../../components';

const loginOptions = [
    {
        role: 'admin',
        color: {
            secondary: '#e1eaef',
            main: '#035b83',
        },
        displayName: 'Naia admin',
    },
    {
        role: 'lawyer',
        color: {
            secondary: '#ccfbf1',
            main: '#24a195',
        },
        displayName: 'Naia lawyer',
    },
    {
        role: 'employee',
        color: {
            secondary: '#fef3c7',
            main: '#e9af5d',
        },
        displayName: 'Naia employee',
    },
    {
        role: 'client',
        color: {
            secondary: '#e1eaef',
            main: '#035b83',
        },
        displayName: 'Naia client',
    },
];

const NaiaRoles = () => {
    return (
        <Container>
            <Title>NAIA roles</Title>

            <List>
                {loginOptions.map((option, index) => (
                    <ListItem key={index}>
                        <ListItemHeader>
                            <ListItemHeaderRole roleColor={option.color}>{option.role}</ListItemHeaderRole>
                        </ListItemHeader>
                        <ListItemDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quidem
                            veniam ipsam cumque tempora obcaecati. Ipsam assumenda dolor aliquam, nostrum quia
                            vero minima atque ipsa, magnam quidem accusamus cum repudiandae nemo eos corrupti
                            sunt possimus et maxime tempore minus! Modi necessitatibus natus repellendus
                            voluptatum iste itaque, voluptatibus quisquam neque consectetur!
                        </ListItemDescription>
                        <ListItemCta>
                            <OutlinedButton hasArrow={false}>Login</OutlinedButton>
                        </ListItemCta>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default NaiaRoles;

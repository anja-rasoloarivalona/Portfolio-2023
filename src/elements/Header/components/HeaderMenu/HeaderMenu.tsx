import React from 'react';
import { Container, List, ListItem } from './HeaderMenu-styles';

type HeaderMenuProps = {
    isToggled: boolean;
};

const HeaderMenu = ({ isToggled }: HeaderMenuProps) => {
    return (
        <Container isToggled={isToggled}>
            <List>
                <ListItem>My projects</ListItem>
                <ListItem>My skills</ListItem>
                <ListItem>About me</ListItem>
                <ListItem>Get in touch</ListItem>
                <ListItem>French</ListItem>
            </List>
        </Container>
    );
};

export default HeaderMenu;

import React, { useContext } from 'react';
import { List, ListItem } from './HeaderMenu-styles';
import { AppContext } from '../../../../App';
import { MenuList } from '../../../../types';

const HeaderMenu = () => {
    const { setOpenedMenu } = useContext(AppContext);
    return (
        <List>
            <ListItem>My projects</ListItem>
            <ListItem>My skills</ListItem>
            <ListItem>About me</ListItem>
            <ListItem onClick={() => setOpenedMenu(MenuList.FORM)}>Get in touch</ListItem>
            <ListItem>French</ListItem>
        </List>
    );
};

export default HeaderMenu;

import React, { useContext } from 'react';
import { Container, Bar } from './HeaderMenuIcon-styles';
import { AppContext } from '../../../../App';
import { MenuList } from '../../../../types';

type HeaderMenuIconProps = {
    isMainHeader: boolean;
    isMenuOpened: boolean;
};

const HeaderMenuIcon = ({ isMainHeader, isMenuOpened }: HeaderMenuIconProps) => {
    const { setOpenedMenu } = useContext(AppContext);

    return (
        <Container
            className="header__menu__icon"
            isMainHeader={isMainHeader}
            isMenuOpened={isMenuOpened}
            onClick={() => setOpenedMenu((prev) => (prev != null ? null : MenuList.DEFAULT))}
        >
            <Bar />
            <Bar />
            <Bar />
        </Container>
    );
};

export default HeaderMenuIcon;

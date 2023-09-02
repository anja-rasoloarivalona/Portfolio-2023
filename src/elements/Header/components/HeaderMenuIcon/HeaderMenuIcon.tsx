import React, { useContext } from 'react';
import { Container, Bar } from './HeaderMenuIcon-styles';
import { AppContext } from '../../../../App';
import { MenuList } from '../../../../types';

type HeaderMenuIconProps = {
    hasDarkBackground: boolean;
    isMenuOpened: boolean;
};

const HeaderMenuIcon = ({ hasDarkBackground, isMenuOpened }: HeaderMenuIconProps) => {
    const { setOpenedMenu } = useContext(AppContext);

    return (
        <Container
            hasDarkBackground={hasDarkBackground}
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

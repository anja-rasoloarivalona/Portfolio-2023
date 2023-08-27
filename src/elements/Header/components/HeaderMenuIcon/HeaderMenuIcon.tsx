import React from 'react';
import { Container, Bar } from './HeaderMenuIcon-styles';

type HeaderMenuIconProps = {
    hasDarkBackground: boolean;
    isToggled: boolean;
    setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMenuIcon = ({ hasDarkBackground, isToggled, setIsToggled }: HeaderMenuIconProps) => {
    return (
        <Container
            hasDarkBackground={hasDarkBackground}
            isToggled={isToggled}
            onClick={() => setIsToggled((prev) => !prev)}
        >
            <Bar />
            <Bar />
            <Bar />
        </Container>
    );
};

export default HeaderMenuIcon;

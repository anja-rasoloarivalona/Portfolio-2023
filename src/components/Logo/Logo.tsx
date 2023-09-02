import React from 'react';
import { Container } from './Logo-styles';
import { Link } from 'react-router-dom';

type LogoProps = {
    hasDarkBackground?: boolean;
};

const Logo = ({ hasDarkBackground = true }: LogoProps) => {
    return (
        <Link to="/">
            <Container hasDarkBackground={hasDarkBackground}>Anja.</Container>;
        </Link>
    );
};

export default Logo;

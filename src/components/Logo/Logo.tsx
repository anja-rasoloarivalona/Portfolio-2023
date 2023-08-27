import React from 'react';
import { Container } from './Logo-styles';

type LogoProps = {
    hasDarkBackground?: boolean;
};

const Logo = ({ hasDarkBackground = true }: LogoProps) => {
    return <Container hasDarkBackground={hasDarkBackground}>Anja.</Container>;
};

export default Logo;

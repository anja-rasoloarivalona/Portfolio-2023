import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './ThreeDButton-styles';

type ThreeDButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const ThreeDButton = ({ children }: ThreeDButtonProps) => {
    return <Container>{children}</Container>;
};

export default ThreeDButton;

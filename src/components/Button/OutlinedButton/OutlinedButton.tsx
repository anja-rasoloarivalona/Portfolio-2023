import React, { ButtonHTMLAttributes } from 'react';
import { Container, IconContainer, IconBar } from './OutlinedButton-styles';
import { BsChevronRight } from 'react-icons/bs';

export type OutlinedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    hasDarkBackground?: boolean;
};

const OutlinedButton = ({ children, hasDarkBackground = true, ...rest }: OutlinedButtonProps) => {
    return (
        <Container {...rest} hasDarkBackground={hasDarkBackground} className="button">
            {children}
            <IconContainer className="button__icon">
                <IconBar className="button__icon__bar" />
                <BsChevronRight />
            </IconContainer>
        </Container>
    );
};

export default OutlinedButton;

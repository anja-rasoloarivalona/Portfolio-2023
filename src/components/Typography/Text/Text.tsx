import React from 'react';
import { Container } from './Text-styles';

type TextProps = {
    children: React.ReactNode;
    displayType?: 'onSurface' | 'onBackground';
    primary?: boolean;
};

const Text = ({ children, displayType = 'onBackground', primary = false }: TextProps) => {
    return (
        <Container displayType={displayType} primary={primary}>
            {children}
        </Container>
    );
};

export default Text;

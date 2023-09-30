import React from 'react';
import { Container } from './Paragraph-styles';

type ParagraphProps = {
    children: React.ReactNode;
    displayType?: 'onSurface' | 'onBackground';
    primary?: boolean;
};

const Paragraph = ({ children, displayType = 'onBackground', primary = false }: ParagraphProps) => {
    return (
        <Container displayType={displayType} primary={primary}>
            {children}
        </Container>
    );
};

export default Paragraph;

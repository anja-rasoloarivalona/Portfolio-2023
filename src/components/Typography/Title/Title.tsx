import React from 'react';
import { Bar, Container, Text } from './Title-styles';

type TitleProps = {
    children: React.ReactNode;
    isCentered?: boolean;
    expandBottomSpace?: boolean;
};

const Title = ({ children, isCentered = true, expandBottomSpace = false }: TitleProps) => {
    return (
        <Container isCentered={isCentered} expandBottomSpace={expandBottomSpace}>
            {isCentered && <Bar />}
            <Text>{children}</Text>
            <Bar />
        </Container>
    );
};

export default Title;

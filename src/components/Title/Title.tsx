import React from 'react';
import { Bar, Container, Text } from './Title-styles';

type TitleProps = {
    children: React.ReactNode;
    isCentered?: boolean;
};

const Title = ({ children, isCentered = true }: TitleProps) => {
    return (
        <Container isCentered={isCentered}>
            {isCentered && <Bar />}
            <Text>{children}</Text>
            <Bar />
        </Container>
    );
};

export default Title;

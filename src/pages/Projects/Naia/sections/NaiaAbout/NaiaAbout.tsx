import React from 'react';
import { Container, Text } from './NaiaAbout-styles';
import { Title } from '../../../../../components';

const NaiaAbout = () => {
    return (
        <Container>
            <Title isCentered={false}>About NAIA</Title>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatem deserunt inventore
                impedit qui dicta nisi dolor vero voluptates praesentium, sapiente vel optio id aperiam
                dolores tempore atque earum distinctio?
            </Text>
        </Container>
    );
};

export default NaiaAbout;

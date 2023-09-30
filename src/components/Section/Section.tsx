import React from 'react';
import { Container } from './Section-styles';

type SectionProps = {
    children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
    return <Container>{children}</Container>;
};

export default Section;

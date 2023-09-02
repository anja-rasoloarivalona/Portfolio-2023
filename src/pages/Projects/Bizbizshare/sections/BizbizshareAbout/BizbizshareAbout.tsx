import React from 'react';
import { Container, Text } from './BizbizshareAbout-styles';
import { Title } from '../../../../../components';

const BizbizshareAbout = () => {
    const text =
        "In the heart of Montreal's bustling startup landscape, BizBizShare embarked on a transformative journey to reshape B2B marketplaces. BizBizShare is dedicated to delivering practical technology solutions that have significantly impacted the way businesses connect. Our journey has been marked by several key achievements";

    return (
        <Container>
            <Title isCentered={false}>About Bizbizshare</Title>
            <Text>{text}</Text>
        </Container>
    );
};

export default BizbizshareAbout;

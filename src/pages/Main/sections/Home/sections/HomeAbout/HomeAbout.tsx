import React from 'react';
import { Container, Text, Cta, TextContainer } from './HomeAbout-styles';
import { OutlinedButton, Title } from '../../../../../../components';
import { RoutesPath } from '../../../../../../routes';
import { useTranslation } from 'react-i18next';
import { formatJSX } from '../../../../../../tools';

const HomeAbout = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Title isCentered={false}>About me</Title>
            <TextContainer>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem inventore
                    voluptatem laborum molestiae provident tempore corrupti enim iste nulla id magnam expedita
                    neque sed ipsa exercitationem, rerum suscipit ad?
                </Text>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima autem inventore
                    voluptatem laborum molestiae provident tempore corrupti enim iste nulla id magnam expedita
                    neque sed ipsa exercitationem, rerum suscipit ad?
                </Text>
                <Text>{formatJSX(t('test'), { name: <b>haha</b>, object: <b>loooool</b> })}</Text>
            </TextContainer>

            <Cta>
                <OutlinedButton path={RoutesPath.ABOUT}>Learn more</OutlinedButton>
            </Cta>
        </Container>
    );
};

export default HomeAbout;

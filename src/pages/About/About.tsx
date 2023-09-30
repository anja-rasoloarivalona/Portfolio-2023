import React from 'react';
import { Wrapper, Container, Content, Image, ContentTitle, ImageContainer } from './About-styles';
import { useTranslation } from 'react-i18next';
import { Paragraph } from '../../components';
import { formatText } from '../../tools';

const About = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Container>
                <ImageContainer>
                    <Image src="https://media.licdn.com/dms/image/C4E03AQHkC0EV6wsGiA/profile-displayphoto-shrink_800_800/0/1661545174878?e=1698883200&v=beta&t=JMa9q9guhoQmecMVaGBFO0lxJe3rTdFY7L7mjT5hWPs" />
                </ImageContainer>
                <Content>
                    <ContentTitle>"{t('about.title')}"</ContentTitle>
                    <Paragraph>{formatText(t('about.text_1'))}</Paragraph>
                    <Paragraph>{formatText(t('about.text_2'))}</Paragraph>
                    <Paragraph>{formatText(t('about.text_3'))}</Paragraph>
                    <Paragraph>{formatText(t('about.text_4'))}</Paragraph>
                    <Paragraph>{formatText(t('about.text_5'))}</Paragraph>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default About;

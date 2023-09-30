import React from 'react';
import { Container, Content, ContentList, ContentListItem } from './BizbishareAchivements-styles';
import { Paragraph, Text, Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';

const BizbizshareAchievements = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Title isCentered={false}>{t('projects.bizbizshare.page.achievements.title')}</Title>
            <Content>
                <Paragraph>{t('projects.bizbizshare.page.achievements.introduction')}</Paragraph>
                <ContentList>
                    {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
                        <ContentListItem key={index}>
                            <Text primary>
                                {t(
                                    `projects.bizbizshare.page.achievements.text${
                                        index + 1
                                    }.title` as ResourceKey
                                )}
                                : &nbsp;
                            </Text>
                            <Text>
                                {t(
                                    `projects.bizbizshare.page.achievements.text${
                                        index + 1
                                    }.content` as ResourceKey
                                )}
                            </Text>
                        </ContentListItem>
                    ))}
                </ContentList>
            </Content>
        </Container>
    );
};

export default BizbizshareAchievements;

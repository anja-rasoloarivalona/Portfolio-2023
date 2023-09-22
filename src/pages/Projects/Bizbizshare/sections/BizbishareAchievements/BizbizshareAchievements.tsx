import React from 'react';
import {
    Container,
    Content,
    ContentIntro,
    ContentList,
    ContentListItem,
    ContentListItemLabel,
    ContentListItemText,
} from './BizbishareAchivements-styles';
import { Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';

const BizbizshareAchievements = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Title isCentered={false}>{t('projects.bizbizshare.page.achievements.title')}</Title>
            <Content>
                <ContentIntro>{t('projects.bizbizshare.page.achievements.introduction')}</ContentIntro>
                <ContentList>
                    {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
                        <ContentListItem key={index}>
                            <ContentListItemLabel>
                                {t(
                                    `projects.bizbizshare.page.achievements.text${
                                        index + 1
                                    }.title` as ResourceKey
                                )}
                            </ContentListItemLabel>
                            : &nbsp;
                            <ContentListItemText>
                                {t(
                                    `projects.bizbizshare.page.achievements.text${
                                        index + 1
                                    }.content` as ResourceKey
                                )}
                            </ContentListItemText>
                        </ContentListItem>
                    ))}
                </ContentList>
            </Content>
        </Container>
    );
};

export default BizbizshareAchievements;

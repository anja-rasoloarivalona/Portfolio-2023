import React, { useRef } from 'react';
import {
    Container,
    List,
    ListItem,
    ListItemDescription,
    ListItemIcon,
    ListItemSubList,
    ListItemSubListItem,
    ListItemTitle,
} from './HomeSkills.-styles';
import { Title } from '../../../../../../components';
import { FaCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { SKILLS_LIST } from './data';
import { Skill } from '../../../../../../types';
import { HomeSkillsSlider } from './components';
import { useWindowSize } from 'usehooks-ts';
import { useScrollTrigger, useViewedPath } from '../../../../../../hooks';
import Scroll from 'react-scroll';
import { ResourceKey } from 'i18next';

const SLIDER_BREAKPOINT = 860;

const HomeSkills = () => {
    const { t } = useTranslation();
    const windowSize = useWindowSize();
    const containerRef = useRef<HTMLDivElement>(null);
    const { isTriggered } = useScrollTrigger({ triggerRef: containerRef, offset: windowSize.height });
    const isViewed = useViewedPath();

    const renderSkill = (skill: Skill, index: number) => {
        return (
            <ListItem key={index} isDisplayed={isTriggered} isDisabled={isViewed} index={index}>
                <ListItemIcon>
                    <FaCode />
                </ListItemIcon>
                <ListItemTitle>{t(`homepage.skills.${skill.id}.title` as ResourceKey)}</ListItemTitle>
                <ListItemDescription>
                    {t(`homepage.skills.${skill.id}.description` as ResourceKey)}
                </ListItemDescription>
                <ListItemSubList>
                    {skill.list.map((item, subIndex) => (
                        <ListItemSubListItem key={`${index}${subIndex}`}>{item}</ListItemSubListItem>
                    ))}
                </ListItemSubList>
            </ListItem>
        );
    };

    return (
        <Container ref={containerRef} id="skills">
            <Scroll.Element name="#skills" />
            <Title expandBottomSpace>{t('generic.my_skills')}</Title>
            {windowSize.width > SLIDER_BREAKPOINT ? (
                <List>{SKILLS_LIST.map((skill, index) => renderSkill(skill, index))}</List>
            ) : (
                <HomeSkillsSlider renderSkill={renderSkill} />
            )}
        </Container>
    );
};

export default HomeSkills;

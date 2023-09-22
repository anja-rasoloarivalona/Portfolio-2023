import React, { useEffect, useRef, useState } from 'react';
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
import { useScrollTrigger } from '../../../../../../hooks';
import { gsap } from 'gsap';

const SLIDER_BREAKPOINT = 860;

const HomeSkills = () => {
    const { t } = useTranslation();
    const windowSize = useWindowSize();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDisplayed, setIsDisplayed] = useState(false);

    const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
    const { isTriggered } = useScrollTrigger({ triggerRef: containerRef, offset: windowSize.height });

    useEffect(() => {
        if (isTriggered && isDisplayed !== true) {
            setIsDisplayed(true);

            // Create animations for each item
            itemRefs.current.forEach((itemRef, index) => {
                gsap.to(itemRef, {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    delay: index * 0.2, // Adjust the delay to control the stagger effect
                });
            });
        }
    }, [isTriggered]);

    const renderSkill = (skill: Skill, index: number) => {
        return (
            <ListItem key={index} ref={(el) => (itemRefs.current[index] = el)}>
                <ListItemIcon>
                    <FaCode />
                </ListItemIcon>
                <ListItemTitle>{skill.title}</ListItemTitle>
                <ListItemDescription>{skill.description}</ListItemDescription>
                <ListItemSubList>
                    {skill.list.map((item, subIndex) => (
                        <ListItemSubListItem key={`${index}${subIndex}`}>{item}</ListItemSubListItem>
                    ))}
                </ListItemSubList>
            </ListItem>
        );
    };

    return (
        <Container ref={containerRef}>
            <Title>{t('generic.my_skills')}</Title>
            {windowSize.width > SLIDER_BREAKPOINT ? (
                <List>{SKILLS_LIST.map((skill, index) => renderSkill(skill, index))}</List>
            ) : (
                <HomeSkillsSlider renderSkill={renderSkill} />
            )}
        </Container>
    );
};

export default HomeSkills;

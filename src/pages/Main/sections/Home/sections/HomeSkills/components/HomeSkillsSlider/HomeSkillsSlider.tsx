import React, { useMemo, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { Container, SliderItem } from './HomeSkillsSlider-styles';
import { Skill } from '../../../../../../../../types';
import { SKILLS_LIST } from '../../data';
import { useWindowSize } from 'usehooks-ts';

type HomeSkillsSliderProps = {
    renderSkill: (skill: Skill, index: number) => React.ReactNode;
};

const LARGE_SLIDER_BREAKPOINT = 580;

const HomeSkillsSlider = ({ renderSkill }: HomeSkillsSliderProps) => {
    const sliderRef = useRef<Slider>(null);
    const windowSize = useWindowSize();

    const customSettings = useMemo(() => {
        const object = {
            slidesToShow: 2.3,
        } as Settings;

        if (windowSize.width <= LARGE_SLIDER_BREAKPOINT) {
            object.slidesToShow = 1;
            object.centerMode = true;
            object.centerPadding = '50px';
        }

        if (windowSize.width <= 350) {
            object.centerPadding = '30px';
        }

        return object;
    }, [windowSize]);

    return (
        <Container>
            <Slider
                ref={sliderRef}
                speed={700}
                initialSlide={0}
                slidesToScroll={1}
                arrows={false}
                infinite={false}
                dots={true}
                {...customSettings}
            >
                {SKILLS_LIST.map((skill, index) => (
                    <SliderItem
                        key={index}
                        className={`slider-item ${index === 0 ? 'first' : ''} ${
                            index === SKILLS_LIST.length - 1 ? 'last' : ''
                        }`}
                    >
                        {renderSkill(skill, index)}
                    </SliderItem>
                ))}
            </Slider>
        </Container>
    );
};

export default HomeSkillsSlider;

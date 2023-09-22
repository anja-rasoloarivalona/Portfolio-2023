import React, { useMemo } from 'react';
import { Container, SliderItem } from './BizbizhshareMarketplacesSlider-styles';
import { BizbizshareMarketplace } from '../../types';
import { useWindowSize } from 'usehooks-ts';
import Slider, { Settings } from 'react-slick';
import { BIZBIZSHARE_MARKETPLACES_LIST } from '../../data';

type BizbizshareMarketplacesSliderProps = {
    renderMarketplace: (marketplace: BizbizshareMarketplace) => React.ReactNode;
};

const LARGE_SLIDER_BREAKPOINT = 580;

const BizbizshareMarketplacesSlider = ({ renderMarketplace }: BizbizshareMarketplacesSliderProps) => {
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
                speed={700}
                initialSlide={0}
                slidesToScroll={1}
                arrows={false}
                infinite={false}
                dots={true}
                {...customSettings}
            >
                {BIZBIZSHARE_MARKETPLACES_LIST.map((skill, index) => (
                    <SliderItem
                        key={index}
                        className={`slider-item ${index === 0 ? 'first' : ''} ${
                            index === BIZBIZSHARE_MARKETPLACES_LIST.length - 1 ? 'last' : ''
                        }`}
                    >
                        {renderMarketplace(skill)}
                    </SliderItem>
                ))}
            </Slider>
        </Container>
    );
};

export default BizbizshareMarketplacesSlider;

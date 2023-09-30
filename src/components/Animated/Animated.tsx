import React from 'react';
import { Slide } from './Animated-styles';
import { useScrollTrigger } from '../../hooks';

export type AnimatedProps = {
    children: React.ReactNode;
    offset?: number;
    isDisabled?: boolean;
    isTriggered?: boolean; // If true, the animation will be triggered
    triggerRef?: React.RefObject<HTMLDivElement>; // Ref to be used as trigger for animation
    triggerPosition?: number; // Scroll position at which the animation will trigger
    useDarkBackground?: boolean;
};

const Animated = ({
    children,
    triggerRef,
    triggerPosition,
    isTriggered = false,
    isDisabled = false,
    useDarkBackground = true,
    offset = 0,
}: AnimatedProps) => {
    const scrollTriggered = useScrollTrigger({
        triggerPosition,
        triggerRef,
        offset,
    });

    const renderChildrenWithSlide = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, undefined, [
                    child.props.children,
                    <Slide
                        key="slide"
                        playAnimation={isTriggered || scrollTriggered.isTriggered}
                        className="animated__slide"
                        useDarkBackground={useDarkBackground}
                    />,
                ]);
            }
            return child;
        });
    };

    if (isDisabled === true) {
        return <React.Fragment>{children}</React.Fragment>;
    }

    return <React.Fragment>{renderChildrenWithSlide()}</React.Fragment>;
};

export default Animated;

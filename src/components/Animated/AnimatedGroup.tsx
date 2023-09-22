import React from 'react';
import Animated, { type AnimatedProps } from './Animated';

const AnimatedGroup = ({ children, ...rest }: AnimatedProps) => {
    return (
        <>
            {React.Children.map(children, (child) => (
                <Animated {...rest}>{child}</Animated>
            ))}
        </>
    );
};

export default AnimatedGroup;

import React, { useEffect, useState } from 'react';
import { Container, Content, Video, Text } from './LandingPageForeground-styles';
import video from '../../../assets/background.mp4';
import { useWindowSize } from 'usehooks-ts';

type LandingPageForegroundProps = {
    text: string;
};

const SIZE = 600;

const LandingPageForeground = ({ text }: LandingPageForegroundProps) => {
    const windowSize = useWindowSize();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouseEnabled, setMouseEnabled] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (isInitialized === false && windowSize.width > 0 && windowSize.height > 0) {
            setPosition({ x: 200, y: (windowSize.height - SIZE) / 2 });
            setIsInitialized(true);
        }
    }, [windowSize]);

    useEffect(() => {
        if (mouseEnabled === true) {
            document.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseEnabled]);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        setPosition({
            x: clientX - SIZE / 2,
            y: clientY - SIZE / 2,
        });
    };

    if (isInitialized !== true) {
        return <></>;
    }

    return (
        <Container
            className="container"
            position={position}
            onMouseDown={() => setMouseEnabled((prev) => !prev)}
        >
            <Content className="content" position={position}>
                <Video autoPlay loop muted width="100%" height="auto">
                    <source src={video} type="video/mp4" />
                </Video>
                <Text>{text}</Text>
            </Content>
        </Container>
    );
};

export default LandingPageForeground;

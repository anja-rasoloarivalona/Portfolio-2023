import React, { useEffect, useState, useRef } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { Wrapper, Container, Video, Content, ContentText } from './LandingForeground-styles';
import video from '../../../../../assets/background.mp4';
import { OutlinedButton } from '../../../../../components';
import { useTranslation } from 'react-i18next';

type LandingPageForegroundProps = {
    onClickLandingCta: () => void;
};

const LandingForeground = ({ onClickLandingCta }: LandingPageForegroundProps) => {
    const { t } = useTranslation();
    const windowSize = useWindowSize();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentTextRef = useRef<HTMLHeadingElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [moveEnabled, setMoveEnabled] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (
            isInitialized === false &&
            windowSize.width > 566 &&
            windowSize.height > 0 &&
            wrapperRef.current != null &&
            contentTextRef.current != null
        ) {
            setPosition({
                x: contentTextRef.current!.offsetLeft - 10,
                y: (windowSize.height - wrapperRef.current.clientHeight - 90) / 2,
            });
            setIsInitialized(true);
        }
    }, [windowSize, contentTextRef, wrapperRef]);

    useEffect(() => {
        if (moveEnabled === true && windowSize.width > 566) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [moveEnabled]);

    // *****************************************************************
    // Mouse
    // *****************************************************************

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
        setPosition({
            x: clientX - wrapperRef.current!.clientHeight / 2,
            y: clientY - wrapperRef.current!.clientHeight / 2,
        });
    };

    const handleMouseUp = () => {
        // Disable the handleMouseMove function
        setMoveEnabled(false);
        // Remove the mousemove event listener
        document.removeEventListener('mousemove', handleMouseMove);
    };

    // *****************************************************************
    // Touch screen
    // *****************************************************************

    const handleTouchMove = (event: TouchEvent) => {
        event.preventDefault();
        const { clientX, clientY } = event.touches[0];
        setPosition({
            x: clientX - wrapperRef.current!.clientHeight / 2,
            y: clientY - wrapperRef.current!.clientHeight / 2,
        });
    };

    const handleTouchEnd = () => {
        // Disable the handleMouseMove function
        setMoveEnabled(false);
        // Remove the mousemove event listener
        document.removeEventListener('touchmove', handleTouchMove);
    };

    return (
        <Wrapper
            ref={wrapperRef}
            className="container"
            position={position}
            onMouseDown={() => setMoveEnabled((prev) => !prev)}
            onTouchStart={() => setMoveEnabled(true)}
        >
            <Container className="content" position={position}>
                <Video autoPlay loop muted width="100%" height="auto">
                    <source src={video} type="video/mp4" />
                </Video>
                <Content>
                    <ContentText ref={contentTextRef}>{t('landing.title')}</ContentText>
                    <OutlinedButton onClick={() => onClickLandingCta()}> {t('landing.cta')}</OutlinedButton>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default LandingForeground;

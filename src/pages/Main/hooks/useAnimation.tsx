import { useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';
import gsap from 'gsap';
import { useScrollPosition } from '../../../hooks';

export const useAnimation = (
    landingRef: React.RefObject<HTMLDivElement>,
    contentRef: React.RefObject<HTMLDivElement>,
    isDisabled: boolean
) => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.height === 0 || isDisabled) {
            return;
        }

        const ratio = Math.min(1, scrollPosition / windowSize.height);

        // Calculate rotation angles for each face of the cube
        const maxRotation = 120;
        const frontFaceRotation = Math.min(maxRotation, ratio * maxRotation);
        const backFaceRotation = Math.min(0, -maxRotation + ratio * maxRotation);

        // Calculate the rotation angle and scale factor based on the scroll position
        const downScale = 0.5; // Maximum down scale factor
        const scale = ratio <= 0.5 ? 1 - ratio * downScale : 1 - downScale + ratio * downScale;
        const scaleValue = Math.min(1, scale);

        // Calculate y value
        const yMax = -100;
        const y = ratio <= 0.5 ? yMax * ratio : yMax * (1 - ratio);

        gsap.to(landingRef.current, {
            rotateX: frontFaceRotation,
            scale: scaleValue,
            y: y,
        });
        gsap.to(contentRef.current, {
            rotateX: Math.min(0, backFaceRotation),
            scale: scaleValue,
            y: y,
        });
    }, [scrollPosition, windowSize, isDisabled]);
};

import { useEffect } from 'react';
import { useScrollPosition } from './useScrollPosition';
import { useWindowSize } from 'usehooks-ts';
import gsap from 'gsap';

export const useAppAnimation = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.height === 0) {
            return;
        }

        const ratio = Math.min(1, scrollPosition / windowSize.height);

        // Calculate rotation angles for each face of the cube
        const maxRotation = 110;
        const frontFaceRotation = Math.min(maxRotation, ratio * maxRotation);
        const backFaceRotation = Math.min(0, -maxRotation + ratio * maxRotation);

        // Calculate the rotation angle and scale factor based on the scroll position
        const downScale = 1.2; // Maximum down scale factor
        const scale = ratio <= 0.5 ? 1 - ratio * downScale : 1 - downScale + ratio * downScale;
        const scaleValue = Math.min(1, scale);

        // Calculate y value
        const yMax = 200;
        const y = ratio <= 0.5 ? yMax * ratio : yMax * (1 - ratio);

        gsap.to('#landing-wrapper', { rotateX: frontFaceRotation, scale: scaleValue, y });
        gsap.to('#content-wrapper', {
            rotateX: Math.min(0, backFaceRotation),
            scale: scaleValue,
            y,
        });
    }, [scrollPosition, windowSize]);
};

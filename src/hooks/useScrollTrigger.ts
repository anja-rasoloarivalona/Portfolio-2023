import React, { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from './useScrollPosition';

type Props = {
    triggerRef?: React.RefObject<HTMLDivElement>;
    triggerPosition?: number;
    offset?: number;
    log?: boolean;
};

export const useScrollTrigger = ({ triggerRef, triggerPosition, offset = 0 }: Props) => {
    const [isTriggered, setIsTriggered] = useState(false);
    const scrollPosition = useScrollPosition();

    const elementTop = useRef(0);

    useEffect(() => {
        if (
            isTriggered === false &&
            triggerRef == null &&
            triggerPosition != null &&
            triggerPosition > 0 &&
            scrollPosition >= triggerPosition
        ) {
            setIsTriggered(true);
        }
    }, [scrollPosition, triggerPosition]);

    useEffect(() => {
        if (isTriggered === false && triggerPosition == null) {
            const element = triggerRef?.current;
            if (element != null) {
                if (elementTop.current === 0) {
                    const elementRect = element.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const distance = elementRect.top + scrollTop;
                    elementTop.current = distance;
                    return;
                }

                if (elementTop.current > 0 && scrollPosition + offset >= elementTop.current) {
                    setIsTriggered(true);
                }
            }
        }
    }, [scrollPosition, triggerRef?.current]);

    return {
        isTriggered,
    };
};

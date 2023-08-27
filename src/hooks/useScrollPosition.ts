import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    /**
     * Handle scroll
     */
    const handleScroll = () => {
        const position = window.scrollY || document.documentElement.scrollTop;
        setScrollPosition(position);
    };

    useEffect(() => {
        // Initial scroll position
        handleScroll();

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { useLocation } from 'react-router-dom';

export const useViewedPath = () => {
    const [isViewed, setIsViewed] = useState(false);
    const { viewedPathnames } = useContext(AppContext);
    const { pathname } = useLocation();

    useEffect(() => {
        if (viewedPathnames.includes(pathname)) {
            setIsViewed(true);
        }
    }, []);

    return isViewed;
};

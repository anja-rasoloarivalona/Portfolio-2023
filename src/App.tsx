import React, { createContext, useEffect, useState } from 'react';
import { Container } from './App-styles';
import { DarkHeader, SendEmail, ShortcutLinks } from './elements';
import Routes from './routes';
import { MenuList } from './types';
import { useLocation } from 'react-router-dom';

type AppContextType = {
    isLoaded: boolean;
    viewedPathnames: Array<String>;
    openedMenu: MenuList | null;
    setOpenedMenu: React.Dispatch<React.SetStateAction<MenuList | null>>;
};

export const AppContext = createContext<AppContextType>(null!);

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [openedMenu, setOpenedMenu] = useState<MenuList | null>(null);
    const { pathname } = useLocation();
    const [viewedPathnames, setViewedPathnames] = useState<Array<string>>([]);

    useEffect(() => {
        console.log({ process: process.env });

        // reset hash
        window.location.hash = '';
        window.scrollTo(0, 0);

        //  reset scroll
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        // enable app
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (viewedPathnames.includes(pathname) === false) {
            // Keep track of viewed pathnames
            setViewedPathnames((prev) => [...prev, pathname]);
        }
    }, [pathname]);

    return (
        <AppContext.Provider
            value={{
                isLoaded: isLoaded,
                viewedPathnames: viewedPathnames,
                openedMenu: openedMenu,
                setOpenedMenu: setOpenedMenu,
            }}
        >
            <Container className="app">
                <DarkHeader />
                <ShortcutLinks />
                <SendEmail />
                <Routes />
            </Container>
        </AppContext.Provider>
    );
};

export default App;

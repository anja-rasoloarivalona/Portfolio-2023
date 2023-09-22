import React, { createContext, useEffect, useState } from 'react';
import { Container } from './App-styles';
import { Header, SendEmail, ShortcutLinks } from './elements';
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
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (
            'scrollRestoration' in window.history &&
            isLoaded &&
            viewedPathnames.includes(pathname) === false
        ) {
            window.history.scrollRestoration = 'manual';
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Oper
        }
    }, [pathname]);

    useEffect(() => {
        if (viewedPathnames.includes(pathname) === false) {
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
                <Header />
                <ShortcutLinks />
                <SendEmail />
                <Routes />
            </Container>
        </AppContext.Provider>
    );
};

export default App;

import React, { createContext, useEffect, useState } from 'react';
import { Container } from './App-styles';
import { Header, SendEmail, ShortcutLinks } from './elements';
import Routes from './routes';
import { MenuList } from './types';

type AppContextType = {
    isLoaded: boolean;
    openedMenu: MenuList | null;
    setOpenedMenu: React.Dispatch<React.SetStateAction<MenuList | null>>;
};

export const AppContext = createContext<AppContextType>(null!);

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [openedMenu, setOpenedMenu] = useState<MenuList | null>(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <AppContext.Provider
            value={{
                isLoaded: isLoaded,
                openedMenu: openedMenu,
                setOpenedMenu: setOpenedMenu,
            }}
        >
            <Container>
                <Header />
                <ShortcutLinks />
                <SendEmail />
                <Routes />
            </Container>
        </AppContext.Provider>
    );
};

export default App;

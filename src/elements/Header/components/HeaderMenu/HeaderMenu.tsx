import React, { useContext } from 'react';
import { Container, List, ListItem } from './HeaderMenu-styles';
import { AppContext } from '../../../../App';
import { MenuList, Locale } from '../../../../types';
import { useTranslation } from 'react-i18next';
import { changeLocale } from '../../../../translations';
import { useLocale } from '../../../../hooks';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../../routes';
import { ResourceKey } from 'i18next';

const HeaderMenu = () => {
    const locale = useLocale();
    const { t } = useTranslation();
    const { setOpenedMenu } = useContext(AppContext);

    const links = [
        {
            translation: 'generic.my_works',
            path: `${RoutesPath.HOME}#works`,
            onClick: () => setOpenedMenu(null),
        },
        {
            translation: 'generic.my_skills',
            path: `${RoutesPath.HOME}#skills`,
            onClick: () => setOpenedMenu(null),
        },
        {
            translation: 'generic.about_me',
            path: RoutesPath.ABOUT,
            onClick: () => setOpenedMenu(null),
        },
        {
            translation: 'generic.get_in_touch',
            onClick: () => setOpenedMenu(MenuList.FORM),
        },
        {
            translation: 'generic.locale',
            onClick: () => changeLocale(locale === Locale.EN ? Locale.FR : Locale.EN),
        },
    ];

    return (
        <Container>
            <List>
                {links.map((link, index) => {
                    return (
                        <ListItem
                            key={index}
                            onClick={() => typeof link.onClick === 'function' && link.onClick()}
                        >
                            {link.path != null ? (
                                <Link to={`/${link.path}`}>{t(link.translation as ResourceKey)}</Link>
                            ) : (
                                <>{t(link.translation as ResourceKey)}</>
                            )}
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};

export default HeaderMenu;

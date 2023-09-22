import React, { useContext } from 'react';
import { Container, List, ListItem } from './HeaderMenu-styles';
import { AppContext } from '../../../../App';
import { MenuList, Locale } from '../../../../types';
import { useTranslation } from 'react-i18next';
import { changeLocale } from '../../../../translations';
import { useLocale } from '../../../../hooks';

const HeaderMenu = () => {
    const locale = useLocale();
    const { t } = useTranslation();
    const { setOpenedMenu } = useContext(AppContext);

    return (
        <Container>
            <List>
                <ListItem>{t('generic.my_works')}</ListItem>
                <ListItem>{t('generic.my_skills')}</ListItem>
                <ListItem>{t('generic.about_me')}</ListItem>
                <ListItem onClick={() => setOpenedMenu(MenuList.FORM)}>{t('generic.get_in_touch')}</ListItem>
                <ListItem onClick={() => changeLocale(locale === Locale.EN ? Locale.FR : Locale.EN)}>
                    {t('generic.locale')}
                </ListItem>
            </List>
        </Container>
    );
};

export default HeaderMenu;

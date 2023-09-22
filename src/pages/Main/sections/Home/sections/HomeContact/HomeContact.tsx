import React, { useContext } from 'react';
import { Container, Text, Title } from './HomeContact-styles';
import { OutlinedButton } from '../../../../../../components';
import { AppContext } from '../../../../../../App';
import { MenuList } from '../../../../../../types';
import { useTranslation } from 'react-i18next';

const HomeContact = () => {
    const { setOpenedMenu } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Container>
            <Title>{t('homepage.contact.title')}</Title>
            <Text>{t('homepage.contact.text')}</Text>
            <OutlinedButton onClick={() => setOpenedMenu(MenuList.FORM)}>
                {t('homepage.contact.cta')}
            </OutlinedButton>
        </Container>
    );
};

export default HomeContact;

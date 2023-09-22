import React from 'react';
import {
    Container,
    List,
    ListItem,
    ListItemCta,
    ListItemHeader,
    ListItemImage,
    ListItemImageContainer,
    ListItemText,
} from './BizbizshareMarketplaces-styles';
import { OutlinedButton, Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { ResourceKey } from 'i18next';
import { BizbizshareMarketplace } from './types';
import { useWindowSize } from 'usehooks-ts';
import { BIZBIZSHARE_MARKETPLACES_LIST } from './data';
import { BizbizshareMarketplacesSlider } from './components';

const SLIDER_BREAKPOINT = 750;

const BizbizshareMarketplaces = () => {
    const { t } = useTranslation();
    const windowSize = useWindowSize();

    const renderMarketplace = (marketplace: BizbizshareMarketplace) => {
        return (
            <ListItem key={marketplace.id}>
                <ListItemHeader>{marketplace.title}</ListItemHeader>
                <ListItemImageContainer>
                    <ListItemImage src={marketplace.image} />
                </ListItemImageContainer>
                <ListItemText>
                    {t(`projects.bizbizshare.page.marketplaces.${marketplace.id}.description` as ResourceKey)}
                </ListItemText>
                <ListItemCta className="cta">
                    <OutlinedButton isExpanded hasArrow={false} externalPath={marketplace.url}>
                        {t('projects.bizbizshare.page.marketplaces.cta')}
                    </OutlinedButton>
                </ListItemCta>
            </ListItem>
        );
    };

    return (
        <Container>
            <Title>{t('projects.bizbizshare.page.marketplaces.title')}</Title>
            {windowSize.width > SLIDER_BREAKPOINT ? (
                <List>{BIZBIZSHARE_MARKETPLACES_LIST.map((skill) => renderMarketplace(skill))}</List>
            ) : (
                <BizbizshareMarketplacesSlider renderMarketplace={renderMarketplace} />
            )}
        </Container>
    );
};

export default BizbizshareMarketplaces;

import React from 'react';
import { List } from './BizbizshareMarketplaces-styles';
import { ProjectCard, Section, Title } from '../../../../../components';
import { useTranslation } from 'react-i18next';
import { BizbizshareMarketplace } from './types';
import { BIZBIZSHARE_MARKETPLACES_LIST } from './data';

const BizbizshareMarketplaces = () => {
    const { t } = useTranslation();

    const renderMarketplaceCardItem = (marketplace: BizbizshareMarketplace, index: number) => {
        return (
            <ProjectCard
                key={index}
                subTitle={marketplace.region}
                title={marketplace.title}
                description={`projects.bizbizshare.page.marketplaces.${marketplace.id}.description`}
                image={marketplace.image}
                externalPath={marketplace.url}
                index={index}
                ctaText="projects.bizbizshare.page.marketplaces.cta"
            />
        );
    };

    return (
        <Section>
            <Title expandBottomSpace>{t('projects.bizbizshare.page.marketplaces.title')}</Title>
            <List>
                {BIZBIZSHARE_MARKETPLACES_LIST.map((marketplace, index) =>
                    renderMarketplaceCardItem(marketplace, index)
                )}
            </List>
        </Section>
    );
};

export default BizbizshareMarketplaces;

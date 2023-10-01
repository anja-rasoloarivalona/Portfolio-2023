import React from 'react';
import { Container, Email, EmailLink, List, ListItem, ListItemLink } from './HeaderMobileMenuFooter-styles';
import { config } from '../../../../config/main';

const HeaderMobileMenuFooter = () => {
    return (
        <Container>
            <Email>
                <EmailLink href="mailto:rasoloanja@gmail.com" target="_blank">
                    rasoloanja@gmail.com
                </EmailLink>
            </Email>
            <List>
                {config.shortcutLinks.map(({ Icon, path }, index) => (
                    <ListItem key={index}>
                        <ListItemLink href={path} target="_blank" rel="noopener norefereer">
                            <Icon />
                        </ListItemLink>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default HeaderMobileMenuFooter;

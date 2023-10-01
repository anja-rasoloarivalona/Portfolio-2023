import React, { useContext } from 'react';
import {
    Container,
    Content,
    ContentBar,
    ContentList,
    ContentListItem,
    ContentListItemIcon,
    ContentListItemText,
    ContentListItemTextBar,
    ContentListItemTextBarContainer,
} from './ShortcutLinks-styles';

// hooks
import { AppContext } from '../../App';
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';

// icons
import { BsChevronRight } from 'react-icons/bs';
import { config } from '../../config/main';

const ShortcutLinks = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const { pathname } = useLocation();
    const { openedMenu } = useContext(AppContext);

    return (
        <Container
            isDisplayed={pathname !== '/' || scrollPosition >= windowSize.height || openedMenu != null}
            hasOpenedMenu={openedMenu != null}
        >
            <Content>
                <ContentList>
                    {config.shortcutLinks.map(({ Icon, label, path }, index) => (
                        <ContentListItem key={index} href={path} target="_blank" rel="noopener norefereer">
                            <ContentListItemIcon>
                                <Icon />
                            </ContentListItemIcon>
                            <ContentListItemText className="text">
                                {label}
                                <ContentListItemTextBarContainer>
                                    <ContentListItemTextBar />
                                    <BsChevronRight />
                                </ContentListItemTextBarContainer>
                            </ContentListItemText>
                        </ContentListItem>
                    ))}
                </ContentList>
                <ContentBar />
            </Content>
        </Container>
    );
};

export default ShortcutLinks;

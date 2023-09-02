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
import { IoLogoBitbucket } from 'react-icons/io';
import { BsGithub, BsChevronRight } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

const ShortcutLinks = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();
    const { pathname } = useLocation();
    const { openedMenu } = useContext(AppContext);

    const list = [
        {
            label: 'Bitbucket',
            Icon: IoLogoBitbucket,
        },
        {
            label: 'Github',
            Icon: BsGithub,
        },
        {
            label: 'LinkedIn',
            Icon: FaLinkedinIn,
        },
        {
            label: 'Download CV',
            Icon: HiDocumentText,
        },
    ];

    return (
        <Container
            isDisplayed={pathname !== '/' || scrollPosition >= windowSize.height || openedMenu != null}
        >
            <Content>
                <ContentList>
                    {list.map(({ Icon, label }, index) => (
                        <ContentListItem key={index}>
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

import React from 'react';
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
import { useScrollPosition } from '../../hooks';
import { useWindowSize } from 'usehooks-ts';

// icons
import { IoLogoBitbucket } from 'react-icons/io';
import { BsGithub, BsChevronRight } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

const ShortcutLinks = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

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
        <Container scrollPosition={scrollPosition} windowHeight={windowSize.height}>
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

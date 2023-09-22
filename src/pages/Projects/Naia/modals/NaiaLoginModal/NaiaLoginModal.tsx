import React from 'react';
import {
    Backdrop,
    Container,
    Content,
    ContentText,
    Header,
    HeaderTitle,
    List,
    ListItem,
    ListItemDescription,
    ListItemHeader,
    ListItemHeaderRole,
    ListItemHeaderText,
} from './NaiaLoginModal-styles';
import { AiOutlineClose } from 'react-icons/ai';
import { ReadMoreText } from '../../../../../components';

const loginOptions = [
    {
        role: 'admin',
        color: {
            secondary: '#e1eaef',
            main: '#035b83',
        },
        displayName: 'Naia admin',
    },
    {
        role: 'lawyer',
        color: {
            secondary: '#ccfbf1',
            main: '#24a195',
        },
        displayName: 'Naia lawyer',
    },
    {
        role: 'employee',
        color: {
            secondary: '#fef3c7',
            main: '#e9af5d',
        },
        displayName: 'Naia employee',
    },
];

type NaiaLoginModalProps = {
    closeHandler: () => void;
};

const NaiaLoginModal = ({ closeHandler }: NaiaLoginModalProps) => {
    return (
        <Backdrop>
            <Container>
                <Header>
                    <HeaderTitle>Naia login</HeaderTitle>
                    <AiOutlineClose onClick={() => closeHandler()} />
                </Header>
                <Content>
                    <ContentText>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi omnis est blanditiis
                        explicabo! Possimus nihil quaerat, ipsum consectetur ad doloribus, recusandae aut
                        beatae neque excepturi voluptas minus asperiores similique iure.
                    </ContentText>
                    <List>
                        {loginOptions.map((option, index) => (
                            <ListItem key={index}>
                                <ListItemHeader>
                                    <ListItemHeaderRole roleColor={option.color}>
                                        {option.role}
                                    </ListItemHeaderRole>
                                    <ListItemHeaderText>{option.displayName}</ListItemHeaderText>
                                </ListItemHeader>
                                <ListItemDescription>
                                    <ReadMoreText
                                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
                                        quidem veniam ipsam cumque tempora obcaecati. Ipsam assumenda dolor
                                        aliquam, nostrum quia vero minima atque ipsa, magnam quidem accusamus cum
                                        repudiandae nemo eos corrupti sunt possimus et maxime tempore minus! Modi
                                        necessitatibus natus repellendus voluptatum iste itaque, voluptatibus
                                        quisquam neque consectetur!"
                                        length={160}
                                    />
                                </ListItemDescription>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        </Backdrop>
    );
};

export default NaiaLoginModal;

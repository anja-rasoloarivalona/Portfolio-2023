import React from 'react';
import {
    Container,
    List,
    ListItem,
    ListItemDescription,
    ListItemIcon,
    ListItemSubList,
    ListItemSubListItem,
    ListItemTitle,
} from './HomeSkills.-styles';
import { Title } from '../../../../../../components';
import { FaCode } from 'react-icons/fa';

const HomeSkills = () => {
    const skills = [
        {
            title: 'Front-end',
            description:
                'I love Front-end development. I get a lot of satisfaction when I see a product coming to life on my screen.',
            list: [
                'ES6 - Javascript',
                'Typescript',
                'React - Redux',
                'React Native',
                'Vue.js',
                'Angular',
                'jQuery',
                'CSS3 / Sass',
            ],
        },
        {
            title: 'Back-end',
            description:
                'I love Front-end development. I get a lot of satisfaction when I see a product coming to life on my screen.',
            list: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'graphQL', 'Elastic search', 'Jest', 'Mocha'],
        },
        {
            title: 'Tools',
            description:
                'I love Front-end development. I get a lot of satisfaction when I see a product coming to life on my screen.',
            list: ['Heroku', 'Git', 'Github', 'Gitlab', 'BitBucket', 'Jira', 'Confluence', 'chatGPT'],
        },
    ];

    return (
        <Container>
            <Title>My skills</Title>
            <List>
                {skills.map((skill, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <FaCode />
                        </ListItemIcon>
                        <ListItemTitle>{skill.title}</ListItemTitle>
                        <ListItemDescription>{skill.description}</ListItemDescription>
                        <ListItemSubList>
                            {skill.list.map((item, subIndex) => (
                                <ListItemSubListItem key={`${index}${subIndex}`}>{item}</ListItemSubListItem>
                            ))}
                        </ListItemSubList>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default HomeSkills;

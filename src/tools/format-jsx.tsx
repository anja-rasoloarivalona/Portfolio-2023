import React, { ReactNode } from 'react';
import { Text } from '../components';

type Props = Record<string, ReactNode>;

export const formatJSX = (template: string, props: Props): ReactNode => {
    const regex = /{{(.*?)}}/g;
    let lastIndex = 0;
    const jsxElements: ReactNode[] = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const match = regex.exec(template);
        if (!match) break;

        const [fullMatch, propName] = match;
        const beforeText = template.slice(lastIndex, match.index);

        if (beforeText) {
            jsxElements.push(beforeText);
        }

        if (props[propName]) {
            jsxElements.push(props[propName]);
        } else {
            jsxElements.push(fullMatch); // Keep the placeholder if prop is not found
        }

        lastIndex = regex.lastIndex;
    }

    const remainingText = template.slice(lastIndex);
    if (remainingText) {
        jsxElements.push(remainingText);
    }

    return <>{jsxElements}</>;
};

export const formatText = (inputString: string) => {
    // Split the input string using a regular expression to find text enclosed in <>
    const parts = inputString.split(/<>/);

    // Initialize an empty array to store the parsed parts
    const parsedParts = [];

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];

        if (i % 2 === 0) {
            // If the index is even, it's regular text; add it as is
            parsedParts.push(part);
        } else {
            // If the index is odd, it's text enclosed in <>, wrap it in <TextComponent>
            parsedParts.push(
                <Text key={i} primary>
                    {part}
                </Text>
            );
        }
    }

    return <>{parsedParts}</>;
};

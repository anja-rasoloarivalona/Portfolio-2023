import React, { ReactNode } from 'react';

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

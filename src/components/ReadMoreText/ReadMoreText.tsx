import React, { useState } from 'react';
import { Container, DisplayedText, Toggle } from './ReadMoreText-styles';

type ReadMoreTextProps = {
    text: string;
    length: number;
};

const ReadMoreText = ({ text, length }: ReadMoreTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Container>
            <DisplayedText>{isExpanded ? text : text.slice(0, length)}</DisplayedText>
            {text.length > length && isExpanded === false && '...'}
            {text.length > length && (
                <Toggle
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded((prev) => !prev);
                    }}
                >
                    {isExpanded ? 'Collapse' : 'See more.'}
                </Toggle>
            )}
        </Container>
    );
};

export default ReadMoreText;

import styled from 'styled-components';
import { contentTextStyles, contentStyles } from '../Landing-styles';
import { DISPLAY_STATE } from '../../../../../types';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    transition: all 1s ease-in;
`;

export const AnimatedTextContainer = styled.div`
    ${contentStyles};
    color: black;
    background: white;
    mix-blend-mode: screen;
    z-index: 2;

    button {
        opacity: 0;
    }
`;

export const AnimatedText = styled.h1`
    ${contentTextStyles}
`;

export const Content = styled.div<{ displayState: DISPLAY_STATE }>`
    ${contentStyles};
    z-index: 4;

    ${({ displayState }) => {
        return {
            button: {
                transition: 'all .3s ease-in',
                opacity: displayState === DISPLAY_STATE.LOADED ? 1 : 0,
                transform: `translateY(${displayState === DISPLAY_STATE.LOADED ? '0%' : '100%'})`,
            },
        };
    }}
`;

export const ContentText = styled.h1`
    ${contentTextStyles};
    opacity: 0;
`;

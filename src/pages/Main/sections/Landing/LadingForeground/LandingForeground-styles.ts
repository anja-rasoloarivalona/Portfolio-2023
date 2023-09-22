import styled from 'styled-components';
import { contentTextStyles, contentStyles, loadStylesAnimation } from '../Landing-styles';

export const Wrapper = styled.div<{ position: { x: number; y: number } }>`
    position: fixed;
    z-index: 2;
    width: 55rem;
    height: 55rem;
    top: 0;
    left: 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transform: ${({ position }) => `translate(${position.x}px, ${position.y}px)`};
    cursor: move;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    ${loadStylesAnimation};

    @media (max-width: 1390px) {
        width: 42rem;
        height: 42rem;
    }

    @media (max-width: 1060px) {
        width: 30rem;
        height: 30rem;
    }

    @media (max-width: 566px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        transform: translate(0px, 0px);
        box-shadow: none;
    }
`;

export const Container = styled.div<{ position: { x: number; y: number } }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: ${({ position }) => `translate(${position.x * -1}px, ${position.y * -1}px)`};

    @media (max-width: 566px) {
        transform: translate(0px, 0px);
    }
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
    filter: brightness(35%);
`;

export const Content = styled.div`
    ${contentStyles};
    z-index: 2;
`;

export const ContentText = styled.h1`
    ${contentTextStyles};
    color: white;
`;

import styled, { keyframes, css } from 'styled-components';

const beforeAnimation = keyframes`
    0% {
        transform: translateX(-110%);
    }

    /* 100% {
        transform: translateX(0);
    } */
 
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(110%);
    }
`;

const afterAnimation = keyframes`
    0% {
        transform: translateX(0%);
    }
    /* 100% {
        transform: translateX(0%);
    } */
    100% {
        transform: translateX(110%);
    }
`;

export const Slide = styled.div<{ playAnimation: boolean; useDarkBackground: boolean }>`
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    width: calc(100% + 0.4rem);
    height: calc(100% + 0.4rem);
    z-index: 5;
    overflow: hidden;

    &::after,
    &::before {
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
    }

    &::before {
        z-index: 4;
        background-color: ${({ theme }) => theme.colors.onSurface};
        transform: translateX(-110%);
        transition-delay: 0.5s;
        transition: all 1.5s ease;

        ${({ playAnimation }) =>
            playAnimation &&
            css`
                animation: ${beforeAnimation} 1.5s forwards;
            `}
    }

    &::after {
        z-index: 3;
        background-color: ${({ theme, useDarkBackground }) =>
            useDarkBackground ? theme.colors.background : 'white'};

        ${({ playAnimation }) =>
            playAnimation &&
            css`
                animation: ${afterAnimation} 0.75s forwards;
                animation-delay: 0.75s;
            `}
    }

    & + div.button__icon {
        opacity: 0;
        transition: all 0.1s ease;
        transition-delay: 1.2s;

        ${({ playAnimation }) => {
            if (playAnimation === true) {
                return {
                    opacity: 1,
                };
            }
        }}
    }
`;

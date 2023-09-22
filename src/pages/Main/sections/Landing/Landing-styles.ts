import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
    flex: 1;
    position: relative;
`;

export const contentStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const contentTextStyles = css`
    font-weight: bold;
    font-size: 8rem;
    text-transform: uppercase;
    margin-bottom: 50px;
    user-select: none;

    @media (max-width: 1390px) {
        font-size: 6rem;
    }

    @media (max-width: 1060px) {
        font-size: 4rem;
    }

    @media (max-width: 566px) {
        max-width: 90%;
        text-align: center;
        line-height: 1.2;
    }
`;

export const loadAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const loadStylesAnimation = css`
    animation: ${loadAnimation} 2s ease-in-out 2s forwards;
`;

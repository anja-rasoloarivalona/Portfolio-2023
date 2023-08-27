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
    font-size: 100px;
    text-transform: uppercase;
    padding-bottom: 50px;
    user-select: none;
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

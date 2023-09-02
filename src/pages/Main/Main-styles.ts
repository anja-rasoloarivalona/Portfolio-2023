import styled, { css } from 'styled-components';

const animatedCubeStyle = css`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    scroll-snap-align: start;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    perspective: 150rem;
    perspective-origin: 58% 33%;
`;

export const LandingPageWrapper = styled.div`
    ${animatedCubeStyle};
    transform-origin: bottom;
    z-index: 3;
    scroll-margin-top: 1px; /* Ensure snapping at the start */
`;

export const ContentWrapper = styled.div<{ onTop: boolean }>`
    ${animatedCubeStyle};
    transform-origin: top;
    z-index: ${({ onTop }) => (onTop ? 4 : 1)};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${({ theme }) => theme.config.header.height.default};
    background: ${({ theme }) => theme.colors.background};
`;

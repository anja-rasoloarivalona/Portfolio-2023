import styled, { css } from 'styled-components';

const animatedCubeStyle = css`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    transform-style: preserve-3d;
    perspective: 2000px;
    scroll-snap-align: start;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    perspective: 150rem;
    perspective-origin: 58% 33%;
    position: relative;
`;

export const Curtain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
    background: ${({ theme }) => theme.colors.background};
`;

export const LandingPageWrapper = styled.div`
    ${animatedCubeStyle};
    transform-origin: bottom;
    z-index: 3;
    scroll-margin-top: 1px; /* Ensure snapping at the start */
`;

export const ContentWrapper = styled.div<{ isForwarded: boolean }>`
    ${animatedCubeStyle};
    transform-origin: top;
    z-index: ${({ isForwarded }) => (isForwarded ? 4 : 1)};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${({ theme }) => theme.config.header.height.default};
    background: ${({ theme }) => theme.colors.background};
`;

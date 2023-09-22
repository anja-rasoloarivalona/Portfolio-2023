import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding-top: ${({ theme }) => theme.config.header.height.default};
    background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 50vh;
    padding: 0 ${({ theme }) => theme.box.spacing.xl};

    @media (max-width: 675px) {
        height: 40vh;
        max-height: 50rem;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary.layer};
    }
`;

export const HeaderTitleContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    mix-blend-mode: overlay;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

export const HeaderTitle = styled.h1`
    font-size: 10rem;
    text-transform: uppercase;
    text-align: center;
    background: #070606;
    padding: ${({ theme }) => theme.box.spacing.md};
    border-radius: 1rem;

    @media (max-width: 675px) {
        font-size: 7rem;
    }

    @media (max-width: 500px) {
        font-size: 5rem;
    }

    @media (max-width: 380px) {
        font-size: 4rem;
    }
`;

export const HeaderCta = styled.div`
    position: absolute;
    bottom: 10%;
    right: 4rem;
    z-index: 3;
`;

export const HeaderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    left: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const ContentWrapper = styled.div`
    width: 100vw;
    ${({ theme }) => theme.config.grid.default};
`;

export const Content = styled.div`
    grid-column: 1 / -1;
    padding-top: ${({ theme }) => theme.box.spacing.xxl};
    ${({ theme }) => theme.config.grid.default};

    > * {
        grid-column: 3 / 4;
    }
`;

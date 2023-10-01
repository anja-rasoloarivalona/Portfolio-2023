import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.config.grid.default};
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    padding-bottom: ${({ theme }) => theme.box.spacing.xl};
`;

export const Container = styled.div`
    grid-column: 3 / 4;
    padding-top: ${({ theme }) => theme.box.spacing.md};

    ${({ theme }) => theme.breakpoints.tablet} {
        padding-top: ${({ theme }) => theme.box.spacing.xxxl};
    }

    @media (max-width: 670px) {
        padding-top: ${({ theme }) => theme.box.spacing.xl};
    }
`;

export const ImageContainer = styled.div`
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    overflow: hidden;
    margin: ${({ theme }) => theme.box.spacing.lg};
    shape-outside: circle();
    float: left;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.onBackgroundDark};
    box-shadow: ${({ theme }) => theme.box.shadow.main};

    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary.layer};
    }

    @media (max-width: 670px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    padding-top: ${({ theme }) => theme.box.spacing.xxl};
    padding-left: 10rem;

    p {
        margin-bottom: ${({ theme }) => theme.box.spacing.md};
    }

    ${({ theme }) => theme.breakpoints.tablet} {
        padding-left: 0;
    }
`;

export const ContentTitle = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.primary.main};
    line-height: 1.1;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

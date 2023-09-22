import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.config.grid.default};
    padding-top: ${({ theme }) => theme.config.header.height.default};
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
`;

export const Container = styled.div`
    grid-column: 3 / 4;
    padding-top: ${({ theme }) => theme.box.spacing.xl};
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
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    padding-top: ${({ theme }) => theme.box.spacing.xxl};
    padding-left: 10rem;
`;

export const ContentTitle = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.primary.main};
    line-height: 1.1;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

export const ContentText = styled.p`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: 1.4;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    text-align: justify;
`;

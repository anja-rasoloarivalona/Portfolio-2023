import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 3 /4;
    height: ${({ theme }) => `calc(100vh - ${theme.config.header.height.default})`};
    position: relative;
    display: flex;
    /* justify-content: center; */
    padding-top: 10rem;
`;

export const Content = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const ContentIntro = styled.span`
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ theme }) => theme.font.size.lg};
`;

export const ContentTitle = styled.h1`
    color: ${({ theme }) => theme.colors.onSurfaceHighlighted};
    font-size: 8rem;
    line-height: 1.5;
`;

export const ContentPresentation = styled.h4`
    color: ${({ theme }) => theme.colors.onSurface};
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

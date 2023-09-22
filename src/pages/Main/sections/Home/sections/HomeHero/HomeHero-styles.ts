import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 3 /4;
    height: ${({ theme }) => `calc(100vh - ${theme.config.header.height.default})`};
    position: relative;
    display: flex;
    padding-top: 10rem;
`;

export const Content = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    > * {
        width: fit-content;
    }

    @media (max-width: 1160px) {
        h1 {
            font-size: 6rem;
        }

        h4 {
            font-size: 3rem;
        }
    }

    @media (max-width: 650px) {
        h1 {
            font-size: 5rem;
            line-height: 1.2;
            margin-bottom: ${({ theme }) => theme.box.spacing.md};
        }

        h4 {
            font-size: 2rem;
        }
    }

    @media (max-width: 370px) {
        h1 {
            font-size: 4rem;
        }
    }
`;

export const ContentIntro = styled.span`
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ theme }) => theme.font.size.lg};
`;

export const ContentTitle = styled.h1`
    color: ${({ theme }) => theme.colors.onSurfaceHighlighted};
    font-size: 8rem;
    line-height: 1.2;
    margin: ${({ theme }) => theme.box.spacing.xs} 0;
`;

export const ContentPresentation = styled.h4`
    color: ${({ theme }) => theme.colors.onSurface};
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

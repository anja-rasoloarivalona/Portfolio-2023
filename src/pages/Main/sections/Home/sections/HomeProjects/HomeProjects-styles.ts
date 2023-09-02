import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 3 / 4;
    min-height: 100vh;
    width: 100%;
`;

export const Project = styled.div<{ isOdd: boolean }>`
    display: flex;
    justify-content: flex-end;
    position: relative;
    height: 34rem;
    margin: 15% 0;

    ${({ isOdd }) => {
        if (isOdd === true) {
            return {
                justifyContent: 'flex-start',
                '.image-container': {
                    left: 'unset',
                    right: 0,
                },
                '> div': {
                    alignItems: 'flex-start',
                },
            };
        }
    }}
`;

export const ProjectImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    height: 100%;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: #4f1a69b0;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProjectContent = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    width: 50%;
`;

export const ProjectContentPost = styled.h4`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.primary.main};
`;

export const ProjectContentCompanyName = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: 1.4;
`;

export const ProjectContentDescription = styled.span`
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.md};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    padding: ${({ theme }) => theme.box.spacing.md};
    line-height: 1.4;
    box-shadow: ${({ theme }) => theme.box.shadow.dark};
    margin: ${({ theme }) => `${theme.box.spacing.xl} 0`};
`;

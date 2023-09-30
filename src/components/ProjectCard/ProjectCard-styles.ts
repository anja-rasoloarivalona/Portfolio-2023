import styled from 'styled-components';

export const Container = styled.div<{ isOdd: boolean }>`
    display: flex;
    justify-content: flex-end;
    position: relative;
    height: 34rem;
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.box.spacing.xxxl};
    }

    ${({ isOdd }) => {
        if (isOdd === true) {
            return {
                justifyContent: 'flex-start',
                '.project-card-image': {
                    left: 'unset',
                    right: 0,
                },
                '> div': {
                    alignItems: 'flex-start',
                },
            };
        }
    }}

    ${({ theme }) => theme.breakpoints.midsize} {
        justify-content: flex-start;
        box-shadow: ${({ theme }) => theme.box.shadow.main};
    }
`;

export const ImageContainer = styled.div<{ isDisplayed: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    scale: 0%;
    transition: all 1s ease;

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

    ${({ theme }) => theme.breakpoints.midsize} {
        width: 100%;

        &::after {
            background-color: ${({ theme }) => theme.colors.primary.layerDark};
        }
    }

    ${({ isDisplayed }) => {
        if (isDisplayed === true) {
            return {
                opacity: 1,
                scale: '100%',
            };
        }
    }}
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
`;

export const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    width: 50%;

    ${({ theme }) => theme.breakpoints.midsize} {
        align-items: flex-start;
        padding: ${({ theme }) => theme.box.spacing.xxl};
        width: 100%;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
        align-items: flex-start;
        padding: ${({ theme }) => `${theme.box.spacing.xxl} ${theme.box.spacing.xl}`};
        width: 100%;
    }
`;

export const ContentSubtitle = styled.h4`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.primary.main};
`;

export const ContentTitle = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.onBackgroundHighlighted};
    line-height: 1.4;
`;

export const ContentDescription = styled.span`
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.md};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    padding: ${({ theme }) => theme.box.spacing.md};
    line-height: 1.4;
    box-shadow: ${({ theme }) => theme.box.shadow.dark};
    margin: ${({ theme }) => `${theme.box.spacing.xl} 0`};

    ${({ theme }) => theme.breakpoints.midsize} {
        background-color: unset;
        padding: unset;
    }
`;

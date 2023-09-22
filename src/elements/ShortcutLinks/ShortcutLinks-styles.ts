import styled from 'styled-components';

export const Container = styled.div<{ isDisplayed: boolean; hasOpenedMenu: boolean }>`
    position: fixed;
    bottom: 0;
    left: 3rem;
    z-index: 10;
    transition: all 0.3s ease;
    transform: translateY(100%);
    opacity: 0;

    ${({ isDisplayed }) => {
        if (isDisplayed === true) {
            return {
                opacity: 1,
                transform: 'translateY(0%)',
            };
        }
    }}

    ${({ theme }) => theme.breakpoints.tablet} {
        scale: ${({ hasOpenedMenu }) => (hasOpenedMenu ? 1 : 0)};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
`;

export const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${({ theme }) => theme.box.spacing.sm};
`;

export const ContentListItem = styled.div`
    margin: ${({ theme }) => theme.box.spacing.sm};
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    :hover {
        transform: scale(1.1) translateY(-2px);

        .text {
            opacity: 1;
            background-color: ${({ theme }) => theme.colors.primary.mainHover};
        }

        svg {
            color: ${({ theme }) => theme.colors.primary.main};
        }
    }
`;

export const ContentListItemIcon = styled.div`
    position: relative;
    z-index: 2;
    svg {
        font-size: ${({ theme }) => theme.font.size.xl};
        color: ${({ theme }) => theme.colors.onBackground};
        transition: all 0.3s ease;
    }
`;

export const ContentListItemText = styled.div`
    position: absolute;
    top: 0;
    left: -1rem;
    bottom: 0;
    margin: auto;
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    padding-left: 4rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150%;
    min-width: max-content;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ theme }) => theme.font.size.md};
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1;
`;

export const ContentListItemTextBarContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 90%;
    margin: auto;
    height: max-content;
    display: flex;
    align-items: center;

    svg {
        font-size: ${({ theme }) => theme.font.size.md};
        transform: translateX(-4px);
    }
`;

export const ContentListItemTextBar = styled.div`
    width: 3rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary.main};
`;

export const ContentBar = styled.div`
    width: 2px;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.onBackgroundDark};
`;

import styled from 'styled-components';

export const Container = styled.div<{ isDisplayed: boolean; hasOpenedMenu: boolean }>`
    position: fixed;
    bottom: 0;
    right: 3rem;
    z-index: 10;
    transition: all 0.3s ease;
    transform: translateY(200%);
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
    height: 15rem;
    position: relative;
`;

export const ContentText = styled.a`
    width: 29rem;
    height: 6rem;
    transform: rotate(90deg);
    transform-origin: center center;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.onBackground};
    text-decoration: none;

    :hover {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

export const ContentBar = styled.div`
    width: 2px;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.onBackgroundDark};
`;

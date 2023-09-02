import styled from 'styled-components';

export const Container = styled.div<{
    isMainHeader: boolean;
    isDisplayed: boolean;
    useBackground: boolean;
    disabledTransition: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: ${({ theme }) => theme.config.header.height.default};
    display: flex;
    transition: all 0.3s ease-in;

    ${({ isMainHeader, isDisplayed }) => {
        if (isMainHeader) {
            return {
                transform: isDisplayed ? 'translateY(0px)' : `translateY(-100%)`,
            };
        }
    }}

    ${({ useBackground, theme }) => {
        if (useBackground === true) {
            return {
                background: theme.colors.background,
            };
        }
    }}

    ${({ disabledTransition }) => {
        if (disabledTransition) {
            return {
                transition: 'none',
            };
        }
    }}
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => `0 ${theme.box.spacing.xl}`};
    position: relative;
    z-index: 2;
`;

export const Cta = styled.div<{ isDisplayed: boolean }>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.surface};
    z-index: 1;
    transition: all 0.3s ease-in;
    transform: translateY(${({ isDisplayed }) => (isDisplayed ? 0 : '-100vh')});
    padding-top: ${({ theme }) => theme.config.header.height.default};
    display: flex;
    justify-content: center;
    opacity: ${({ isDisplayed }) => (isDisplayed ? 1 : 0)};
`;

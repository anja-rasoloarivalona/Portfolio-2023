import styled from 'styled-components';

export const Container = styled.div<{ hasDarkBackground: boolean; isToggled: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    height: 2.5rem;
    cursor: pointer;

    ${({ hasDarkBackground, isToggled, theme }) => {
        if (hasDarkBackground !== true) {
            return {
                '> div': {
                    backgroundColor: isToggled ? theme.colors.onSurface : theme.colors.background,
                },
            };
        }
    }}

    & > div:nth-child(1) {
        transform-origin: top left;
        transform: rotate(${({ isToggled }) => (isToggled ? '37deg' : '0')});
    }

    & > div:nth-child(2) {
        transform-origin: center center;
        transform: scaleX(${({ isToggled }) => (isToggled ? 0 : 1)});
    }

    & > div:nth-child(3) {
        transform-origin: bottom left;
        transform: rotate(${({ isToggled }) => (isToggled ? '-37deg' : '0')});
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.onBackground};
    transition: all 0.3s ease;
`;

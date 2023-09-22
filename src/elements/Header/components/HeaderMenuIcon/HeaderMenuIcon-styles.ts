import styled from 'styled-components';

export const Container = styled.div<{ isMainHeader: boolean; isMenuOpened: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    height: 2.5rem;
    cursor: pointer;

    :hover {
        > div {
            background-color: ${({ theme }) => theme.colors.onBackground};
        }
    }

    ${({ isMainHeader, theme }) => {
        if (isMainHeader !== true) {
            return {
                '> div': {
                    backgroundColor: theme.colors.onBackground,
                },
            };
        }
    }}

    ${({ isMenuOpened, theme }) => {
        if (isMenuOpened === true) {
            return {
                '> div': {
                    backgroundColor: theme.colors.onBackground,
                },
            };
        }
    }}

    & > div:nth-child(1) {
        transform-origin: top left;
        transform: rotate(${({ isMenuOpened }) => (isMenuOpened ? '37deg' : '0')});
    }

    & > div:nth-child(2) {
        transform-origin: center center;
        transform: scaleX(${({ isMenuOpened }) => (isMenuOpened ? 0 : 1)});
    }

    & > div:nth-child(3) {
        transform-origin: bottom left;
        transform: rotate(${({ isMenuOpened }) => (isMenuOpened ? '-37deg' : '0')});
    }
`;

export const Bar = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.onBackgroundDark};
    transition: all 0.3s ease;
`;

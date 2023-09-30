import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: ${({ theme }) => theme.config.header.height.default};
    display: flex;
    transition: all 0.3s ease-in;
`;

export const HeaderContent = styled.div`
    flex: 1;
    padding: ${({ theme }) => `0 ${theme.box.spacing.xl}`};
    position: relative;
    z-index: 2;
    ${({ theme }) => theme.config.grid.default};
    align-content: center;

    .header__menu__icon {
        grid-column: 5/6;
        align-self: center;
        justify-self: end;
    }

    .logo {
        align-self: center;
    }
`;

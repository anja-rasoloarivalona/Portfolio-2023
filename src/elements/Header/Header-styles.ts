import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

    ${({ isMainHeader, isDisplayed, theme }) => {
        if (isMainHeader) {
            return {
                transform: isDisplayed ? 'translateY(0px)' : `translateY(-100%)`,
                [theme.breakpoints.tablet]: {
                    background: theme.colors.background,
                },
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

export const Links = styled.div`
    grid-column: 3 / 4;
    display: flex;
    align-items: center;
    flex: 1;
    font-size: ${({ theme }) => theme.font.size.md};

    ${({ theme }) => theme.breakpoints.tablet} {
        display: none;
    }
`;

export const PortfolioLink = styled(Link)`
    color: ${({ theme }) => theme.colors.onSurfaceDark} !important;
    font-size: ${({ theme }) => theme.font.size.md};
    text-transform: uppercase;
    padding-right: 4rem;
    margin-right: 2rem;
    position: relative;

    &:after {
        /* content: ''; */
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 0;
        z-index: 1;
        width: 1px;
        height: 120%;
        background-color: ${({ theme }) => theme.colors.onBackgroundDark};
    }

    :hover {
        color: ${({ theme }) => theme.colors.onSurface} !important;
    }
`;

export const ProjectList = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
`;

export const ProjectListItem = styled(NavLink)`
    padding: ${({ theme }) => `${theme.box.spacing.md} ${theme.box.spacing.md}`};
    margin-right: ${({ theme }) => `${theme.box.spacing.xxl}`};
    color: ${({ theme }) => theme.colors.onSurfaceDark} !important;

    &.active {
        font-weight: ${({ theme }) => theme.font.weight.semiBold};
        color: ${({ theme }) => theme.colors.onSurface} !important;
    }

    :hover {
        color: ${({ theme }) => theme.colors.onSurface} !important;
    }
`;

export const ProjectListActiveIndicator = styled.div<{
    width: number;
    offset: number;
}>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ width }) => `${width}px`};
    height: 1px;
    background: ${({ theme }) => theme.colors.onBackgroundDark};
    transform: translateX(${({ offset }) => `${offset}px`});
    transition: all 0.3s ease;
`;

export const MenuContainer = styled.div<{ isDisplayed: boolean }>`
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

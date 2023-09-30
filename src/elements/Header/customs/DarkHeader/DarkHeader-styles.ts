import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderContainer, HeaderContent } from '../../Header-styles';

export const Container = styled(HeaderContainer)<{
    isDisplayed: boolean;
    useBackground: boolean;
    disabledTransition: boolean;
}>`
    ${({ isDisplayed, theme }) => {
        return {
            transform: isDisplayed ? 'translateY(0px)' : `translateY(-100%)`,
            [theme.breakpoints.tablet]: {
                background: theme.colors.background,
            },
        };
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

export const Content = styled(HeaderContent)``;

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

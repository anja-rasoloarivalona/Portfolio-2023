import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 1 / -1;
    width: 100%;
    ${({ theme }) => theme.config.grid.default};
    margin-bottom: ${({ theme }) => theme.box.spacing.xxxl};
`;

export const List = styled.ul`
    display: flex;
    grid-column: 3 / 4;
`;

export const ListItem = styled.li<{ isDisplayed: boolean; isDisabled: boolean; index: number }>`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.box.spacing.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s ease-in-out;
    transition-delay: ${({ index }) => `${index * 0.5}s`};
    opacity: 0;
    transform: translateY(5rem) scale(0.8);

    &:nth-child(2) {
        margin: 0 ${({ theme }) => theme.box.spacing.lg};
    }

    ${({ isDisplayed, isDisabled }) => {
        if (isDisabled) {
            return {
                opacity: 1,
                scale: 1,
                transform: 'translateY(0%) scale(1)',
                transition: 'none',
            };
        }

        if (isDisplayed) {
            return {
                opacity: 1,
                scale: 1,
                transform: 'translateY(0%) scale(1)',
            };
        }
    }}
`;

export const ListItemIcon = styled.div`
    svg {
        font-size: ${({ theme }) => theme.font.size.xxl};
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

export const ListItemTitle = styled.h1`
    color: ${({ theme }) => theme.colors.onSurfaceHighlighted};
    font-size: ${({ theme }) => theme.font.size.lg};
    margin: ${({ theme }) => `${theme.box.spacing.lg} 0`};
`;

export const ListItemDescription = styled.span`
    color: ${({ theme }) => theme.colors.onSurface};
    font-size: ${({ theme }) => theme.font.size.md};
    text-align: center;
    line-height: 1.4;
`;

export const ListItemSubList = styled.ul`
    margin-top: ${({ theme }) => theme.box.spacing.lg};
    padding-top: ${({ theme }) => theme.box.spacing.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.onSurfaceDark};
    width: 100%;
`;

export const ListItemSubListItem = styled.li`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    text-align: center;
`;

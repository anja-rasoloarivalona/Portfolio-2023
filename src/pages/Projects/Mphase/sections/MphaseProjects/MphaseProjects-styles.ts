import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50vh;
`;

export const List = styled.ul`
    margin-top: ${({ theme }) => theme.box.spacing.xxl};
`;

export const ListItem = styled.li`
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => `${theme.box.spacing.xl} ${theme.box.spacing.xl}`};
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
`;

export const ListItemTitle = styled.h3`
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
`;

export const ListItemText = styled.p`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onSurface};
    line-height: 1.5;
`;

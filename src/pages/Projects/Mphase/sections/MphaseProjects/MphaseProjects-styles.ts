import styled from 'styled-components';

export const List = styled.ul`
    margin-top: ${({ theme }) => theme.box.spacing.xl};
`;

export const ListItem = styled.li`
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => `${theme.box.spacing.xl} ${theme.box.spacing.xl}`};
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
    }
`;

export const ListItemTitle = styled.h3`
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
`;

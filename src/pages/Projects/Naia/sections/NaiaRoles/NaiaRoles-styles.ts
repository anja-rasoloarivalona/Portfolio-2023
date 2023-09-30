import styled from 'styled-components';

export const List = styled.ul`
    margin-top: ${({ theme }) => theme.box.spacing.xl};
`;

export const ListItem = styled.li`
    padding: ${({ theme }) => theme.box.spacing.lg};
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: 0.5rem;

    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.box.spacing.xl};
    }
`;

export const ListItemHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
`;

export const ListItemHeaderRole = styled.div<{ roleColor: { secondary: string; main: string } }>`
    padding: ${({ theme }) => `${theme.box.spacing.xxs} ${theme.box.spacing.md}`};
    background-color: ${({ roleColor }) => roleColor.secondary};
    color: ${({ roleColor }) => roleColor.main};
    width: 9rem;
    text-align: center;
    border-radius: 0.5rem;
    margin-right: ${({ theme }) => theme.box.spacing.md};
    font-size: ${({ theme }) => theme.font.size.md};
    text-transform: capitalize;
`;

export const ListItemHeaderText = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onSurfaceHighlighted};
`;

export const ListItemCta = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${({ theme }) => theme.box.spacing.md};
`;

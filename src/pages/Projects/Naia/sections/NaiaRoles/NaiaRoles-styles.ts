import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 10%;
`;

export const Text = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onSurface};
    line-height: 1.6;
    padding: ${({ theme }) => `${theme.box.spacing.lg} 0`};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
    padding: ${({ theme }) => theme.box.spacing.lg};
    background-color: ${({ theme }) => theme.colors.surface};
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
    border-radius: 0.5rem;
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

export const ListItemDescription = styled.p`
    color: ${({ theme }) => theme.colors.onSurface};
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: 1.4;
    text-align: justify;
`;

export const ListItemCta = styled.div`
    display: flex;
    justify-content: flex-end;
`;

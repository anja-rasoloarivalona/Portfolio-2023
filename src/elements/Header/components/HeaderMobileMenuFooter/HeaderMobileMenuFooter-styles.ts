import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.box.spacing.lg};
    width: 100%;

    @media (max-height: 973px) and (max-width: 500px) {
        display: flex;
    }
`;

export const Email = styled.div`
    display: flex;
    justify-content: center;
`;

export const EmailLink = styled.a`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onBackground} !important;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: ${({ theme }) => theme.box.spacing.xl} 0;
    gap: ${({ theme }) => theme.box.spacing.xl};
`;

export const ListItem = styled.li``;

export const ListItemLink = styled.a`
    color: ${({ theme }) => theme.colors.onBackground} !important;

    svg {
        font-size: ${({ theme }) => theme.font.size.xxl};
    }
`;

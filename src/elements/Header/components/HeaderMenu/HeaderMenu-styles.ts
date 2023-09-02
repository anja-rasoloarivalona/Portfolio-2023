import styled from 'styled-components';

export const List = styled.ul`
    padding-top: 10%;
`;

export const ListItem = styled.li`
    font-size: ${({ theme }) => theme.font.size.xl};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: ${({ theme }) => theme.box.spacing.xl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: center;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

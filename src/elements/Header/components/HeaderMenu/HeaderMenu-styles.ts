import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 10%;

    ${({ theme }) => theme.breakpoints.tablet} {
        padding-top: 30%;
    }
`;

export const List = styled.ul``;

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

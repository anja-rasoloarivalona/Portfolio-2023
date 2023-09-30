import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.box.spacing.lg};
    grid-column: 3 / 4;

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

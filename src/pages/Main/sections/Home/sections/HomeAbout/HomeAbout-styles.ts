import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 3 / 4;
    width: 100%;
    min-height: 60vh;
`;

export const Cta = styled.div`
    display: flex;
    margin-top: ${({ theme }) => theme.box.spacing.xl};
`;

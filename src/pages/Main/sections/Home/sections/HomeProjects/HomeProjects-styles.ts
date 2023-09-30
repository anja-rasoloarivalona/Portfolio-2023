import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 3 / 4;
    min-height: 100vh;
    width: 100%;
    margin-top: 10%;
    margin-bottom: ${({ theme }) => theme.box.spacing.xxxl};
`;

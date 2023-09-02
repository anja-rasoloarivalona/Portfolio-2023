import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.config.grid.default};
    width: 100vw;
`;

export const Content = styled.div<{ isDisplayed: boolean }>`
    height: ${({ isDisplayed }) => (isDisplayed ? 'auto' : 0)};
    overflow: hidden;
    width: 100vw;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    ${({ theme }) => theme.config.grid.default};
`;

import styled, { css } from 'styled-components';

const gridStyle = css`
    display: grid;
    grid-template-columns: 14rem minmax(2rem, 1fr) minmax(50vw, 90rem) minmax(2rem, 1fr) 14rem;
    grid-auto-rows: max-content;
`;

export const Container = styled.div`
    width: 100vw;
    ${gridStyle};
`;

export const Content = styled.div<{ isDisplayed: boolean }>`
    height: ${({ isDisplayed }) => (isDisplayed ? 'auto' : 0)};
    overflow: hidden;
    width: 100vw;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    ${gridStyle};
`;

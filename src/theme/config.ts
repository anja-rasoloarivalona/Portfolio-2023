import { css } from 'styled-components';

const gridStyle = css`
    display: grid;
    grid-template-columns: 14rem minmax(2rem, 1fr) minmax(50vw, 90rem) minmax(2rem, 1fr) 14rem;
    grid-auto-rows: max-content;

    ${({ theme }) => theme.breakpoints.tablet} {
        grid-template-columns: 8rem 0rem 1fr 0rem 8rem;
    }

    ${({ theme }) => theme.breakpoints.mobile} {
        grid-template-columns: 3rem 0rem 1fr 0rem 3rem;
    }
`;

export const config = {
    header: {
        height: {
            default: '6rem',
        },
    },
    grid: {
        default: gridStyle,
    },
};

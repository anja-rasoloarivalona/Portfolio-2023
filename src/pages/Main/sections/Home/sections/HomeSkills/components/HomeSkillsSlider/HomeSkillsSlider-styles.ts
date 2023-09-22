import styled from 'styled-components';

export const Container = styled.div`
    height: max-content;
    max-height: max-content;
    max-width: 100vw;
    width: 100%;
    grid-column: 1 / -1;
`;

export const SliderItem = styled.div`
    padding: ${({ theme }) => `${theme.box.spacing.md} ${theme.box.spacing.md}`};

    @media (min-width: 581px) {
        padding: ${({ theme }) => `${theme.box.spacing.md} 4rem`};

        &.first {
            padding-right: 0;
            padding-left: 8rem;
        }

        &.last {
            padding-left: 0;
            padding-right: 8rem;
        }
    }
`;

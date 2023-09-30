import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
    }

    > p:not(:last-child):not(:first-child) {
        margin-bottom: ${({ theme }) => theme.box.spacing.md};
    }
`;

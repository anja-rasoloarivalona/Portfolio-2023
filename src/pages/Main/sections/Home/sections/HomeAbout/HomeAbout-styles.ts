import styled from 'styled-components';

export const Container = styled.section`
    grid-column: 3 / 4;
    width: 100%;
    min-height: 60vh;
`;

export const TextContainer = styled.div`
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: 1.4;
`;

export const Cta = styled.div`
    display: flex;
`;

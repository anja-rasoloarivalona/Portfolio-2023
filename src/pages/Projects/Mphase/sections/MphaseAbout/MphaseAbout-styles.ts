import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
`;

export const TextContainer = styled.div``;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onSurface};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
    text-align: justify;
`;

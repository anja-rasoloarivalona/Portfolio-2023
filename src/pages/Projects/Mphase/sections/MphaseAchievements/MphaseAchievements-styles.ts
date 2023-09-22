import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50vh;
    margin-bottom: 10%;
`;

export const TextContainer = styled.div`
    margin-top: ${({ theme }) => theme.box.spacing.lg};
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onSurface};
    line-height: 1.6;
    padding: ${({ theme }) => `${theme.box.spacing.lg} 0`};
`;

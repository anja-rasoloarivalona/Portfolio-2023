import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Text = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.onSurface};
    line-height: 1.6;
    padding: ${({ theme }) => `${theme.box.spacing.lg} 0`};
`;

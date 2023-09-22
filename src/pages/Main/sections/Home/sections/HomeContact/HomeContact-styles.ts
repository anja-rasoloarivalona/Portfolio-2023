import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.box.spacing.xxl} ${theme.box.spacing.xxl}`};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.surface};
    grid-column: 2 / 5;
    margin-bottom: 13rem;

    @media (max-width: 980px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.onSurfaceHighlighted};
`;

export const Text = styled.div`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onSurface};
    width: 30%;
    text-align: center;
    line-height: 1.4;

    @media (max-width: 980px) {
        width: 100%;
        text-align: start;
        margin: ${({ theme }) => `${theme.box.spacing.lg} 0`};
    }
`;

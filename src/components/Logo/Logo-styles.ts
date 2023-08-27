import styled from 'styled-components';

export const Container = styled.h1<{ hasDarkBackground: boolean }>`
    font-size: ${({ theme }) => theme.font.size.xxl};
    transition: all 0.3s ease;
    color: ${({ theme, hasDarkBackground }) =>
        hasDarkBackground ? theme.colors.primary.main : theme.colors.primary.dark};
`;

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
`;

export const RoutesContainer = styled.div`
    width: 100%;
    height: max-content;
    min-height: 100vh;
    padding-top: ${({ theme }) => theme.config.navbar.height.desktop};

    ${({ theme }) => theme.breakpoints.mobile} {
        padding-top: ${({ theme }) => theme.config.navbar.height.mobile};
    }
`;

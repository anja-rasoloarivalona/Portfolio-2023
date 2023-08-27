import styled from 'styled-components';

export const Container = styled.div<{ isMainHeader: boolean; scrollPosition: number; windowHeight: number }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: ${({ theme }) => theme.config.header.height.default};
    display: flex;
    transition: all 0.3s ease-in;

    ${({ isMainHeader, scrollPosition, windowHeight }) => {
        if (isMainHeader) {
            return {
                transform: scrollPosition < windowHeight ? `translateY(-100%)` : 'translateY(0px)',
            };
        }
    }}
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => `0 ${theme.box.spacing.xl}`};
    position: relative;
    z-index: 2;
`;

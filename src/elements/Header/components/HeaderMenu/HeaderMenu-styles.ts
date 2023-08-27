import styled from 'styled-components';

export const Container = styled.div<{ isToggled: boolean }>`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.surface};
    z-index: 1;
    transition: all 0.3s ease-in;
    transform: translateY(${({ isToggled }) => (isToggled ? 0 : '-100vh')});
    padding-top: 20rem;
    display: flex;
    justify-content: center;
    opacity: ${({ isToggled }) => (isToggled ? 1 : 0)};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
    font-size: ${({ theme }) => theme.font.size.xl};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: ${({ theme }) => theme.box.spacing.xl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: center;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

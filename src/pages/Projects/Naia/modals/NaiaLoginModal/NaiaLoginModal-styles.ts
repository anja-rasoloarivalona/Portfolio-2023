import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #070109f0;
    flex-wrap: wrap;
    padding: 5rem 0;
    overflow-y: scroll;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and older Edge */
    &::-webkit-scrollbar {
        width: 0; /* This effectively hides the scrollbar */
        background: transparent; /* Optional: Set the background color of the track */
    }
`;

export const Container = styled.div`
    width: 80vw;
    max-width: 60rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.box.shadow.main};
    padding: ${({ theme }) => theme.box.spacing.md};
    color: ${({ theme }) => theme.colors.onBackground};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};

    svg {
        font-size: ${({ theme }) => theme.font.size.lg};
        cursor: pointer;
    }
`;

export const HeaderTitle = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xxl};
`;

export const Content = styled.div``;

export const ContentText = styled.p`
    font-size: ${({ theme }) => theme.font.size.sm};
    line-height: 1.4;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
    padding: ${({ theme }) => theme.box.spacing.lg};
    background-color: ${({ theme }) => theme.colors.surface};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid transparent;

    :hover {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }
`;

export const ListItemHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
`;

export const ListItemHeaderRole = styled.div<{ roleColor: { secondary: string; main: string } }>`
    padding: ${({ theme }) => `${theme.box.spacing.xxs} ${theme.box.spacing.sm}`};
    background-color: ${({ roleColor }) => roleColor.secondary};
    color: ${({ roleColor }) => roleColor.main};
    width: 7rem;
    text-align: center;
    border-radius: 0.5rem;
    margin-right: ${({ theme }) => theme.box.spacing.md};
`;

export const ListItemHeaderText = styled.div`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onSurfaceHighlighted};
`;

export const ListItemDescription = styled.p`
    color: ${({ theme }) => theme.colors.onSurface};
    font-size: ${({ theme }) => theme.font.size.sm};
    line-height: 1.4;
`;

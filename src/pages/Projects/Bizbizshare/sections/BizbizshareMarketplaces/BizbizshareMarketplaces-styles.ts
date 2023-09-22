import styled from 'styled-components';

export const Container = styled.div`
    grid-column: 1 / -1;
    width: 100%;
    ${({ theme }) => theme.config.grid.default};
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: max-content;
    gap: ${({ theme }) => theme.box.spacing.lg};
    margin-top: ${({ theme }) => theme.box.spacing.lg};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};

    grid-column: 3 / 4;

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ListItem = styled.li`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.box.spacing.lg};
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 650px) {
        margin-bottom: ${({ theme }) => theme.box.spacing.xl};
    }

    @media (max-width: 750px) {
        height: 100%;
    }
`;

export const ListItemHeader = styled.h3`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
`;

export const ListItemImageContainer = styled.div`
    width: 100%;
    height: 20rem;
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary.layer};
    }
`;

export const ListItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
`;

export const ListItemText = styled.p`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onSurface};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    line-height: 1.4;
    flex: 1;
`;

export const ListItemCta = styled.div``;

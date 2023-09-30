import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50vh;
`;

export const Content = styled.div``;

export const ContentList = styled.ul`
    margin-top: ${({ theme }) => theme.box.spacing.md};
    list-style-type: disc;
    padding-left: 1.2rem;
`;

export const ContentListItem = styled.li`
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
    &::marker {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

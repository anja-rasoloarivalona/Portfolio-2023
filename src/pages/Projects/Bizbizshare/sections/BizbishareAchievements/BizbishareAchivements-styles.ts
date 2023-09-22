import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50vh;
`;

export const Content = styled.div``;

export const ContentIntro = styled.p`
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: 1.4;
`;

export const ContentList = styled.ul`
    margin-top: ${({ theme }) => theme.box.spacing.md};
    list-style-type: disc;
    padding-left: 1.2rem;
`;

export const ContentListItem = styled.li`
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: 1.4;
    margin-bottom: ${({ theme }) => theme.box.spacing.md};
    color: ${({ theme }) => theme.colors.onBackground};

    &::marker {
        color: ${({ theme }) => theme.colors.primary.main};
    }
`;

export const ContentListItemLabel = styled.span`
    color: ${({ theme }) => theme.colors.primary.main};
`;

export const ContentListItemText = styled.span``;

import styled from 'styled-components';

export const Container = styled.p``;

export const DisplayedText = styled.span``;

export const Toggle = styled.span`
    margin-left: ${({ theme }) => theme.box.spacing.xxs};
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
`;

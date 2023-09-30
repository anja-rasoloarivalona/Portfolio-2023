import styled from 'styled-components';
import { HeaderContainer, HeaderContent } from '../../Header-styles';

export const Container = styled(HeaderContainer)<{ isDisplayed: boolean }>`
    transform: ${({ isDisplayed }) => (isDisplayed ? 'translateY(0%)' : 'translateY(-100%)')};
`;

export const Content = styled(HeaderContent)``;

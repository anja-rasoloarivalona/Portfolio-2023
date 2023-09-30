import styled from 'styled-components';
import { styles } from '../Typography-styles';

export const Container = styled.span<{ displayType: 'onSurface' | 'onBackground'; primary: boolean }>`
    ${styles};
`;

import styled from 'styled-components';
import { styles } from '../Typography-styles';

export const Container = styled.p<{ displayType: 'onSurface' | 'onBackground'; primary: boolean }>`
    ${styles};
`;

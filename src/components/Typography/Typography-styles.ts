import { css } from 'styled-components';

export const styles = css<{ displayType: 'onSurface' | 'onBackground'; primary: boolean }>`
    font-size: ${({ theme }) => theme.font.size.lg};
    line-height: 1.6;
    text-align: justify;

    ${({ displayType, theme, primary }) => {
        if (primary === true) {
            return {
                color: theme.colors.primary.main,
            };
        }

        if (displayType === 'onSurface') {
            return {
                color: theme.colors.onSurface,
            };
        }

        if (displayType === 'onBackground') {
            return {
                color: theme.colors.onBackground,
            };
        }
    }}
`;

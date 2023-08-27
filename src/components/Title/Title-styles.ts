import styled from 'styled-components';

export const Container = styled.div<{ isCentered: boolean }>`
    display: flex;
    align-items: center;
    padding-top: 10rem;

    ${({ isCentered, theme }) => {
        if (isCentered === true) {
            return {
                h2: {
                    padding: `0 ${theme.box.spacing.lg}`,
                },
            };
        } else {
            return {
                h2: {
                    paddingRight: theme.box.spacing.lg,
                },
            };
        }
    }}
`;

export const Text = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.onBackground};
`;

export const Bar = styled.div`
    flex: 1;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.onSurface};
`;

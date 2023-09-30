import styled from 'styled-components';

export const Container = styled.div<{ isCentered: boolean; expandBottomSpace: boolean }>`
    display: flex;
    align-items: center;
    grid-column: 3 / 4;
    margin-bottom: ${({ theme, expandBottomSpace }) =>
        expandBottomSpace ? theme.box.spacing.xxl : theme.box.spacing.lg};

    ${({ isCentered, theme }) => {
        if (isCentered === true) {
            return {
                justifyContent: 'center',
                h2: {
                    padding: `0 ${theme.box.spacing.lg}`,
                },
            };
        } else {
            return {
                h2: {
                    paddingRight: theme.box.spacing.lg,
                },
                div: {
                    maxWidth: '60%',
                },
            };
        }
    }}
`;

export const Text = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xxl};
    color: ${({ theme }) => theme.colors.onBackgroundHighlighted};
`;

export const Bar = styled.div`
    flex: 1;
    max-width: 15rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.onBackgroundDark};
`;

import styled from 'styled-components';

export const Container = styled.div<{ isCentered: boolean }>`
    display: flex;
    align-items: center;
    grid-column: 3 / 4;
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};

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
    color: ${({ theme }) => theme.colors.onBackground};
`;

export const Bar = styled.div`
    flex: 1;
    max-width: 15rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.onBackgroundDark};
`;

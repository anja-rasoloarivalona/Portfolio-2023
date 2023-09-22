import styled, { css } from 'styled-components';

const inputStyle = css`
    width: 100%;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.onSurface} !important;
    padding: ${({ theme }) => theme.box.spacing.md};
    font-size: ${({ theme }) => theme.font.size.lg};
    border: 1px solid ${({ theme }) => theme.colors.onBackgroundDark};

    :focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary.main};
    }

    :-webkit-autofill {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.onSurface} !important;
        background-color: ${({ theme }) => theme.colors.surface} !important;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: ${({ theme }) => theme.box.spacing.xl};
    ${({ theme }) => theme.config.grid.default};
    position: relative;
`;

export const Content = styled.div<{ isDisplayed: boolean; isMounted: boolean }>`
    grid-column: 2 / 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 7rem;
    transition: all 0.3s ease-in;
    transform: translateY(3rem);
    opacity: 0;

    ${({ isMounted }) => {
        if (isMounted === true) {
            return {
                transform: 'translateY(0)',
                opacity: 1,
            };
        }
    }}

    ${({ isDisplayed }) => {
        if (isDisplayed === false) {
            return {
                opacity: 0,
                scale: 0,
            };
        }
    }}
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xxl};
    text-align: center;
    color: ${({ theme }) => theme.colors.onBackground};
    margin-bottom: ${({ theme }) => theme.box.spacing.xxl};
`;

export const ErrorBanner = styled.div`
    border: 1px solid #f13838;
    padding: ${({ theme }) => theme.box.spacing.md};
    grid-column: 1 / -1;
    color: #f13838;
    font-size: ${({ theme }) => theme.font.size.md};
    margin-bottom: ${({ theme }) => theme.box.spacing.lg};
    border-radius: 0.5rem;
    background-color: #2b1d1d;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        cursor: pointer;
        font-size: ${({ theme }) => theme.font.size.lg};
    }
`;

export const ErrorBannerMessage = styled.div``;

export const Form = styled.form`
    width: 100%;
    max-width: 65rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: max-content;
    grid-column-gap: ${({ theme }) => theme.box.spacing.lg};
    grid-row-gap: ${({ theme }) => theme.box.spacing.lg};
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.box.spacing.xl};
    border-radius: 0.5rem;
`;

export const FormGroup = styled.div<{ isExpanded?: boolean }>`
    display: flex;
    flex-direction: column;

    ${({ isExpanded }) => {
        if (isExpanded === true) {
            return {
                gridColumn: '1/-1',
            };
        }
    }}
`;

export const FormGroupLabel = styled.label`
    margin-bottom: ${({ theme }) => theme.box.spacing.sm};
    color: ${({ theme }) => theme.colors.onBackground};
    font-size: ${({ theme }) => theme.font.size.sm};

    .required {
        color: #f13838;
    }
`;

export const FormGroupInput = styled.input`
    ${inputStyle};
    height: 4.5rem;
`;

export const FormGroupTextarea = styled.textarea`
    ${inputStyle};
    min-height: 15rem;
    max-height: 30rem;
    resize: vertical;
`;

export const FormFooter = styled.div`
    grid-column: 1/ -1;
    display: flex;
    justify-content: center;
`;

export const AnimationContainer = styled.div<{ isDisplayed: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
    transition: all 0.3s ease-in;
    opacity: 0;
    transform: scale(0);

    ${({ isDisplayed }) => {
        if (isDisplayed === true) {
            return {
                opacity: 1,
                transform: 'scale(1)',
            };
        }
    }}
`;

export const AnimationMessage = styled.div`
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.primary.main};
    margin-top: ${({ theme }) => theme.box.spacing.lg};
`;

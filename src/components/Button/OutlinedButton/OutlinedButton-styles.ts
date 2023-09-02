import styled from 'styled-components';
import { OutlinedButtonProps } from './OutlinedButton';

export const Container = styled.button<OutlinedButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    padding: 0 ${({ theme }) => theme.box.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    background: transparent;
    width: max-content;
    cursor: pointer;
    user-select: none;
    font-size: ${({ theme }) => theme.font.size.md};
    border-radius: 0.5rem;
    transition: all 0.3s ease-in;
    position: relative;

    :hover {
        background: ${({ theme }) => theme.colors.primary.mainHover};
    }

    ${({ hasDarkBackground, theme }) => {
        if (hasDarkBackground === false) {
            return {
                borderColor: theme.colors.primary.dark,
                color: theme.colors.primary.dark,
                ':hover': {
                    background: theme.colors.primary.darkHover,
                },
                '> .button__icon': {
                    '> button__icon__bar': {
                        background: theme.colors.primary.dark,
                    },
                },
            };
        }
    }}

    ${({ isExpanded }) => {
        if (isExpanded === true) {
            return {
                width: '100%',
                height: '4.5rem',
            };
        }
    }}
`;

export const TrailingIconContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 90%;
    margin: auto;
    height: max-content;
    display: flex;
    align-items: center;

    svg {
        font-size: ${({ theme }) => theme.font.size.md};
        transform: translateX(-4px);
    }
`;

export const TrailingIconBar = styled.div`
    width: 3rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary.main};
`;

export const LeadingIconContainer = styled.div`
    margin-right: ${({ theme }) => theme.box.spacing.md};
    svg {
        transform: translateY(1px);
    }
`;

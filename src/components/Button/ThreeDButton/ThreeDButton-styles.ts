import styled from 'styled-components';

export const Container = styled.button`
    display: inline-block;
    position: relative;
    border: 0;
    background: ${({ theme }) => theme.colors.primary.main};
    padding: 1.25em 1.5em;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    transform-style: preserve-3d;
    transition: transform 0.3s cubic-bezier(0, 0, 0.58, 1), background 0.3s cubic-bezier(0, 0, 0.58, 1);
    cursor: pointer;
    user-select: none;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.colors.primary.dark};
        border-radius: inherit;
        transform: translate3d(0, 0.5em, -1em);
        transition: transform 0.3s cubic-bezier(0, 0, 0.58, 1);
    }

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.25);
        filter: blur(4px);
        border-radius: inherit;
        top: 0;
        left: 0;
        transform: translate3d(0, 0.7em, -1em);
        transition: transform 0.3s cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
        transform: translateY(-0.25em);
    }
    &:hover:before {
        transform: translate3d(0, 0.75em, -1em);
    }
    &:hover:after {
        transform: translate3d(0, 1.05em, -1em);
    }
    &:active {
        transform: translate(0, 0.5em);
    }
    &:active:before,
    &:active:after {
        transform: translate3d(0, 0, -1em);
    }
`;

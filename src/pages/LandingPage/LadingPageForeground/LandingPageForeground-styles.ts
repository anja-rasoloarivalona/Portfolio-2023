import styled from 'styled-components';

export const Container = styled.div<{ position: { x: number; y: number } }>`
    position: fixed;
    z-index: 2;
    width: 60rem;
    height: 60rem;
    top: 0;
    left: 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transform: ${({ position }) => `translate(${position.x}px, ${position.y}px)`};
    cursor: move;
`;

export const Content = styled.div<{ position: { x: number; y: number } }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: ${({ position }) => `translate(${position.x * -1}px, ${position.y * -1}px)`};
`;

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    transition: all 1s ease-in;
    filter: brightness(35%);
`;

export const Text = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 100px;
    color: white;
    z-index: 2;
    text-transform: uppercase;
    padding-bottom: 50px;
    user-select: none;
`;

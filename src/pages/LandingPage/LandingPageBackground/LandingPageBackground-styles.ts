import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
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
    color: black;
    background: white;
    mix-blend-mode: screen;
    z-index: 2;
    text-transform: uppercase;
    padding-bottom: 50px;
    text-shadow: 0 13.36px 8.896px #e0dfdf, 0 -2px 1px #fff;
    user-select: none;
`;

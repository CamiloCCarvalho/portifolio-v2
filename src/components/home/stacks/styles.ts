import styled, { keyframes } from 'styled-components'

const slideIntro = keyframes`
    from {
        opacity:0%;
    }
    to {
        opacity:100%;
    }
`
const iconScaleAnime = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.16);
    }
    100% {
        transform: scale(1);
  }
`
//Container Mid
export const Stacks = styled.section`
    height:auto;
    background-color: ${props => props.theme.colors.highlight};
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const TitleStacks = styled.h2`
    padding: 40px 0;
    font-family: 'Monserrat', sans-serif;
    font-weight: 800;
    animation: ${slideIntro} 2.2s;
    &[data-anime="left"] {
        transition: .7s;
        opacity: 0.3;
        transform: translate3d(-250px, 0px, 0px);
    }
    &[data-anime].animate {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
    }
`
export const GridStacks = styled.ul`
    padding: 20px 20px;
    margin-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: center;
    gap: 18px;
    width: 90%;
    animation: ${slideIntro} 3s;
    

    &[data-anime="right"] {
        transition: .7s;
        opacity: 0.3;
        transform: translate3d(250px, 0px, 0px);
    }
    &[data-anime].animate {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
    }

    &:has(li:hover) li:not(:hover) {
        transition: 1.0s;
        opacity: 0.9;
        scale: 0.98;
    }
    &:has(li:hover) li:hover {
        animation:none;
    }
`

export const CardStack = styled.li`
    width:126px;
    height:126px;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:center;
    word-wrap: break-word;
    border-radius: 2px 20px 2px 2px;
    border-bottom: 2px solid cyan;
    cursor:pointer;

`
//Icons
export const StyledIcon = styled.i`
    font-size: 48px;
    filter:drop-shadow(0 0 3px rgba(0, 500, 900, 0.6));
    animation: ${iconScaleAnime} 3s ease-in-out infinite;
`

export const NameStacks = styled.p`
    word-wrap: break-word;
    text-align:center;
    
`
    
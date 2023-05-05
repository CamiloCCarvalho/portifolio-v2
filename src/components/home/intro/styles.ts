import styled, { keyframes } from 'styled-components'

//Container Top

//Animation
const blink = keyframes`
    0%  { background-color: #ccc; }
    49% { background-color: #ccc; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
    100%  { background-color: #ccc; }
`
const slideIntro = keyframes`
    from {
        opacity:0%;
    }
    to {
        opacity:100%;
    }
`
export const Intro = styled.div`
    width:auto;
    height:auto;
    display:flex;
    flex-flow row wrap;
    align-items:center;
    justify-content:space-between;

    @media(max-width: 968px) {
        flex-flow: column wrap;
    }
    
`
export const BoxLeft = styled.figure`
    display:flex;
    flex-flow:column nowrap;
    align-items:center;
    justify-content:center;
    width:30%;
    height:auto;
    padding:25px;

    animation: ${slideIntro} 3s;

    @media(max-width: 968px) {
        padding: 80px 25px;
    }
`
export const BoxRight = styled.section`
    display:flex;
    flex-flow:column wrap;
    width:70%;
    height:auto;
    margin:0;
    max-width:750px;
    animation: ${slideIntro} 2.2s;

`

//Content Intro - left side
export const HomeImage = styled.img`
    width:417;
    height:450;
    filter: drop-shadow(-10px 6px 20px rgba(0, 0, 0, 0.520));
    border-radius:50%;
    
`

export const Buttons = styled.figcaption`
    font-family: 'Monserrat', sans-serif;
    width:60%;
    height:auto;
    display:flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content:space-around;
    padding:20px;
`
export const MyButton = styled.button`
    height:auto;
    background: ${props => props.theme.colors.highlight};
    width:fit-content;
    padding: 2px 10px;
    border-bottom: 1px solid cyan;
    border-radius: 0 10px 0 0;
    color: ${props => props.theme.colors.background};

    &:hover {
        background: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
        box-shadow: 0 0 14px rgba(0, 300, 300, 0.7);
        transition: 0.8s;
    }
`
export const MyButtonHighLight = styled.button`
    height:auto;
    background: ${props => props.theme.colors.text};
    width:fit-content;
    padding: 2px 10px;
    margin-right: 20px;
    border-bottom: 1px solid cyan;
    border-radius: 0 10px 0 0;
    color: ${props => props.theme.colors.textNav};
    font-style: bold;

    &:hover {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.textNav};
        box-shadow: 0 0 14px rgba(0, 300, 300, 0.7);
        transition: 0.8s;
    }
`

//Content Intro - Right side
export const HomeText = styled.article`
    height: 100vh;
    width:auto;
    display: flex;
    flex-flow:column nowrap;
    justify-content: center;
    align-items: center;

    &.animationTextBox {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Title = styled.h2`
    width:auto;
    height:auto;
    font-family: 'Monserrat', sans-serif;
    font-weight:900;
`

export const HomeTextPersonal = styled.p`
    font-size: 2rem;
    padding: 0.5rem;
    width:auto;
    height:auto;
    &.textP {
        font-size: 3rem;
        padding: 0.5rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        text-align: center;
        overflow: hidden;
    }
`
export const TypedText = styled.span`
    width:auto;
    height:auto;
    font-weight: normal;

    &.typedText {
        font-weight: bold;
        color: #0FA3B1;
    }
    word-wrap: break-wrod;
`
export const CursorText = styled.span`
    display: inline-block;
    margin-left: 0.1rem;
    width: 3px;
    height:auto;

    &.cursor {
        display: inline-block;
        background-color: #ccc;
        margin-left: 0.1rem;
        width: 3px;
        animation: ${blink} 1s infinite;
      }
    &.cursor.typing {
        animation: none;
    }
`
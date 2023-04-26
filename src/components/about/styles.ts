import styled, { keyframes } from 'styled-components'

const slideIntro = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
`
export const ContainerAbout = styled.section`
    height: auto;
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content:center;
    color: white;
    padding:60px;
    padding-top:120px;
`

export const CardAbout = styled.article`
    max-width: 600px;
    min-height: 500px;
    background: ${props => props.theme.colors.highlight};
    margin-bottom: 20px;
    margin-right: 20px;
    border-radius: 2px 20px 20px 2px;
    border-left: 2px solid cyan;
    box-shadow: inset 0 -20px 5px rgba(0,500,500, 0.5);
    animation: ${slideIntro} 2.2s;
`

export const Text = styled.p`
    word-wrap: break-word;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    padding-bottom:12px;
`

export const Title3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 20px;
    text-decoration:underline;
`
export const TextBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`
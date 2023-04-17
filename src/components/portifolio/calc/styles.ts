import styled from 'styled-components'

export const ContainerPage = styled.main`
    font-family: sans-serif;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:center;
    height:100vh;
`

export const CalcBox = styled.div`
    height: 520px;
    min-width: 300px;
    width: 40%;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    border-radius: 0 20px 0 0;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    box-shadow: 0 10px 80px -50px ${props => props.theme.colors.highlight};
    border:1px solid ${props => props.theme.colors.highlight};
`
export const Header = styled.header`
    display:flex;
    width:80%;
    flex-flow: row nowrap;
    justify-content:flex-start;
    align-items:center;
    padding: 1rem 0;
`
export const Input = styled.input`
    background: ${props => props.theme.colors.background};
    width: 80%;
    border-radius: 6px;
    box-shadow: 0 0 20px -2px ${props => props.theme.colors.primary};
    border:1px solid cyan;
    padding:0 0.5rem;
    height:50px;
    margin: 20px 0;
    text-align:end;
    color: ${props => props.theme.colors.secundary};
    padding-right: 20px;
    font-size: 1.6rem;
    &:focus {
        color: ${props => props.theme.colors.secundary};
        padding-right: 20px;
        outline-offset: -2px;
        outline: 2px solid cyan;
    }
    &#result {
        height:31px;
        width:100%;
        border-width: 1px 1px 2px 0;
        border-radius: 0 .5rem .1rem 0;
    }
    &#result.error {
        color:white;
        background:red;
    }
    &#result.clear {
        color:${props => props.theme.colors.secundary};
        background:${props => props.theme.colors.background};
    }
`
export const Keyboard = styled.div`
    width:80%;
    height:50%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    
`
export const Keys = styled.button`
    border: none;
    border-radius: 2px 6px 2px 2px;
    background: ${props => props.theme.colors.textNav};
    color:${props => props.theme.colors.text};
    cursor:pointer;
    border-left:1px solid cyan;
    border-bottom:1px solid cyan;
    font-size:1.2rem;
    transition: 0.5s;

    &#copyToClipboard {
        height:auto;
        margin:0;
        padding:0;
        border-radius: 8px 0 0 0;
        width:5rem;
        border-bottom:1px solid cyan;
        border-top:1px solid cyan;
        border-right: 2px solid cyan;
    }
    &#copyToClipboard:hover {
        border-right: 2px solid cyan;
    }
    &#copyToClipboard.success {
        background: green;
    }
    &:hover {
        filter: brightness(0.8);
        border-left:none;
    }
`
export const Section = styled.section`
    width: 80%;
    height: 10%;
    margin-top: 10px;
    display:flex;
    flex-flow: row nowrap;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
`
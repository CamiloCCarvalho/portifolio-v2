import styled from 'styled-components'

export const ContainerPage = styled.main`
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:center;
    height:100vh;
`

export const CalcBox = styled.main`
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
    flex-flow: row nowrap;
    justify-content:center;
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
    &#result {
        height:30px;
        width:50%;
        border-width: 1px 1px 2px 1px;
        border-radius: 0 .5rem .1rem 0;
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
    box-sizing:border-box;
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
        height: 2rem;
        width:5rem;
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
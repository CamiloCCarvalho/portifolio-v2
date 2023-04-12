import styled from 'styled-components'


//Container Mid
export const Stacks = styled.section`
    height:auto;
    background-color: ${props => props.theme.colors.highlight};
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`

export const TitleStacks = styled.h2`
    padding: 20px 0;
    font-family: 'Monserrat', sans-serif;
    font-weight: 800;
`
export const GridStacks = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: center;
    gap: 18px;
    width: 90%;
`

export const CardStack = styled.div`
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

`
//Icons
export const StyledIcon = styled.i`
    font-size: 48px;
    filter:drop-shadow(0 0 3px rgba(0, 500, 900, 0.6));
`

export const NameStacks = styled.p`
    word-wrap: break-word;
    text-align:center;
`

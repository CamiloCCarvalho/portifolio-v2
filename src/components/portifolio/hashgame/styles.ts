import styled from 'styled-components'

export const HashPage = styled.div`
    height:100vh;
    background: ${props => props.theme.colors.highlight};
`

export const Cell = styled.div`
    width:100px;
    height:100px;
    border: 2px solid antiquewhite;
    display:flex;
    justify-content: center;
    align-items:center;
    position:relative;

    &:nth-child(-n+3) {
        border-top:none;
    }
    &:nth-child(n+7) {
        border-bottom:none;
    }
    &:nth-child(3n+1) {
        border-left:none;
    }
    &:nth-child(3n+3) {
        border-right:none;
    }

    &.x, &.circle {
        cursor:not-allowed;
    }

    &.x:before, &.x:after {
        content:'';
        height: calc(100px *0.15);
        width: calc(100px *0.9);
        background:white;
        position:absolute;
        border-radius:20px;
        box-shadow:0px 0px 5px rgba(40, 39, 39, 0.349);
    }

`

export const Board = styled.div`
    display:grid;
    width: 100%;
    height:100%;
    justify-content:center;
    align-content:center;
    justify-items:center;
    align-items:center;
    grid-template-columns: repeat(3, auto);

    &.x ${Cell}:not(.x):not(.circle):hover::after, &.x ${Cell}:not(.x):not(.circle):hover::before {
        content:'';
        height: calc(100px *0.15);
        width: calc(100px *0.9);
        background:white;
        position:absolute;
        border-radius:20px;
        box-shadow:0px 0px 5px rgba(40, 39, 39, 0.349);
    }

    ${Cell}.x:before, &.x ${Cell}:not(.x):not(circle):hover::before {
        transform:rotate(45deg);
    } 
    ${Cell}.x:after, &.x ${Cell}:not(.x):not(circle):hover::after {
        transform:rotate(-45deg);
    }

    ${Cell}.circle:before, ${Cell}.circle:after, &.circle ${Cell}:not(.x):not(.circle):hover::after, ${Cell}.circle:before, ${Cell}.circle:after, &.circle ${Cell}:not(.x):not(.circle):hover::before {
        content:'';
        height: calc(100px *0.8);
        width: calc(100px *0.8);
        background:white;
        position:absolute;
        border-radius:50%;
        box-shadow:0px 0px 4px rgba(40, 39, 39, 0.349);
    } 
`

export const WinMessage = styled.div`
    display:none;
    flex-flow: column wrap;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.8);

    &.show-message {
        display:flex;
    }
`

export const WinButton = styled.button`
    font-size:2.0rem;
    padding:0 12px;
    border-radius: 3px;
    color:white;
    border:none;
    background:${props => props.theme.colors.highlight};
    font-family:'Anton';
    margin-top:20px;
    cursor: pointer;

    &:hover {
        color:${props => props.theme.colors.highlight};
        background: #f5f5f5;
    }
`

export const WinText = styled.p`
    color:white;
    font-size:2.5rem;
    font-family:'Anton';
`
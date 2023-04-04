import styled from 'styled-components'

export const ClockPage = styled.div`
    height:100vh;
    display:flex;
    flex-flow:column nowrap;
    align-items: center;
    justify-content:center;
`

export const ClockBox = styled.div`
    width:250px;
    height:250px;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content: center;
    border: 10px outset rgb(142, 171, 136);
    background-image: linear-gradient(120deg, silver, rgb(45, 70, 40));
    border-radius: 50%;
    box-shadow: 15px 15px 30px rgba(82, 82, 82, 0.49);
`

export const ClockTitle = styled.h3`
    color:greenyellow;
    filter:drop-shadow( 2px 2px 4px green);
    font-size: 1em;
`

export const Clock = styled.div`
    width: 50%;
    display:flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content:center;
    gap: 20px;
`

export const ClockNumber = styled.p`
    font-size: 1em;
    padding:0;
    margin:0;
    color:greenyellow;
    filter:drop-shadow( 2px 2px 4px green);
`
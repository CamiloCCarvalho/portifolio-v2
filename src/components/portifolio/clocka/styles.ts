import styled from 'styled-components'

export const ClockPage = styled.div`
    width:100%;
    height:600px;
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
    align-items: center;
`

export const Clock = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/clock.png);
    background-size:cover;
    border: 4px solid ${props => props.theme.colors.highlight};
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.056), inset 0 -215px 15px rgba(255, 255, 255, 0.027), 0 15px 15px rgba(0,0,0,0.3), inset 0 15px 15px rgba(9, 9, 9, 0.3);

    &::before {
        content:"";
        position: absolute;
        width: 15px;
        height:15px;
        background: ${props => props.theme.colors.highlight};
        border-radius: 50%;
        z-index: 10000;
    }
`

export const Hour = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;
`
export const Hpointer = styled.div`
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;

    &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 80px;
        background:#ff105e;
        z-index: 10;
        border-radius: 6px 6px 0 0;
    }
`

export const Min = styled.div`
    position: absolute;
    width: 190px;
    height: 190px;
`
export const Mpointer = styled.div`
    width: 190px;
    height: 190px;
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;

    &::before {
        content:"";
        position: absolute;
        width: 4px;
        height: 90px;
        background: ${props => props.theme.colors.text};
        z-index:11;
        border-radius: 6px 6px 0 0;
    }
`
export const Sec = styled.div`
    position: absolute;
    width: 230px;
    height: 230px;
`
export const Spointer = styled.div`
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;

    &::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 150px;
        background: ${props => props.theme.colors.highlight};
        z-index:12;
        border-radius: 6px 6px 0 0;
    }
`


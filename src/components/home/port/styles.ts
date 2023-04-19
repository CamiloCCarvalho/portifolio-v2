import styled, { keyframes }from 'styled-components'

const slideIntro = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
`

//Container Mid
export const Port = styled.section`
    height:auto;
    background-color: ${props => props.theme.colors.background};
    display:flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`

export const TitleProjects = styled.h2`
    padding: 40px 0;
    font-family: 'Monserrat', sans-serif;
    font-weight: 800;
    animation: ${slideIntro} 2.2s;
`
export const GridProjects = styled.ul`
    padding: 40px 20px;
    margin-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: center;
    gap: 18px;
    width: 90%;
    animation: ${slideIntro} 2.2s;

    & > .linkRef {
        text-decoration:none;
    }

    &:has(li:hover) li:not(:hover) {
        transition: 1.0s;
        opacity: 0.9;
        scale: 0.98;
    }
`

export const CardProject = styled.li`
    width:350px;
    height:250px;
    background: ${props => props.theme.colors.highlight};
    color: ${props => props.theme.colors.text};
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:space-around;
    word-wrap: break-word;
    border-radius: 20px 2px 2px 2px;
    border-bottom: 2px solid cyan;

`

export const NameProject = styled.p`
    word-wrap: break-word;
    text-align:center;
    
`
    
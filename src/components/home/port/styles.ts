import styled from 'styled-components'

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
    padding: 20px 0;
    font-family: 'Monserrat', sans-serif;
    font-weight: 800;
`
export const GridProjects = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content: center;
    gap: 18px;
    width: 90%;
    & > .linkRef {
        text-decoration:none;
    }
`

export const CardProject = styled.div`
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
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ContainerNav = styled.div`
    height: 60px;
    width:auto;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items:center;
    padding: 0 20px;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
    box-shadow:0 -8px 60px rgba(0,500,500, 0.3);

`
export const DropDownMenu = styled.div`
    background: ${props => props.theme.colors.primary};
`
export const DropDownMenuCollapse = styled.div`
    background: ${props => props.theme.colors.primary};
    z-index:999;

    & > ul li {
        @media (max-width: 991px) {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
    & > .switchBtn {
        @media (max-width: 991px) {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
`
export const Anch = styled(Link)`
    font-family: 'Montsarrat', sans-serif;
    padding: 5px 10px;
    text-decoration: none;
    color: ${props => props.theme.colors.textNav};

    &:hover {
        text-decoration:none;
        color: ${props => props.theme.colors.textNav};
        color: ${props => props.theme.colors.text};
        transition: 0.3s;
    }    
`

export const MenuButton = styled.button`
    border:none;

    &:hover {
        filter: brightness(55%);
    }
`
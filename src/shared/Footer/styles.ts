import styled from 'styled-components'

export const FooterBox = styled.footer`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textNav};
    
    width: 100%;
    border:none;
    border-radius:0;
    border-top: 1px solid ${props => props.theme.colors.highlight};
    box-shadow:0 8px 60px rgba(0,500,500, 0.3);

`
    
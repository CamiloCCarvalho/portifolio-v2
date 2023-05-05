import {ContainerNav, DropDownMenuCollapse, Anch, MenuButton} from '../../shared/Header/styles'
import Switch from 'react-switch'
import {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { AiFillHome } from "react-icons/ai";


interface Props {
    toggleTheme(): void
}

const Header:React.FC<Props>= ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext)
    
    return (
        
            <ContainerNav className="navbar navbar-expand-lg">
                <Anch to="/" aria-label="Return to home page">
                    <AiFillHome size="24"/>
                </Anch>

                <MenuButton 
                className="navbar-toggler navbar-dark" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </MenuButton>

                    <DropDownMenuCollapse className="collapse navbar-collapse text-center" 
                            id="navbarSupportedContent">    
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Anch to="/about" aria-label="Go to about page">
                                    Sobre
                                </Anch>
                            </li>
                            
                            <li className="nav-item">
                                <Anch to="/portifolio" aria-label="Go to portifolio page">
                                    Portifólio
                                </Anch>
                            </li>
                        </ul>
                        <Switch className="switchBtn"
                            aria-label="Button swap theme site between light and dark"
                            onChange={toggleTheme}
                            checked={title === 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={12}
                            width={36}
                            handleDiameter={16}
                            onColor={colors.secundary}
                            offColor={shade(0.25, colors.primary)}
                            onHandleColor={shade(0.45, colors.secundary)}
                        />
                    </DropDownMenuCollapse>
            </ContainerNav>
    )
}

export default Header
    
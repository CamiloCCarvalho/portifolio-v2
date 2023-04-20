import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {FooterBox} from '../../shared/Footer/styles'
import {RiCodeSSlashLine} from "react-icons/ri";


const Footer:React.FC = () => {
    useContext(ThemeContext)
    
    return (
        
            <FooterBox className="card text-center navbar-fixed-bottom">
                <div className="card-header">
                    <RiCodeSSlashLine size="18"/>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Camilo Costa de Carvalho</h5>
                    <p className="card-text">FRONT-END | JAVASCRIPT</p>
                </div>

                <div className="card-footer">
                   Atualizado: 20/04/2023 ---  Versão: 2.1.05
                </div>
            </FooterBox>
    )
}

export default Footer
    
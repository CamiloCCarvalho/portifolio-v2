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
                    <h3 className="card-title">Camilo Costa de Carvalho</h3>
                    <p className="card-text">Desenvolvendo e Automatizando o mundo.</p>
                    <p className="card-text">RPA: (Python BotCity) & Front-End: (React JS TS)</p>
                </div>

                <div className="card-footer">
                   Atualizado: 09/10/2023 ---  Versão: 2.5.80
                </div>
            </FooterBox>
    )
}

export default Footer
    
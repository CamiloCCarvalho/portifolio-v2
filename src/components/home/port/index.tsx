import {Port, TitleProjects, GridProjects, CardProject, NameProject} from './styles'

import {Link} from 'react-router-dom'

import {BsFillStopwatchFill} from 'react-icons/bs'
import {IoMdWatch} from 'react-icons/io'
import {FaHashtag} from 'react-icons/fa'
import {MdCalculate, MdOutlineWeb} from 'react-icons/md'

const ContainerPort:React.FC = () => {
    return (
        <Port className="container-fluid m-0 p-0">
            <TitleProjects id="projects">Projetos</TitleProjects>

            <GridProjects>
            <Link className="linkRef" to="/portifolio/clockdigital">
                <CardProject>
                    <IoMdWatch size="84"/>
                    <NameProject>
                        Relogio Digital
                    </NameProject>
                </CardProject>
            </Link>
                <Link className="linkRef" to="/portifolio/clockanalogic">
                    <CardProject>
                        <BsFillStopwatchFill size="84"/>
                        <NameProject>
                            Relogio Analogico
                        </NameProject>
                    </CardProject>
                </Link>
            <Link className="linkRef" to="/portifolio/hashgame">
                <CardProject>
                    <FaHashtag size="84"/>
                    <NameProject>
                        Jogo da Velha
                    </NameProject>
                </CardProject>
            </Link>
            
            <Link className="linkRef" to="#" style={{display:"none"}}>
                <CardProject >
                    <MdCalculate size="84"/>
                    <NameProject>
                        Calculadora
                    </NameProject>
                </CardProject>
            </Link>
                
            <Link className="linkRef" to="https://musicdot.vercel.app" target="_blank">
                <CardProject>
                    <MdOutlineWeb size="84"/>
                    <NameProject>
                        ClonePage - MusicDot
                    </NameProject>
                </CardProject>
            </Link>
            </GridProjects>
        </Port>
    )
}

export default ContainerPort
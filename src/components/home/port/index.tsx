import {Port, TitleProjects, GridProjects, CardProject, NameProject, Card, LinkPage} from './styles'

import {BsFillStopwatchFill} from 'react-icons/bs'
import {IoMdWatch} from 'react-icons/io'
import {FaHashtag} from 'react-icons/fa'
import {MdCalculate, MdOutlineWeb} from 'react-icons/md'

const ContainerPort:React.FC = () => {
    return (
        <Port className="container-fluid m-0 pt-5">
            <TitleProjects id="projects">Projetos</TitleProjects>

            <GridProjects>
                <Card>
                    <LinkPage role="link" className="linkRef" to="/portifolio/clockdigital">
                        <CardProject>
                            <IoMdWatch size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Relógio Digital
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

                <Card>
                    <LinkPage role="link" className="linkRef" to="/portifolio/clockanalogic">
                        <CardProject>
                            <BsFillStopwatchFill size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Relógio Analógico
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

                <Card>
                    <LinkPage role="link" className="linkRef" to="/portifolio/hashgame">
                        <CardProject>
                            <FaHashtag size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Jogo da Velha
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

                <Card>
                    <LinkPage role="link" className="linkRef" to="/portifolio/calc">
                        <CardProject >
                            <MdCalculate size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Calculadora
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

                <Card>
                    <LinkPage role="link" className="linkRef" to="https://musicdot.vercel.app" target="_blank">
                        <CardProject>
                            <MdOutlineWeb size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Página Clone (Music Dot)
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

                <Card>
                    <LinkPage role="link" className="linkRef" to="https://cotral.vercel.app" target="_blank">
                        <CardProject>
                            <MdOutlineWeb size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Projeto Pessoal - Cotral Calculadora de Caixa
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

                <Card>
                    <LinkPage role="link" className="linkRef" 
                              to="https://ash-apilist.onrender.com" target="_blank">
                        <CardProject>
                            <MdOutlineWeb size="84"/>
                            <NameProject aria-label="Aria Title" title="title">
                                Projeto Pessoal - Consulta de APIs Públicas.
                            </NameProject>
                        </CardProject>
                    </LinkPage>
                </Card>

            </GridProjects>
        </Port>
    )
}

export default ContainerPort
    
import {Stacks, TitleStacks,
    GridStacks, CardStack,
    StyledIcon, NameStacks} from './styles'

import {DiBootstrap, DiGit, 
        DiGithub, DiJavascript,
        DiReact, DiSass, DiNpm,
         DiNodejs} from 'react-icons/di'

import { SiTypescript,
    SiStyledcomponents,
    SiVercel, SiVisualstudiocode,
    SiVite, SiPostgresql, SiSequelize,
    SiMongodb, SiPython, SiFlask} from 'react-icons/si'


const ContainerStacks:React.FC = () => {

    //list icons
    const icons:JSX.Element[] = [ <DiReact/>, <DiBootstrap/>, <DiGit/>, <DiGithub/>, <DiJavascript/>, <DiSass/>, <DiNodejs/>, <SiTypescript size="30"/>, <SiStyledcomponents size="40"/>, <SiPostgresql size="30"/>, <SiSequelize size="30"/>, <SiMongodb size="30"/>, <SiPython size="30"/>, <SiFlask size="30"/> ]

    //list titles for icons
    const names:string[] = ["React", "BootStrap", "Git", "GitHub", "JavaScript", "Sass", "NodeJS", "TypeScript", "Styled Components", "PostgreSQL", "Sequelize", "MongoDB", "Python", "Flask" ]

    return (
        <Stacks className="container-fluid m-0 p-0">
            <TitleStacks>Tecnologias & Ferramentas</TitleStacks>

            <GridStacks>
                    {icons.map((icon, index)=>(
                        <CardStack key={"card" + index.toString()}>
                            <StyledIcon key={index.toString()}>{icon}</StyledIcon>
                            <NameStacks title="Stacks names" key={index.toString() + "titleStack"}>{names[index]}</NameStacks>
                        </CardStack>
                    ))}
            </GridStacks>
        </Stacks>
    )
}

export default ContainerStacks
    
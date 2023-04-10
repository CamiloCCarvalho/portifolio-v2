import {Stacks, TitleStacks, GridStacks, CardStack, StyledIcon, NameStacks} from './styles'

import {DiBootstrap, DiCss3, DiGit, 
        DiGithub, DiHtml5, DiJavascript,
        DiReact, DiSass, DiNpm, DiNodejs} from 'react-icons/di'

import { SiTypescript, SiStyledcomponents, SiWebpack, SiBabel, SiVercel, SiVisualstudiocode, SiVite, SiPostgresql, SiSequelize } from 'react-icons/si'

const ContainerStacks:React.FC = () => {
    const icons = [ <DiReact/>, <DiBootstrap/>, <DiGit/>, <DiCss3/>, <DiHtml5/>, <DiGithub/>, <DiJavascript/>, <DiSass/>, <DiNpm/>, <DiNodejs/>, <SiTypescript size="30"/>, <SiStyledcomponents size="40"/>, <SiWebpack size="30"/>, <SiBabel size="30"/>, <SiVercel size="30"/>, <SiVisualstudiocode size="30"/>, <SiVite size="30"/>, <SiPostgresql size="30"/>, <SiSequelize size="30"/> ]
    const names = ["React", "BootStrap", "Git", "Css", "Html", "GitHub", "JavaScript", "Sass", "Npm", "NodeJS", "TypeScript", "Styled Components", "WebPack", "Babel", "Vercel", "VS Code", "Vite", "PostgreSQL", "Sequelize" ]

    return (
        <Stacks className="container-fluid m-0 p-0">
            <TitleStacks>Stacks & Ferramentas</TitleStacks>

            <GridStacks>
                    {icons.map((icon, index)=>(
                        <CardStack key={"card" + index.toString()}>
                            <StyledIcon key={index.toString()}>{icon}</StyledIcon>
                            <NameStacks key={index.toString() + "titleStack"}>{names[index]}</NameStacks>
                        </CardStack>
                    ))}
            </GridStacks>
        </Stacks>
    )
}

export default ContainerStacks
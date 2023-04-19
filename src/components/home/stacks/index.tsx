import {Stacks, TitleStacks, GridStacks, CardStack, StyledIcon, NameStacks} from './styles'

import {DiBootstrap, DiGit, 
        DiGithub, DiJavascript,
        DiReact, DiSass, DiNpm, DiNodejs} from 'react-icons/di'

import { SiTypescript, SiStyledcomponents, SiVercel, SiVisualstudiocode, SiVite, SiPostgresql, SiSequelize, SiMongodb } from 'react-icons/si'




const ContainerStacks:React.FC = () => {
    //animation
//    const debounce = (func:any, wait:number, immediate?:any) => {
//        let timeout:any
//        return function (...args:any[]) {
//            const context:any = this
//            const later = () => {
//                timeout = null
//                if(!immediate) func.apply(context, args)
//            }
//            const callNow:any = immediate && timeout
//            clearTimeout(timeout)
//            timeout = setTimeout(later, wait)
//            if (callNow) func.apply(context, args)
//        } 
//    }
//    const targets = document.querySelectorAll('[data-anime]')
//    console.log(targets)
//    const animationClass = 'animate'
//
//    function animeScroll() {
//        const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4);
//        console.log(windowTop)
//
//        targets.forEach((element) => {
//            if(windowTop > element.offsetTop){
//                element.classList.add(animationClass)
//            } else {
//                element.classList.remove(animationClass)
//            }
//        })  
//    }
//    if(targets.length){
//        window.addEventListener('scroll', debounce(() => {
//            animeScroll()
//        }, 200))
//    }


    //list icons
    const icons:JSX.Element[] = [ <DiReact/>, <DiBootstrap/>, <DiGit/>, <DiGithub/>, <DiJavascript/>, <DiSass/>, <DiNpm/>, <DiNodejs/>, <SiTypescript size="30"/>, <SiStyledcomponents size="40"/>, <SiVercel size="30"/>, <SiVisualstudiocode size="30"/>, <SiVite size="30"/>, <SiPostgresql size="30"/>, <SiSequelize size="30"/>, <SiMongodb size="30"/> ]

    //list titles for icons
    const names:string[] = ["React", "BootStrap", "Git", "GitHub", "JavaScript", "Sass", "Npm", "NodeJS", "TypeScript", "Styled Components", "Vercel", "VS Code", "Vite", "PostgreSQL", "Sequelize", "MongoDB" ]

    return (
        <Stacks className="container-fluid m-0 p-0">
            <TitleStacks data-anime="left">Stacks & Ferramentas</TitleStacks>

            <GridStacks data-anime="right">
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
    
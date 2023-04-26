import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import local_camilo_cv from '../../../utils/localDocs'


import {BoxLeft, BoxRight, Buttons, MyButton, MyButtonHighLight, Title, HomeText, HomeTextPersonal, TypedText, CursorText, HomeImage, Intro} from './styles'

const ContainerIntro:React.FC = () => {    
    let typedTextSpan:Element|null
    let cursorSpan:Element|null

    interface animation {
        textArray: string[]
        typingDelay: number
        erasingDelay: number
        newTextDelay: number
        textArrayIndex: number
        charIndex: number
    }
    let anima: animation = {
        textArray: [" é Dificil!", " é Divertido!", " é Uma jornada!", " é VIDA!"],
        typingDelay: 200,
        erasingDelay: 100,
        newTextDelay: 2000,
        textArrayIndex: 0,
        charIndex: 0,
    }


    const [animat, setAnimat] = useState<(Element|null)[]>()

        useEffect(()=> {
            typedTextSpan = document.querySelector('.typedText')
            cursorSpan = document.querySelector(".cursor")
            if(cursorSpan && typedTextSpan){
                setAnimat([cursorSpan, typedTextSpan])
                type()
            }
        }, [])
    
    function type() {
        if(cursorSpan && typedTextSpan){
            if(anima.charIndex < anima.textArray[anima.textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) {
                    cursorSpan.classList.add("typing")
                }
                if(typedTextSpan) typedTextSpan.textContent += anima.textArray[anima.textArrayIndex].charAt(anima.charIndex)
                anima.charIndex++
                setTimeout(type, anima.typingDelay)
            } else {
                if(cursorSpan) cursorSpan.classList.remove("typing")
                setTimeout(erase, anima.newTextDelay)
            }
        }
    }

    function erase(): void{
        if(cursorSpan && typedTextSpan){

            if(anima.charIndex > 0) {
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing")
                typedTextSpan.textContent = anima.textArray[anima.textArrayIndex].substring(0, anima.charIndex-1)
                anima.charIndex--
                setTimeout(erase, anima.erasingDelay)
            } else {
                cursorSpan.classList.remove("typing")
                anima.textArrayIndex++
                if(anima.textArrayIndex >= anima.textArray.length) anima.textArrayIndex=0
                setTimeout(type, anima.typingDelay + 1100)
            }
        }
    }

    return (
        <Intro className="container-fluid">
            <BoxLeft>
                <HomeImage src="/camilocosta.png" alt="Imagem ilustrativa de Camilo"/>
                <Buttons>
                    <Link to={local_camilo_cv} target="_blank">
                        <MyButtonHighLight type="button" className="btn">
                        Curriculo PDF
                        </MyButtonHighLight>
                    </Link>
                    <a href="/#projects">
                        <MyButton type="button" className="btn">
                        Portifólio
                        </MyButton>
                    </a>
                </Buttons> 
            </BoxLeft>
            <BoxRight>
                <HomeText className='animationTextBox'>
                    <Title>Olá! Eu sou Camilo</Title>
                    <Title style={{color: "darkcyan", fontSize: "2rem"}}>{"<Front-End Developer />"}</Title>
                    <HomeTextPersonal className="textP">Programar 
                        <TypedText className="typedText"></TypedText><CursorText className="cursor">&nbsp;</CursorText>
                    </HomeTextPersonal>
                </HomeText>
            </BoxRight>
        </Intro>
    )
} 

export default ContainerIntro

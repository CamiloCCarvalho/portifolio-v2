import {ContainerPage, CalcBox, Header, Input, Keyboard, Keys, Section} from './styles'
import {useState, useEffect} from 'react'
import { BsFillSaveFill } from 'react-icons/bs'

const CalcPage:React.FC = () => {
    const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' ']

    let inputElement:HTMLInputElement|null
    let keysElements:NodeListOf<HTMLButtonElement>
    let keyClearElement:HTMLButtonElement|null
    let keyIqualElement:HTMLButtonElement|null
    let inputResElement:HTMLInputElement|null

    //load Elements
    const [input, setInput] = useState<HTMLInputElement|null>()
    const [keys, setKeys] = useState<NodeListOf<HTMLButtonElement>>()
    const [keyClear, setKeyClear] = useState<HTMLButtonElement|null>()
    const [keyEqual, setKeyEqual] = useState<HTMLButtonElement|null>()
    const [inputRes, setInputRes] = useState<HTMLInputElement|null>()
    useEffect(() => {
        inputElement = document.querySelector("#input")
        setInput(inputElement)
        keysElements = document.querySelectorAll('.charKey')
        setKeys(keysElements)
        keyClearElement = document.querySelector('#clear')
        setKeyClear(keyClearElement)
        keyIqualElement = document.querySelector('#equal')
        setKeyEqual(keyIqualElement)
        inputResElement = document.querySelector('#result')
        setInputRes(inputResElement)
    },[])
    
    //effectState input change
    useEffect(()=> {
        input?.addEventListener('keydown', function (ev:any){
            ev.preventDefault()
        
            //allow keyboard keys input
            if(allowedKeys.includes(ev.key)) {
            input.value += ev.key
            console.log(`digitou: ${ev.key}`)
            return
            }
    
            //allow keybord key backspace
            if(ev.key === 'Backspace') {
                input.value = (input.value) 
                ? input.value.slice(0, -1)
                : input.value = ''
                console.log(`apagou`)
            }
            if(ev.key === 'Enter') {
                calc()
            }
            input?.focus()
        })
    },[input])

    //effectState input button screen click
    useEffect(()=>{
        keys?.forEach((charKeyButton)=> {
            charKeyButton.addEventListener('click', () => {
                const valueButton:string|undefined= charKeyButton.dataset.value
                if(input)input.value += valueButton
                input?.focus()
            })
        })
        keyClear?.addEventListener('click', ()=> {
            if(input)input.value = ''
            input?.focus()
            if(inputRes)inputRes.value = ''
            input?.focus()
        })
        keyEqual?.addEventListener('click', () =>{
            calc()
            input?.focus()
        })
    },[keys])

    //calculate result
    function calc():void{
        if(input){
            //danger! eval needs filter characters 
            const result = String(eval(input.value))
            if(inputRes){
                if(result == 'undefined'){
                    inputRes.value = ''
                } else {
                    inputRes.value = result
                }
            }
        }
        input?.focus()
    }

    return (
        <ContainerPage className="container-fluid">
            <CalcBox id="main">
                <Header>
                    <h1>Calc.js</h1>
                </Header>

                <Input type="text" inputMode='tel' id="input"/>

                <Keyboard id="keys">
                    <Keys id="clear">C</Keys>
                    <Keys className="charKey" data-value=" ( ">(</Keys>
                    <Keys className="charKey" data-value=" ) ">)</Keys>
                    <Keys className="charKey" data-value=" / ">/</Keys>
                    <Keys className="charKey" data-value="7">7</Keys>
                    <Keys className="charKey" data-value="8">8</Keys>
                    <Keys className="charKey" data-value="9">9</Keys>
                    <Keys className="charKey" data-value=" * ">*</Keys>
                    <Keys className="charKey" data-value="4">4</Keys>
                    <Keys className="charKey" data-value="5">5</Keys>
                    <Keys className="charKey" data-value="6">6</Keys>
                    <Keys className="charKey" data-value=" - ">-</Keys>
                    <Keys className="charKey" data-value="1">1</Keys>
                    <Keys className="charKey" data-value="2">2</Keys>
                    <Keys className="charKey" data-value="3">3</Keys>
                    <Keys className="charKey" data-value=" + ">+</Keys>
                    <Keys className="charKey" data-value="0">0</Keys>
                    <Keys className="charKey" data-value=".">.</Keys>
                    <Keys className="charKey" data-value=" % ">mod</Keys>
                    <Keys id="equal">=</Keys>
                </Keyboard>

                <Section>
                    <Keys id="copyToClipboard">
                        <BsFillSaveFill size="18"/>
                    </Keys>
                    <Input type="text" id="result" disabled/>
                </Section>

            </CalcBox>
        </ContainerPage>
    )
}

export default CalcPage
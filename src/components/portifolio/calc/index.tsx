import {ContainerPage, CalcBox, Header, Input, Keyboard, Keys, Section} from './styles'

const CalcPage:React.FC = () => {

    return (
        <ContainerPage className="container-fluid">
            <CalcBox>
                <Header className="flex align-center justify-between">
                    <h1>Calc.js</h1>
                </Header>

                <Input type="text" id="input"/>

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

                <Section className="flex align-center justify-between">
                    <Keys id="copyToClipboard">Copy</Keys>
                    <Input type="text" id="result" disabled/>
                </Section>

            </CalcBox>
        </ContainerPage>
    )
}

export default CalcPage
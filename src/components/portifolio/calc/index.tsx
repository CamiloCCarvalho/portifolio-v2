import {ContainerPage, CalcBox} from './styles'

const CalcPage:React.FC = () => {

    return (
        <ContainerPage className="container-fluid">
            <CalcBox>
                <header className="flex align-center justify-between">
                    <h1>Calc.js</h1>
                </header>

                <input type="text" id="input"/>

                <div id="keys">
                    <button id="clear">C</button>
                    <button className="charKey" data-value=" ( ">(</button>
                    <button className="charKey" data-value=" ) ">)</button>
                    <button className="charKey" data-value=" / ">/</button>
                    <button className="charKey" data-value="7">7</button>
                    <button className="charKey" data-value="8">8</button>
                    <button className="charKey" data-value="9">9</button>
                    <button className="charKey" data-value=" * ">*</button>
                    <button className="charKey" data-value="4">4</button>
                    <button className="charKey" data-value="5">5</button>
                    <button className="charKey" data-value="6">6</button>
                    <button className="charKey" data-value=" - ">-</button>
                    <button className="charKey" data-value="1">1</button>
                    <button className="charKey" data-value="2">2</button>
                    <button className="charKey" data-value="3">3</button>
                    <button className="charKey" data-value=" + ">+</button>
                    <button className="charKey" data-value="0">0</button>
                    <button className="charKey" data-value=".">.</button>
                    <button className="charKey" data-value=" % ">mod</button>
                    <button id="equal">=</button>
                </div>

                <section className="flex align-center justify-between">
                    <button id="copyToClipboard">Copy</button>
                    <input type="text" id="result" disabled/>
                </section>

            </CalcBox>
        </ContainerPage>
    )
}

export default CalcPage
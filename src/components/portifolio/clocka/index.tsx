import {useState, useEffect} from 'react'
import {ClockPage, Clock, Hour, Min, Sec, Hpointer, Mpointer, Spointer} from './styles'


const ClockAnalogPage:React.FC = () => {

    let day:Date = new Date()
    let now:number[] = [(day.getHours()*30), (day.getMinutes()*6), (day.getSeconds()*6)]
    const [hourNow, setHour] = useState<Date>()

    useEffect(()=> {
        setInterval(()=> {
            setHour(day)
        })
    }, [day])

    let hr = {
        'transform':`rotateZ(${now[0] +(now[1]/12)}deg)`
    }
    let mn = {
        'transform':`rotateZ(${now[1]}deg)`
    }
    let sc = {
        'transform':`rotateZ(${now[2]}deg)`
    }


    return (

            <ClockPage className="container-fluid">
                <Clock>
                    <Hour>
                        <Hpointer id="hr" style={hr}></Hpointer>
                    </Hour>
                    <Min className="min">
                        <Mpointer id="mn" style={mn}></Mpointer>
                    </Min>
                    <Sec className="sec">
                        <Spointer id="sc" style={sc}></Spointer>
                    </Sec>
                </Clock>
            </ClockPage>
    )
}

export default ClockAnalogPage
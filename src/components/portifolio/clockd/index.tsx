import {useEffect, useState} from 'react'
import {ClockPage, ClockBox, ClockTitle, Clock, ClockNumber} from './styles'

const ClockDigitalPage:React.FC = () => {

    let day = new Date()
    let now = [day.getHours(), day.getMinutes(), day.getSeconds()]
    const [hourNow, setHour] = useState<Date>()
    useEffect(()=> {
        setInterval(()=> {
            setHour(day)
        }, 500)
    },[day])

    return (
        <ClockPage className="container-fluid">
            <ClockBox>
                <ClockTitle>Relogio Digital</ClockTitle>

                <Clock className="clock">
                    <ClockNumber>{now[0]}</ClockNumber>
                    <ClockNumber>{now[1]}</ClockNumber>
                    <ClockNumber>{now[2]}</ClockNumber>
                </Clock>
            </ClockBox>
        </ClockPage>
    )

}

export default ClockDigitalPage
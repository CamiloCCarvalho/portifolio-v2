import {useEffect, useState} from 'react'
import {ClockPage, ClockBox, ClockTitle, Clock, ClockNumber} from './styles'

const ClockDigitalPage:React.FC = () => {

    const verifyNumber = (numb:number):string => {
        const numbFormat = numb < 10 ? `0${numb.toString()}`: numb.toString()
        return numbFormat
    }
    let day:Date = new Date()
    const hour:string = verifyNumber(day.getHours())
    const minute:string= verifyNumber(day.getMinutes())
    const second:string= verifyNumber(day.getSeconds())
    
    let now = [hour, minute, second]



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
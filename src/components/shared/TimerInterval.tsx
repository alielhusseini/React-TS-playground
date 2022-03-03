import { useState, useEffect, useRef } from 'react'
import { Button } from '../common'

export function TimerInterval(): JSX.Element {

    const [toggleTimer, setToggelTimer] = useState<boolean>(true)
    const [timer, setTimer] = useState<number>(0)
    const intervalRef = useRef<number>(null!) // mutable ref

    const stopTimer = () => window.clearInterval(intervalRef.current)
    const startTimer = () => window.setInterval(() => {
        setTimer((prevState) => prevState + 1)
    }, 1000)

    const handleClick = () => {

        setToggelTimer((prevState) => !prevState)
        toggleTimer ? stopTimer() : intervalRef.current = startTimer()
    }

    useEffect(() => {
        intervalRef.current = startTimer()
        return () => { stopTimer() }
    }, [])

    return (
        <div>
            Timer - {timer} - <Button title={toggleTimer ? 'Stop Timer' : 'Start Timer'} handleClick={() => handleClick()} />
        </div>
    )
}

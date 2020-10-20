import React,{useState,useEffect,useRef} from 'react'

function HookUseRefTimer() {
    const [timer, settimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            settimer(timerx => timerx + 1)
        }, 1000);
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    return (
        <div>
            Hook - {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Click</button>
        </div>
    )
}

export default HookUseRefTimer

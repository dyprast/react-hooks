import React,{useState} from 'react' 
import useDocumentTitle from '../hooks/useDocumentTitle'

function HookUseCustom() {
    const [timer, setTimer] = useState(0)

    useDocumentTitle(timer)
    return (
        <div>
            <button onClick={()=>setTimer(timer + 1)}>Count {timer}</button>
        </div>
    )
}

export default HookUseCustom

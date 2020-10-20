import React, { useState } from 'react'
import HookUseEffectTwo from './HookUseEffectTwo'

export default function MouseHook() {
    const [display,setDisplay] = useState(true)

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toogle</button>
            {display && <HookUseEffectTwo/>}
        </div>
    )
}

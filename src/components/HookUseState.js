import React from 'react'
import { useState } from 'react'

export default function HookUseState() {
    const [count,plusCount] = useState(0)
    return (
        <div>
            <button onClick={()=>{plusCount( count + 1)}}>Clicked {count} Times</button>
        </div>
    )
}

import React, { useState, useEffect } from 'react'

export default function HookUseEffect() {

    const [count,setCount] = useState(0) 

    const [name,setName] = useState('')

    useEffect(()=>{
        console.log("Updated Effect")
        document.title = `You Clicked ${count} Times`
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(prev => prev + 1)}>Clicked {count} Times</button>
        </div>
    )
}

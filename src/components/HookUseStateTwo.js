import React, { useState } from 'react'

export default function HookUseStateTwo() {
    const incre = 0
    const [count,countX] = useState(0) 

    const plus5 = () => {
        for(let i=0;i<5;i++){
            countX(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
        <div>
            <h1>Count {count}</h1>
        </div>
        <div>
           <button onClick={()=>countX(prevCount => prevCount + 1)}>Plus</button>
           <button onClick={()=>countX(prevCount => prevCount - 1)}>Minus</button>
           <button onClick={plus5}>Plus 5</button>
           <button onClick={()=>countX(incre)}>Reset</button>
        </div>
        </div>
    )
}

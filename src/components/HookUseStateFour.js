import React, { useState } from 'react'

export default function HookUseStateFour() {
    const [items,setItems] = useState([])

    const getItem = () => {
    //    setItems([...items, {
    //     id: items.length,
    //     value: Math.floor(Math.random() * 10) +1
    //   }])
    setItems([...items,{
        id:items.length,
        value:items.length + 1
    }])
    }

    return (
        <div>
            <button onClick={getItem}>Add Value</button>
            <ul>
                {items.map( item => (<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )
}

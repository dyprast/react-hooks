import React, { useState, useEffect } from 'react'

export default function HookUseEffectThree() {
    const [count,plusX] = useState(0)

    const getTime = () =>{
       plusX(prevCo => prevCo + 1)
    }

    useEffect(()=>{
        // function doSome(){
        //     console.log(someProp)
        // }
        const interval = setInterval(getTime,1000)
        return () =>{
            clearInterval(interval)
        }
    },[])

    return (
        <div>
            {count}
        </div>
    )
}

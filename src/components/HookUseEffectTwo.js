import React, { useState, useEffect } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

export default function HookUseEffectTwo() {

    const [x,Xget] = useState(0)
    const [y,Yget] = useState(0)


    const getLogMouse = e => {
        console.log("Mouse Event")
        Xget(e.clientX)
        Yget(e.clientY)
    }

    useEffect(()=>{
        console.log('Effect Called')
        window.addEventListener("mousemove",getLogMouse)

        return () =>{
            console.log('component unmounting')
            window.removeEventListener("mousemove",getLogMouse)
        }
    },[])

    return (
        <div>
            x - {x} : y - {y}
        </div>
    )
}

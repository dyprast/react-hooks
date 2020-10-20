import React,{useContext} from 'react'
import {ExpPass} from '../App'

export default function RedContB() {
    const getNumb = useContext(ExpPass)
    return (
        <div>
           <h1> RedCont B {getNumb.numbX}</h1>
        <button onClick={()=>getNumb.dispatchX('plus')}>Plus</button>
        <button onClick={()=>getNumb.dispatchX('minus')}>Minus</button>
        <button onClick={()=>getNumb.dispatchX('reset')}>Reset</button>
        </div>
    )
}

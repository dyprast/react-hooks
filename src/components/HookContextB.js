import React,{useContext} from 'react'
import HookContextC from './HookContextC'
import {UserContext,AgeContext} from '../App'

export default function HookContextB() {


    const user = useContext(UserContext)
    const age = useContext(AgeContext)
    return (
        <div>
            {user} - {age}
        </div>
    )
}

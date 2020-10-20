import React, {useState, useCallback} from 'react'
import HookCallbackCount from './HookCallbackCount'
import HookCallbackTitle from './HookCallbackTitle'
import HookCallbackButton from './HookCallbackButton'

export default function HookCallbackParent() {
    const [age,setAge] = useState(20)
    const [salary,setSalary] = useState(5000000)

    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary + 1000000) 
    },[salary])

    return (
        <div>
            <HookCallbackTitle/>
            <HookCallbackCount text="Age" count={age}/>
            <HookCallbackButton handleClick={incrementAge}>Age</HookCallbackButton>
            <HookCallbackCount text="Salary" count={salary}/>
            <HookCallbackButton handleClick={incrementSalary}>Salary</HookCallbackButton>
        </div>
    )
}

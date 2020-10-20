import React,{useState,useMemo} from 'react'

export default function HookUseMemo() {

    const [ct1,setCt1] = useState(0)
    const [ct2,setCt2] = useState(0)

    const plusone = () => {
        setCt1(ct1 + 1)
    }

    const plustwo = () =>{
        setCt2(ct2 + 1)
    }


    const isChecked = useMemo(() => {
        let i = 0
        while (i<20000000) i++
        return ct1 % 2 === 0
    }, [ct1])

    return (
        <div>
            <button onClick={plusone}>Clicked {ct1} {isChecked ? 'True' : 'False'}</button>
            <button onClick={plustwo}>Clicked {ct2}</button>
        </div>
    )
}

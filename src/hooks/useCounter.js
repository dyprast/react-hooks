import {useState} from 'react'

function useCounter(initial = 0,value) {
   const [count, setCount] = useState(initial)
    const increment = () =>{
       setCount(countx => countx + value)
    }
    const decrement = () =>{
       setCount(countx => countx - value)
    }
    const reset = () =>{
       setCount(initial)
    }

    return [count,increment,decrement,reset]
}

export default useCounter

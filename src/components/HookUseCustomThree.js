import React from 'react'
import useInput from '../hooks/useInput'

function HookUseCustomThree() {

    const [first,firstBind,firstReset] = useInput('')
    const [last,lastBind,lastReset] = useInput('')

    const submit = e =>{
        e.preventDefault()
        alert(`Hello ${first} ${last}`)
        firstReset()
        lastReset()

    }
    return (
         <form onSubmit={submit}>
              <div>
                  <label>First Name </label>
                  <input type="text" {...firstBind}/>
              </div>
              <div>
                  <label>Last Name </label>
                  <input type="text" {...lastBind}/>
              </div>
              <div>
                  <button type="submit">Click</button>
              </div>
         </form>
    )
}

export default HookUseCustomThree

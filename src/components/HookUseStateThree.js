import React, { useState } from 'react'

export default function HookUseStateThree() {
    
    const [User,userInput] = useState({username:'',age:''})

    return (
        <form>
            <div>
                <input type="text" value={User.username} onChange={e => userInput({...User,username:e.target.value})}/>
                <input type="number" value={User.age} onChange={e => userInput({...User,age:e.target.value})}/>
            </div>
            <div>
    <h2>Your Username : {User.username}</h2>
    <h2>Your Age : {User.age}</h2>
            </div>
        </form>
    )
}

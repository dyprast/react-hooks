import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function HookDataFetch() {


    const[posts,setPosts] = useState([])
    const[id,setId] = useState(1)
    const[clickId,setClick] = useState(1)

    const handleClick = () =>{
        setClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickId}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[clickId])

    return (
        <div>

<input type="number" value={id} onChange={e=>setId(e.target.value)}></input>
<button onClick={handleClick}>Click</button>
    <div>{posts.title}</div>
            {/* <ul>
                {
                    posts.map(pos => (<li key={pos.id}>{pos.id}</li>))
                }
            </ul> */}
        </div>
    )
}

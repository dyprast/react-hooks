import React,{useEffect, useState} from 'react'
import axios from 'axios'

export default function HookFetchEffect() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false)
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=>{
            setLoading(false)
            setError('Something went wrong')
            setPost({})
        })
    },[])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

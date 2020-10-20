import React, {useReducer,useEffect} from 'react'
import axios from 'axios'

const varx = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state,action) =>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return { 
                loading : false,
                post : action.data,
                error : ''
            }
        case "FETCH_ERROR":
            return {
                loading : false,
                error: 'Something went wrong',
                post : {}
            }
        default:
            return state
    }
}



export default function HookFetchReducer() {

    const [state,dispatch] = useReducer(reducer,varx)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS', data: res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

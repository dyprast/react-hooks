import React,{useReducer} from 'react'

const numb = {
    InitialState : 0,
    AnotherState : 100
}
const reducer = (state,action) => {
    switch(action.type){
        case "plus":
            return {...state,InitialState:state.InitialState + action.value}
        case "minus":
            return {...state,InitialState:state.InitialState - action.value}
        case "plusx":
            return {...state,AnotherState:state.AnotherState + action.value}
        case "minusx":
            return {...state,AnotherState:state.AnotherState - action.value}
        case "reset":
            return numb
        default:
            return state
    }
}

export default function HookReducer() {

    const [update,CountUpdate] = useReducer(reducer,numb)
    const [updateX,CountUpdateX] = useReducer(reducer,numb) 

    return (
        <div>
        <div>
            <h1>{update.InitialState}</h1>
            <h1>{update.AnotherState}</h1>
            <h1>{updateX.InitialState}</h1>
            <h1>{updateX.AnotherState}</h1>
        </div>

        <div>
            <button onClick={()=>CountUpdate({type:'plus',value:1})}>Plus</button>
            <button onClick={()=>CountUpdate({type:'minus',value:1})}>Minus</button>
            <button onClick={()=>CountUpdate({type:'plus',value:5})}>Plus 5</button>
            <button onClick={()=>CountUpdate({type:'minus',value:5})}>Minus 5</button>
            <button onClick={()=>CountUpdate({type:'plusx',value:1})}>Plus</button>
            <button onClick={()=>CountUpdate({type:'minusx',value:1})}>Minus</button>
            <button onClick={()=>CountUpdate({type:'plusx',value:5})}>Plus 5</button>
            <button onClick={()=>CountUpdate({type:'minusx',value:5})}>Minus 5</button>
            <button onClick={()=>CountUpdate({type:'reset'})}>Reset</button>
        </div>

        <div>
            <button onClick={()=>CountUpdateX({type:'plus',value:1})}>Plus</button>
            <button onClick={()=>CountUpdateX({type:'minus',value:1})}>Minus</button>
            <button onClick={()=>CountUpdateX({type:'plus',value:5})}>Plus 5</button>
            <button onClick={()=>CountUpdateX({type:'minus',value:5})}>Minus 5</button>
            <button onClick={()=>CountUpdateX({type:'plusx',value:1})}>Plus</button>
            <button onClick={()=>CountUpdateX({type:'minusx',value:1})}>Minus</button>
            <button onClick={()=>CountUpdateX({type:'plusx',value:5})}>Plus 5</button>
            <button onClick={()=>CountUpdateX({type:'minusx',value:5})}>Minus 5</button>
            <button onClick={()=>CountUpdateX({type:'reset'})}>Reset</button>
        </div>


        </div>
    )
}

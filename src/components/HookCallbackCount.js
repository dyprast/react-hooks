import React from 'react'

function HookCallbackCount({text,count}) {
    console.log(`redering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(HookCallbackCount)
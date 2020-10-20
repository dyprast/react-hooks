import React from 'react'

function HookCallbackButton({handleClick, children}) {
    console.log('rendering button ', children)
    return (
    <button onClick={handleClick}>{children}</button>
    )
}

export default React.memo(HookCallbackButton)
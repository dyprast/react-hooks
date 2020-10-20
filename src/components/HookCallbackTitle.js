import React from 'react'

function HookCallbackTitle() {
    console.log('Rendering title')
    return (
        <div>
            Callback
        </div>
    )
}
export default React.memo(HookCallbackTitle)
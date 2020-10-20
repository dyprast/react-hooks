import React from 'react'
import {UserContext,AgeContext} from '../App'

export default function HookContextC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <AgeContext.Consumer>
                                    {
                                      age => {
                                      return <div>My Name is {user}, I'm {age} years old</div>
                                      }
                                    }
                            </AgeContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

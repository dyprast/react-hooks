import React, { Component } from 'react'

export class ClassUseEffectTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }

    getLogMouse = e =>{
        this.setState({x:e.clientX,y:e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.getLogMouse)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.getLogMouse)
    }
    
    render() {
        return (
            <div>
                x - {this.state.x} : y - {this.state.y}
            </div>
        )
    }
}

export default ClassUseEffectTwo

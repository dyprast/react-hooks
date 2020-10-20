import React, { Component } from 'react'

export class ClassUseEffectThree extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    componentDidMount(){
        this.interval = setInterval(this.plus,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    plus = () =>{
      this.setState({
          count: this.state.count + 1
      })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default ClassUseEffectThree

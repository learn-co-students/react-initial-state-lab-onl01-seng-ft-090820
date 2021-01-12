import React, { Component } from 'react' ;


class Bomb extends Component{
    
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    bombCounter = () => {
        if (this.state.secondsLeft === 0) { 
            return <h1>Boom!</h1>
        } else {
            return <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>    
        } 
    }
    render(){
        console.log()
        return (
            <div>
            {this.bombCounter()}
            </div>
        )
    }
}

export default Bomb
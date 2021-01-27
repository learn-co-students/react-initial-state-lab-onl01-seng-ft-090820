import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {secondsLeft: props.initialCount}
    }
    
    render() {
        const showBoom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>
                {showBoom}
            </div>
        )
    }
}

export default Bomb;
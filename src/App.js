import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class App extends Component{
    constructor(){
        super();
        this.state={
            isFlipped: false
        }
    }
    handleClick=()=>{
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    state = {
       count: 0
    };

    render(){
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div style={{
                    background: "aqua",
                    fontSize: "50px",
                    color: "black",
                }}>
                This is the front.<br></br>
                <button onClick={this.handleClick}>Click</button>
                </div>
        
                <div style={{
                    background: "black",
                    fontSize: "50px",
                    color: "aqua",
                }}>
                This is the back.<br></br>
                <button onClick={this.handleClick}>Click</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default App;
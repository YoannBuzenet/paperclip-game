import React, { Component } from 'react';

class MainButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
    <button onClick={this.props.increase} className="main-button">
        Create <span className="main-button-number">{this.props.productivity}</span> paperclips
    </button>);
    }
}

export default MainButton
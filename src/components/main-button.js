import React, { Component } from 'react';

class MainButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
    <button onClick={this.props.increase}>
        {this.props.productivity > 2
        ? ('Create ' + this.props.productivity + ' paperclips')
        : 
        (this.props.firstMachine
        ? 'Create a paperclip  (Machine Made)' 
        : 'Create a paperclip  (Handmade)')
        }
    </button>);
    }
}

export default MainButton
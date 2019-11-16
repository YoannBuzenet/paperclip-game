import React, { Component } from 'react';

class MainButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.increase}>Create a paperclip</button>;
    }
}

export default MainButton
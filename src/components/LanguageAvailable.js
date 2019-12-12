import React, { Component } from 'react';

class LanguageAvailable extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
    <p>
        <img src={this.props.img}></img>
    </p>
    );
    }
}

export default LanguageAvailable
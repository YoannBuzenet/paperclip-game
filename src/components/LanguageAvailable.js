import React, { Component } from 'react';

class LanguageAvailable extends Component{
    constructor(props){
        super(props)
        this.onClickProp=this.onClickProp.bind(this);
    }

    onClickProp(){
        this.props.changeLangage(this.props.lang)
    }

    render(){
    return (
    <p onClick={this.onClickProp}>
        <img src={this.props.img}></img>
    </p>
    );
    }
}

export default LanguageAvailable
import React, { Component } from 'react';

class MainButton extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var mainButton = document.getElementById('main-button-id');

        mainButton.addEventListener('click', ()=>{
            this.props.createAndRemoveGraphicEffect(this.props.productivity, 'ul-main-number', 'li', 'graphInput');
        });
    }
    
    componentWillUnmount(){
        var mainButton = document.getElementById('main-button-id');

        mainButton.removeEventListener('click', ()=>{
            this.props.createAndRemoveGraphicEffect(this.props.productivity, 'ul-main-number', 'li', 'graphInput');
        })
    }


    render(){

    return (
    <button onClick={this.props.increase} className="main-button" id="main-button-id">
        Create <ul className="main-button-number" id="ul-main-number">
            <li>{this.props.productivity}</li>
            </ul> paperclips
    </button>);
    }
}

export default MainButton
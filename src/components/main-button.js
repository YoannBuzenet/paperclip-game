import React, { Component } from 'react';

class MainButton extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var mainButton = document.getElementById('main-button-id');

        mainButton.addEventListener('click', ()=>{
            this.props.createAndRemoveGraphicEffect('+'+this.props.productivity, 'ul-main-number', 'li', 'graphInput');
        });
    }
    
    componentWillUnmount(){
        var mainButton = document.getElementById('main-button-id');

        mainButton.removeEventListener('click', ()=>{
            this.props.createAndRemoveGraphicEffect('+'+this.props.productivity, 'ul-main-number', 'li', 'graphInput');
        })
    }


    render(){

    return (
    <button onClick={this.props.increase} className="main-button" id="main-button-id">
        <p className="main-button-firstline">{this.props.text.mainButtons.mainButtonCreate[this.props.lang]}</p> <ul className="main-button-number" id="ul-main-number">
            <li>{this.props.productivity}</li>
            </ul><p className="main-button-secondline">{this.props.firstMachine ? this.props.text.mainButtons.mainButtonPaperclipMultiple[this.props.lang] : this.props.text.mainButtons.mainButtonPaperclipSingle[this.props.lang]}</p>
    </button>);
    }
}

export default MainButton
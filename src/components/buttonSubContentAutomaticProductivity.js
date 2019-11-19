import React, { Component } from 'react';

class ButtonSubContentAutomaticProductivity extends Component{
    constructor(props){
        super(props)
        this.state = {
            hover : false
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover(){
        this.setState(state => { return ({
            hover: !state.hover
            });
        });
    }

    render(){
    var styleButton = {display : 'none'};
    if(this.props.onHover){
        styleButton = {
            display:'block',
            width:'80px',
            zIndex :4,
            position : 'absolute',
            backgroundColor: 'white',
            border : '1px solid black',
            top: '15%',
            left: '220%',
            transform: 'translate(-50%, -50%)'}
    }

    return (
        <div 
        className={this.props.classNameChild}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        style={styleButton}>
    {this.props.cost}€<br/>+ {this.props.automaticProductivityPerMachine * this.props.nbMachinesCreated}<br />{this.props.contentChild}
        </div>
    )}
}

export default ButtonSubContentAutomaticProductivity
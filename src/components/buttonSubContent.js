import React, { Component } from 'react';

class ButtonSubContent extends Component{
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
            zIndex : 4,
            width:'100px',
            position : 'absolute',
            backgroundColor: 'white',
            border : '1px solid black',
            top: '15%',
            left: '250%',
            transform: 'translate(-50%, -50%)'}
    }

    return (
        <div 
        className={this.props.classNameChild+" hover-button"} 
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        style={styleButton}><span className="hover-name">{this.props.name}</span><br />
    {this.props.cost}€<br/>{this.props.contentChild}
        </div>
    )}
}

export default ButtonSubContent
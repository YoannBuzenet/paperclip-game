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
            position : 'absolute',
            backgroundColor: 'white',
            border : '1px solid black',
            top:'-30px',
            right : '-160px',
            left: '160px'};
    }

    return (
        <div 
        className={this.props.classNameChild}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        style={styleButton}>
                {this.props.contentChild}
        </div>
    )}
}

export default ButtonSubContent
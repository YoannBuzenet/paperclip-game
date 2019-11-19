import React, { Component } from 'react';
import ButtonSubContent from './buttonSubContent';

class Button extends Component{
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
    var styleButton = {
        position :'relative',
        width:'50px',
        height:'50px'
        };

    return (
        <button
        style={styleButton}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        onClick={this.props.onClickProp} 
        className={this.props.classNameButton}>
            {this.props.content} ({this.props.cost}€)
            <ButtonSubContent classNameChild={this.props.classNameChild} contentChild={this.props.contentChild} onHover={this.state.hover}/>
        </button>);
    }
}

export default Button
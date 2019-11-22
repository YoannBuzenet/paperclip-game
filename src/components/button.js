import React, { Component } from 'react';
import ButtonSubContent from './buttonSubContent';

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            hover : false
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if(this.props.containsAnimation){
            var mainButton = document.getElementById(this.props.id);

            mainButton.addEventListener('click', ()=>{
                if(this.props.money >= this.props.cost){
                    this.props.createAndRemoveGraphicEffect(this.props.textAnimation, this.props.animationIdTarget, this.props.animationTypeOfElementCreated, this.props.animationCSSClass);
                }
            });
        }
    }
    
    componentWillUnmount(){
        if(this.props.containsAnimation){
            var mainButton = document.getElementById(this.props.id);

            mainButton.removeEventListener('click', ()=>{
                if(this.props.money >= this.props.cost){
                    this.props.createAndRemoveGraphicEffect(this.props.textAnimation, this.props.animationIdTarget, this.props.animationTypeOfElementCreated, this.props.animationCSSClass);
                }
            })
        }    
    }

    toggleHover(){
        this.setState(state => { return ({
            hover: !state.hover
            });
        });
    }

    handleClick(){
        this.props.onClickProp(this.props.cost, this.props.machineProductivity, this.props.isManual, this.props.machineType, this.props.machineQuantity);
    }

    render(){
    var styleButton = {
        backgroundImage: `url(`+this.props.picture+`)`,
        }; 

    return (
        <button
        style={styleButton}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        onClick={this.handleClick}
        id={this.props.id ? this.props.id : null}
        className={this.props.classNameButton}>
            <ButtonSubContent classNameChild={this.props.classNameChild} contentChild={this.props.contentChild} onHover={this.state.hover} cost={this.props.cost} name={this.props.name}/>
        </button>);
    }
}

export default Button
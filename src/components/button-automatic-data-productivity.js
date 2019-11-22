import React, { Component } from 'react';
import ButtonSubContentAutomaticProductivity from './buttonSubContentAutomaticProductivity';

class ButtonAutomaticData extends Component{
    constructor(props){
        super(props)
        this.state = {
            hover : false
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        className={this.props.classNameButton}>
            <ButtonSubContentAutomaticProductivity classNameChild={this.props.classNameChild} contentChild={this.props.contentChild} onHover={this.state.hover} cost={this.props.cost} automaticProductivityPerMachine={this.props.automaticProductivityPerMachine} machineQuantity={this.props.machineQuantity} name={this.props.name}/>
        </button>);
    }
}

export default ButtonAutomaticData
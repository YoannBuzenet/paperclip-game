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
        console.log(this.props.cost, this.props.machineProductivity, this.props.isManual, this.props.machineType, this.props.machineQuantity, this.props.currency)
        this.props.onClickProp(this.props.cost, this.props.machineProductivity, this.props.isManual, this.props.machineType, this.props.machineQuantity, this.props.currency);
    }

    render(){
    var styleButton = {
        backgroundImage: `url(`+this.props.picture+`)`,
        }; 

    var className = this.props.classNameButton
    if(this.props.money < this.props.cost){
        className += " disabled";
    }     

    return (
        <button
        style={styleButton}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        onClick={this.handleClick} 
        className={className}>
            <ButtonSubContentAutomaticProductivity classNameChild={this.props.classNameChild} contentChild={this.props.contentChild} onHover={this.state.hover} cost={this.props.cost} automaticProductivityPerMachine={this.props.automaticProductivityPerMachine} machineQuantity={this.props.machineQuantity} name={this.props.name} machineProductivity={this.props.machineProductivity} money={this.props.money} numberOfSmallAutomaticMachines={this.props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={this.props.maximumSmallAutomaticMachine} currency={this.props.currency}/>
        </button>);
    }
}

export default ButtonAutomaticData
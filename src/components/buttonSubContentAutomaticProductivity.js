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
            width:'100px',
            zIndex :4,
            position : 'absolute',
            backgroundColor: 'white',
            border : '1px solid black',
            top: '15%',
            left: '250%',
            transform: 'translate(-50%, -50%)'}
    }

    if(this.props.money < this.props.cost){
        var contentCantBuy = "You can't afford this for now.";
    }
    else if(this.props.numberOfSmallAutomaticMachines >= this.props.maximumSmallAutomaticMachine){
        var contentCantBuy = "Maximum Machine reached.";
    }

    var currency;
    if(this.props.currency===undefined){
        currency ="€";
    }
    else if(this.props.currency == 'computational'){
        currency =" Memory";
    }
    else if(this.props.currency == 'paperclips'){
        currency =" Paperclips";
    }

    return (
        <div 
        className={this.props.classNameChild}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        style={styleButton}><span className="hover-name">{this.props.name}</span><br />
    {this.props.cost >0 ? this.props.cost + currency : <strong>Free</strong>}<br/>+ {this.props.machineProductivity * this.props.automaticProductivityPerMachine * this.props.machineQuantity}<br />{this.props.contentChild}
    {(this.props.money < this.props.cost || this.props.numberOfSmallAutomaticMachines >= this.props.maximumSmallAutomaticMachine) ? <p className="cantAfford">{contentCantBuy}</p> : null}
        </div>
    )}
}

export default ButtonSubContentAutomaticProductivity
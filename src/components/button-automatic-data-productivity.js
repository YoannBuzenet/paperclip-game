import React, { Component } from 'react';
import ButtonSubContentAutomaticProductivity from './buttonSubContentAutomaticProductivity';

class ButtonAutomaticData extends Component{
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
        backgroundImage: `url(`+this.props.picture+`)`,
        }; 

    return (
        <button
        style={styleButton}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        onClick={this.props.onClickProp} 
        className={this.props.classNameButton}>
            <ButtonSubContentAutomaticProductivity classNameChild={this.props.classNameChild} contentChild={this.props.contentChild} onHover={this.state.hover} cost={this.props.cost} automaticProductivityPerMachine={this.props.automaticProductivityPerMachine} nbMachinesCreated={this.props.nbMachinesCreated}/>
        </button>);
    }
}

export default ButtonAutomaticData
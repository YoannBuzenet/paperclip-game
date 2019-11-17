import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
    <button onClick={this.props.sell} className="sell-button">
        Sell <span className="main-button-number">{this.props.unitsSold}</span> paperclips ({this.props.unitsSold * .25}€)
    </button>);
    }
}

export default SellButton
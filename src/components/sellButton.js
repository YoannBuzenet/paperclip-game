import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (
    <button onClick={this.props.sell} className="sell-button">
        Sell {this.props.unitsSold > 1 ? this.props.unitsSold : 'a'} {this.props.unitsSold > 1 ? 'paperclips' : 'paperclip'} ({this.props.unitsSold * .25}€)
    </button>);
    }
}

export default SellButton
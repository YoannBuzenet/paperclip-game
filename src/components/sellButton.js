import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var numberOfPaperclipToSell = this.props.unitsSold;
        if(this.props.unitsSold.length === 6){
            numberOfPaperclipToSell = "100K";
        }
        else if(this.props.unitsSold.length === 7){
            numberOfPaperclipToSell = "1M";
        }
    return (
    <button onClick={this.props.sell} className="sell-button">
        Sell <span className="main-button-number">{numberOfPaperclipToSell}</span> paperclips ({this.props.unitsSold * .25}€)
    </button>);
    }
}

export default SellButton
import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var sellButton = document.getElementById('sell-button-id');

        sellButton.addEventListener('click', ()=>{
            this.props.createAndRemoveGraphicEffect('+'+this.props.unitsSold * .25+'€', 'sell-area', 'li', 'graphInput');
        });
    }
    
    componentWillUnmount(){
        var sellButton = document.getElementById('sell-button-id');

        sellButton.removeEventListener('click', ()=>{
            this.props.createAndRemoveGraphicEffect('+'+this.props.unitsSold * .25+'€', 'sell-area', 'li', 'graphInput');
        })
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
    <button onClick={this.props.sell} className="main-button" id="sell-button-id">
        Sell <ul className="main-button-number" id="sell-area"><li>{numberOfPaperclipToSell}</li></ul> paperclips ({this.props.unitsSold * .25}€)
    </button>);
    }
}

export default SellButton
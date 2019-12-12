import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var sellButton = document.getElementById('sell-button-id');
        
        sellButton.addEventListener('click', ()=>{
            if(this.props.count>=this.props.unitsSold){
                this.props.createAndRemoveGraphicEffect('+'+this.props.unitsSold * .25+'€', 'sell-area', 'li', 'graphInput');
            }
            else{
                this.props.createAndRemoveGraphicEffect('No Stock !', 'sell-area', 'li', 'redMessage');
            }    
        });
    }
    
    componentWillUnmount(){
        var sellButton = document.getElementById('sell-button-id');

        sellButton.removeEventListener('click', ()=>{
              this.props.createAndRemoveGraphicEffect('+'+this.props.unitsSold * .25+'€', 'sell-area', 'li', 'graphInput');
              this.props.createAndRemoveGraphicEffect('No Stock !', 'sell-area', 'li', 'graphInput');
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
        <p className="main-button-firstline">{this.props.text.mainButtons.sellButtonSell[this.props.lang]}</p><ul className="main-button-number" id="sell-area"><li>{numberOfPaperclipToSell}</li></ul><p className="main-button-secondline">{this.props.unitsSold>2 ? this.props.text.mainButtons.mainButtonPaperclipMultiple[this.props.lang] : this.props.text.mainButtons.mainButtonPaperclipSingle[this.props.lang]}</p>
    </button>);
    }
}

export default SellButton
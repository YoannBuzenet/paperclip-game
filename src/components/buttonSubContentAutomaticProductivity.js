import React, { Component } from 'react';

class ButtonSubContentAutomaticProductivity extends Component{
    constructor(props){
        super(props)
        this.state = {
            hover : false,
            gameTitles: {
                unitDisplayMillions : {
                    fr:" million",
                    en:" million"
                  },
                  unitDisplayBillions : {
                    fr:" milliard",
                    en:" billion"
                  },
                  unitDisplayQuadrillion : {
                    fr:" quadrillion",
                    en:" quadrillion"
                  },
                  unitDisplayQuintillion : {
                    fr:" quintillion",
                    en:" quintillion"
                  },
                  unitDisplaySextillion : {
                    fr:" sextillion",
                    en:" sextillion"
                  },
                  unitDisplaySeptillion : {
                    fr:" septillion",
                    en:" septillion"
                  },
                  unitDisplayZillion : {
                    fr:" zillion",
                    en:" zillion"
                  }
        }
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        this.formateNumber = this.formateNumber.bind(this);
    }

    toggleHover(){
        this.setState(state => { return ({
            hover: !state.hover
            });
        });
    }

    checkNumber(number){
        if(number <= Math.pow(10,6)){
            number = new Intl.NumberFormat().format(number);
        }
        else if(number >= Math.pow(10,6) && number < Math.pow(10,9)){
            number = this.formateNumber(number, Math.pow(10,6), this.state.gameTitles.unitDisplayMillions[this.props.lang]);
        }
        else if(number >= Math.pow(10,9) && number < Math.pow(10,12)){
            number = this.formateNumber(number, Math.pow(10,9), this.state.gameTitles.unitDisplayBillions[this.props.lang]);
        }
        else if(number >= Math.pow(10,12) && number < Math.pow(10,15)){
            number = this.formateNumber(number, Math.pow(10,12), this.state.gameTitles.unitDisplayQuadrillion[this.props.lang]);
        }
        else if(number >= Math.pow(10,15) && number < Math.pow(10,18)){
            number = this.formateNumber(number, Math.pow(10,15), this.state.gameTitles.unitDisplayQuintillion[this.props.lang]);
        }
        else if(number >= Math.pow(10,18) && number < Math.pow(10,21)){
            number = this.formateNumber(number, Math.pow(10,18), this.state.gameTitles.unitDisplaySextillion[this.props.lang]);
        }
        else if(number >= Math.pow(10,21) && number < Math.pow(10,24)){
            number = this.formateNumber(number, Math.pow(10,21), this.state.gameTitles.unitDisplaySeptillion[this.props.lang]);
        }
        else if(number >= Math.pow(10,24)){
            number = this.formateNumber(number, Math.pow(10,24), this.state.gameTitles.unitDisplayZillion[this.props.lang]);
        }
        return number;
    }
    
    formateNumber(number, divider, unit){
        number = number/divider;
        number = number.toString();
        number += '.0'
        let subnumbers = number.split('.')
        if(subnumbers[0] === '1' && subnumbers[1][0] != 0){
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit
        }
        else if(subnumbers[0] === '1' && subnumbers[1][0] == 0){
            number = subnumbers[0] + unit
        }
        else if(subnumbers[0] > 1 && subnumbers[0] < 10 && subnumbers[1][0] == 0){
            number = subnumbers[0] + unit + 's'
        }
        else{
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit +'s'
        }
        return number
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

    //Displaying the right currency (euros or computationnal power)
    var currency;
    if(this.props.currency===undefined){
        currency =" €";
    }
    else if(this.props.currency == 'computational'){
        if(this.props.lang == 'en'){
            currency =" Memory";
        }
        else if(this.props.lang == 'fr'){
            currency = " Mémoire"
        }
        
    }
    else if(this.props.currency == 'paperclips'){
        if(this.props.lang == 'en'){
            currency =" Paperclips";
        }
        else if(this.props.lang == 'fr'){
            currency =" Trombones";
        }
    }
    var freePrice = this.props.lang == "en" ? "Free" : "Gratuit";

    return (
        <div 
        className={this.props.classNameChild}
        onMouseEnter={this.toggleHover} 
        onMouseLeave={this.toggleHover}
        style={styleButton}><span className="hover-name">{this.props.name[this.props.lang]}</span><br />
    {this.props.cost >0 ? this.checkNumber(this.props.cost) + currency : <strong>{freePrice}</strong>}<br/>+ {this.props.machineProductivity * this.props.automaticProductivityPerMachine * this.props.machineQuantity}<br />{this.props.contentChild[this.props.lang]}
    {(this.props.money < this.props.cost || this.props.numberOfSmallAutomaticMachines >= this.props.maximumSmallAutomaticMachine) ? <p className="cantAfford">{contentCantBuy}</p> : null}
        </div>
    )}
}

export default ButtonSubContentAutomaticProductivity
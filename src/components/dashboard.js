import React, { Component } from 'react';
import StockOfPaperclips from './StockOfPaperclips';
import DisplayMoney from './displaymoney';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.formateNumber = this.formateNumber.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
    }

    checkNumber(number){
        if(number <= Math.pow(10,6)){
            number = new Intl.NumberFormat().format(number);
        }
        else if(number >= Math.pow(10,6) && number < Math.pow(10,9)){
            number = this.formateNumber(number, Math.pow(10,6), ' million');
        }
        else if(number >= Math.pow(10,9) && number < Math.pow(10,12)){
            number = this.formateNumber(number, Math.pow(10,9), ' billion');
        }
        else if(number >= Math.pow(10,12) && number < Math.pow(10,15)){
            number = this.formateNumber(number, Math.pow(10,12), ' quadrillion');
        }
        else if(number >= Math.pow(10,15) && number < Math.pow(10,18)){
            number = this.formateNumber(number, Math.pow(10,15), ' quintillion');
        }
        else if(number >= Math.pow(10,18) && number < Math.pow(1021)){
            number = this.formateNumber(number, Math.pow(10,18), ' sextillion');
        }
        else if(number >= Math.pow(10,21) && number < Math.pow(10,24)){
            number = this.formateNumber(number, Math.pow(10,21), ' septillion');
        }
        else if(number >= Math.pow(10,24)){
            number = this.formateNumber(number, Math.pow(10,24), ' zillion');
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
        else{
            number = subnumbers[0] + '.' + subnumbers[1][0] + unit +'s'
        }
        return number
    }


    render(){

        let automaticProduction = this.checkNumber(this.props.automaticProduction * this.props.productivyPerAutomaticMachine);
        let automaticSales = this.checkNumber(this.props.salesman * this.props.salesmanEfficiency + this.props.websiteSellingPower + this.props.softwareBonusSales);

        return(<div>
        
        <h2>DASHBOARD</h2>
            <div className="dashboard-datas">
                <StockOfPaperclips stockOfPaperclips={this.props.stockOfPaperclips} checkNumber={this.checkNumber} />
                {this.props.soldAtLeastOnePaperclip > 0 ? <DisplayMoney money = {this.props.money} checkNumber={this.checkNumber} /> : null}
                {this.props.boughtAnAutomaticMachine && <p>Production(/s): <strong>{automaticProduction}</strong></p>}
                 {this.props.hasHiredaSalesman && <p>Sales(/s): <strong>{automaticSales}</strong></p>}
            </div>
        </div>
        );
    }
}

export default Dashboard
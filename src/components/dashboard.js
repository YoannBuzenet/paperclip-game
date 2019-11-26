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
        if(number <= 1000000){
            number = Math.round(number);
            number = new Intl.NumberFormat().format(number);
            number = number.toString();
        }
        else if(number >= 1000000 && number < 1000000000){
            number = this.formateNumber(number, 1000000, ' million');
        }
        else if(number >= 1000000000 && number < 1000000000000){
            number = this.formateNumber(number, 1000000000, ' billion');
        }
        else if(number >= 1000000000000 && number < 1000000000000000){
            number = this.formateNumber(number, 1000000000000, ' quadrillion');
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
        return(<div>
        
        <h2>DASHBOARD</h2>
            <div className="dashboard-datas">
                <StockOfPaperclips stockOfPaperclips={this.props.stockOfPaperclips} checkNumber={this.checkNumber} />
                {this.props.soldAtLeastOnePaperclip > 0 ? <DisplayMoney money = {this.props.money} checkNumber={this.checkNumber} /> : null}
                {this.props.boughtAnAutomaticMachine && <p>Production(/s): <strong>{this.props.automaticProduction * this.props.productivyPerAutomaticMachine}</strong></p>}
                 {this.props.hasHiredaSalesman && <p>Sales(/s): <strong>{this.props.salesman * this.props.salesmanEfficiency}</strong></p>}
            </div>
        </div>
        );
    }
}

export default Dashboard
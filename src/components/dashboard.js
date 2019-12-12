import React, { Component } from 'react';
import StockOfPaperclips from './StockOfPaperclips';
import DisplayMoney from './displaymoney';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }


    render(){
        let automaticProduction = this.props.checkNumber(this.props.automaticProduction * this.props.productivyPerAutomaticMachine);
        let automaticSales = this.props.checkNumber(this.props.salesman * this.props.salesmanEfficiency + this.props.websiteSellingPower + this.props.softwareBonusSales + this.props.numberOfdrones * this.props.droneSalesEfficiency + this.props.WeakAIbonusSales);

        return(<div>
        
    <h2>{this.props.text.gameTitles.dashboard[this.props.lang]}</h2>
            <div className="dashboard-datas">
                <StockOfPaperclips stockOfPaperclips={this.props.stockOfPaperclips} checkNumber={this.props.checkNumber} />
                <DisplayMoney money = {this.props.money} checkNumber={this.props.checkNumber} /> 
                {this.props.boughtAnAutomaticMachine && <p className="data-title temporary-class-to-adjust-display" id="paragraphToUpdate">Production <span className="data">{automaticProduction}</span></p>}
                 {this.props.hasHiredaSalesman && <p className="data-title">{this.props.text.gameTitles.sales[this.props.lang]}<span className="data">{automaticSales}</span></p>}
            </div>
        </div>
        );
    }
}

export default Dashboard
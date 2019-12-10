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
        
        <h2>DASHBOARD</h2>
            <div className="dashboard-datas">
                <StockOfPaperclips stockOfPaperclips={this.props.stockOfPaperclips} checkNumber={this.props.checkNumber} />
                {this.props.soldAtLeastOnePaperclip > 0 ? <DisplayMoney money = {this.props.money} checkNumber={this.props.checkNumber} /> : null}
                {this.props.boughtAnAutomaticMachine && <p>Production(/s): <strong>{automaticProduction}</strong></p>}
                 {this.props.hasHiredaSalesman && <p>Sales(/s): <strong>{automaticSales}</strong></p>}
            </div>
        </div>
        );
    }
}

export default Dashboard
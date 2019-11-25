import React, { Component } from 'react';
import StockOfPaperclips from './StockOfPaperclips';
import DisplayMoney from './displaymoney';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<div>
        
        <h2>DASHBOARD</h2>
            <div className="dashboard-datas">
                <StockOfPaperclips stockOfPaperclips={this.props.stockOfPaperclips}/>
                {this.props.soldAtLeastOnePaperclip > 0 ? <DisplayMoney money = {this.props.money} /> : null}
                {this.props.boughtAnAutomaticMachine && <p>Production(/s): <strong>{this.props.automaticProduction * this.props.productivyPerAutomaticMachine}</strong></p>}
                 {this.props.hasHiredaSalesman && <p>Sales(/s): <strong>{this.props.salesman * this.props.salesmanEfficiency}</strong></p>}
            </div>
        </div>
        );
    }
}

export default Dashboard
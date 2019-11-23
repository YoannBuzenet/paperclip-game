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
                {this.props.boughtAnAutomaticMachine && <p>Paperclips produced per second: <strong>{this.props.automaticProduction * this.props.productivyPerAutomaticMachine}</strong></p>}
                 {this.props.hasHiredaSalesman && <p>Paperclips solds every second : <strong>{this.props.salesman * 10}</strong></p>}
            </div>
        </div>
        );
    }
}

export default Dashboard
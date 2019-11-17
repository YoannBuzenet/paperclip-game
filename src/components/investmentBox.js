import React, { Component } from 'react';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="investment-box">
        <h2>INVESTMENT</h2>
        <h3>MACHINES</h3>
        <button onClick={this.props.buyASmallMachine}>Buy a small machine (5€)</button>
        {this.props.rdState > 0 
    ? <div><button onClick={this.props.buyASmallAutomaticMachine}>Buy a small automatic machine ({this.props.smallAutomaticMachineCost}€)</button></div> 
    : null}

    {this.props.numberOfSmallMachines > 0 
    ? <div><h3>MARKETING</h3><button onClick={this.props.investInMarketing}>Invest in Marketing ({this.props.marketingCost}€)</button></div> 
    : null}

    {this.props.marketingCost > 5 
    ? <div><h3>Reaserch & Development</h3><button onClick={this.props.investRD}>Invest in R & D ({this.props.rdCost}€)</button></div> 
    : null}
        </div>
        );
    }
}

export default InvestmentBox
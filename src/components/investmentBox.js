import React, { Component } from 'react';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="investment-box">
        <h2>INVESTMENT</h2>
        <button onClick={this.props.buyASmallMachine}>Buy a small machine (5€)</button>
        </div>);
    }
}

export default InvestmentBox
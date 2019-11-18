import React, { Component } from 'react';
import Button from './button';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="investment-box">
        <h2>INVESTMENT</h2>
        <h3>MACHINES</h3>
        <div><button onClick={this.props.buyASmallMachine} style={{display:'inline'}} className="small-machines-button">Buy a small machine (5€)<div className="info-small-machines-button">Increase your click productivity with one more small machine ! (5 more paperclips per clicks)</div></button>

        {this.props.rdState > 3 ? 
        <button onClick={this.props.buyFiveSmallMachines} style={{display:'inline', marginLeft : 5}}>x5</button>
        : null}</div>

        {this.props.rdState > 2 
    ? <div><button onClick={this.props.buyASmallAutomaticMachine} style={{display:'inline'}} className="automatic-machines-button">Buy a small automatic machine ({this.props.smallAutomaticMachineCost}€)<div className="info-automatic-machines-button">Make it work for you. Each machine produce {this.props.productivyPerAutomaticMachine} paperclip per second.</div></button>
        {this.props.rdState > 3 ? 
        <button onClick={this.props.buyFiveAutomaticMachines} style={{display:'inline', marginLeft : 5}}>x5</button>
    : null}
    </div> 
    : null}

    {this.props.numberOfSmallMachines > 0 
    ? <div><h3>MARKETING</h3><Button onClickProp={this.props.investInMarketing} classNameButton="invest-marketing-button" content="Invest in Marketing" cost={this.props.marketingCost} classNameChild="info-invest-marketing-button" contentChild="Increase your sales ! (10 times the revenue !)" /></div>
    : null}

    {this.props.rdState > 2 ? 
        <div><h3 className="sales-title">SALES</h3><button onClick={this.props.hireASalesman} style={{display:'inline'}} className="salesman-button">Hire a Salesman ({this.props.salesmanCost}€)<div className="info-salesman-button">Increase your sales : 10 units sold per second per salesman.</div></button>
    {this.props.rdState > 3 ? 
        <button onClick={this.props.buyFiveSales} style={{display:'inline', marginLeft : 5}}>x5</button>
    : null}</div>
    : null}

    {this.props.marketingCost > 5 
    ? <div><h3>Reaserch & Development</h3><button onClick={this.props.investRD} className="rd-button">Invest in R & D ({this.props.rdCost}€)<div className="info-invest-rd-button">Unlock new possibilities. To the daring the future belongs !</div></button>
    {this.props.rdState > 3 ?
        <button onClick={this.props.improveAutomaticMachines} className="rd-improve-button">Improve Automatic Machines ({this.props.automaticProductionCost}€)<div className="info-invest-rd-improve-button">Increase the productivity of all your automatic machines by x1.5</div></button>
        :null}
    </div> 
    : null}

{this.props.rdState > 4
    ? <div><h3>EXPANSION</h3><button onClick={this.props.investRD} className="factory-button">Buy a factory ({this.props.rdCost}€)<div className="info-buy-factory-button">Let's get serious.</div></button></div>
    : null}
        </div>
        );
    }
}

export default InvestmentBox
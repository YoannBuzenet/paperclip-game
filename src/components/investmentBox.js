import React, { Component } from 'react';
import Button from './button';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="investment-box">
        <h2>INVESTMENT</h2>

        <div>
        <h3>MACHINES</h3>
            <div><Button onClickProp={this.props.buyASmallMachine} picture="./pictures/small-machine.png" classNameButton="small-machines-button menu-button" cost={5} classNameChild="info-small-machines-button" contentChild="Make some more (+ 5 paperclips per click)" />
        {this.props.rdState > 3 ? 
        <button onClick={this.props.buyFiveSmallMachines} style={{display:'inline', marginLeft : 5}}>x5</button>
        : null}</div></div>

        {this.props.rdState > 2 
    ? <div>
        <div>
            <Button onClickProp={this.props.buyASmallAutomaticMachine} picture="./pictures/automatic-machine.png" classNameButton="automatic-machines-button menu-button" cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild="Make some more (+ 5 paperclips per click)" />
        {this.props.rdState > 3 ? 
        <button onClick={this.props.buyFiveAutomaticMachines} style={{display:'inline', marginLeft : 5}}>x5</button>
    : null}
    </div> 
    </div>
    : null}

    {this.props.numberOfSmallMachines > 0 
    ? <div><h3>MARKETING</h3><div><Button onClickProp={this.props.investInMarketing} picture="./pictures/invest-in-marketing.png" classNameButton="invest-marketing-button menu-button" cost={this.props.marketingCost} classNameChild="info-invest-marketing-button" contentChild="Increase your sales ! (10 times the revenue)" /></div></div>
    : null}

    {this.props.rdState > 2 ? 
        <div><h3 className="sales-title">SALES</h3>
        <div><Button onClickProp={this.props.hireASalesman} picture="./pictures/salesman.png" classNameButton="salesman-button menu-button" cost={this.props.salesmanCost} classNameChild="info-salesman-button" contentChild="Make some more (+10 sales per second)" />
    {this.props.rdState > 3 ? 
        <button onClick={this.props.buyFiveSales} style={{display:'inline', marginLeft : 5}}>x5</button>
    : null}</div></div>
    : null}

    {this.props.marketingCost > 5 
    ? <div><h3>Reaserch & Development</h3>
        <div><Button onClickProp={this.props.investRD} picture="./pictures/invest-in-research-and-development.png" classNameButton="rd-button menu-button" cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild="Unlock new possibilities." />
    {this.props.rdState > 3 ?
        <button onClick={this.props.improveAutomaticMachines} className="rd-improve-button menu-button">Improve Automatic Machines ({this.props.automaticProductionCost}€)<div className="info-invest-rd-improve-button">Increase the productivity of all your automatic machines by x1.5</div></button>
        :null}
    </div></div>
    : null}

{this.props.rdState > 4
    ? <div><h3>EXPANSION</h3><div><button onClick={this.props.investRD} className="factory-button">Buy a factory ({this.props.rdCost}€)<div className="info-buy-factory-button">Let's get serious.</div></button></div></div>
    : null}
        </div>
        );
    }
}

export default InvestmentBox
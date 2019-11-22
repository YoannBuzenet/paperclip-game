import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="investment-box interface-div">
        <h2>INVESTMENT</h2>

        <div>
        <h3>MACHINES</h3>
            <div><Button onClickProp={this.props.buyAMachine} machineProductivity={5} picture="./pictures/small-machine.png" classNameButton="small-machines-button menu-button" cost={5} classNameChild="info-small-machines-button" contentChild="Make some more (+ 5 paperclips per click)" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} isManual={true} machineQuantity={1} machineType="smallMachine"/>
        {this.props.rdState > 3 ? 
        <Button onClickProp={this.props.buyAMachine} machineProductivity={25} picture="./pictures/small-machinex5.png" classNameButton="small-machines5-button menu-button" cost={25} classNameChild="info-small-machinesx5-button" contentChild="Make even more (+ 25 paperclips per click)" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} isManual={true} machineQuantity={5} machineType="smallMachine"/>
        : null}</div></div>

        {this.props.rdState > 2 
    ? <div>
        <div>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} picture="./pictures/automatic-machine.png" classNameButton="automatic-machines-button menu-button" cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild=" paperclip per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine"/>
        {this.props.rdState > 3 ? 
        <ButtonAutomaticData onClickProp={this.props.buyAMachine} picture="./pictures/automatic-machinex5.png" classNameButton="automatic-machines5-button menu-button" cost={50} classNameChild="info-automatic-machinesx5-button" contentChild=" paperclip per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine"/>
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
        <Button onClickProp={this.props.buyFiveSales} picture="./pictures/salesmanx5.png" classNameButton="salesman-button menu-button" cost={250} classNameChild="salesman-machines-button" contentChild="Hire 5 salesman in a row." />
    : null}</div></div>
    : null}

    {this.props.marketingCost > 5 
    ? <div><h3>Reaserch & Development</h3>
        <div><Button onClickProp={this.props.investRD} picture="./pictures/invest-in-research-and-development.png" classNameButton="rd-button menu-button" cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild="Unlock new possibilities." />
    {this.props.rdState > 3 ?
    <Button onClickProp={this.props.improveAutomaticMachines} picture="./pictures/improve-automatic-machines.png" classNameButton="rd-improve-button menu-button" cost={this.props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild="Increase the productivity of all your automatic machines by x1.5" />
        :null}
    </div></div>
    : null}

{this.props.rdState > 4
    ? <div><h3>EXPANSION</h3><div>
    <Button onClickProp={this.props.improveAutomaticMachines} picture="./pictures/factory.png" classNameButton="factory-button menu-button" cost={this.props.automaticProductionCost} classNameChild="info-buy-factory-button" contentChild="Let's get serious." /></div></div>
    : null}
        </div>
        );
    }
}

export default InvestmentBox
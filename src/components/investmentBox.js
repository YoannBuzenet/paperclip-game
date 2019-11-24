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
            <div>
                <Button onClickProp={this.props.buyAMachine} money={this.props.money} machineProductivity={3} picture="./pictures/small-machine.png" classNameButton="small-machines-button menu-button" cost={5} classNameChild="info-small-machines-button" contentChild="Make some more (+ 3 paperclips per click)" isManual={true} machineQuantity={1} name="Small Machine" machineType="smallMachine" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} containsAnimation={true} id='small-Machine-Button' textAnimation="+3" animationIdTarget='ul-main-number' animationTypeOfElementCreated='li' animationCSSClass='graphInputOrange'/>
            </div>
        </div> 

        {this.props.rdLevelOfInvestment > 2 
    ? <div>
        <div>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} picture="./pictures/automatic-machine.png" name="Automatic Machine" classNameButton="automatic-machines-button menu-button" cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild=" paperclips per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity}/>
        {this.props.rdLevelOfInvestment > 3 ? 
        <ButtonAutomaticData onClickProp={this.props.buyAMachine} picture="./pictures/automatic-machinex5.png" name="5 Automatic Machine" classNameButton="automatic-machines5-button menu-button" cost={50} classNameChild="info-automatic-machinesx5-button" contentChild=" paperclips per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity}/>
    : null}
    </div> 
    </div>
    : null}

    {this.props.numberOfSmallMachines > 0 
    ? <div><h3>MARKETING</h3><div><Button onClickProp={this.props.investInSales} name="Call a new customer" picture="./pictures/invest-in-marketing.png" classNameButton="invest-marketing-button menu-button" cost={this.props.salesCost} classNameChild="info-invest-marketing-button" contentChild="Increase your sales ! (5 times the revenue)" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} money={this.props.money} containsAnimation={true} id='sales-button' textAnimation="X 5" animationIdTarget='sell-area' animationTypeOfElementCreated='li' animationCSSClass='graphInputBig'/></div></div>
    : null}

    {this.props.rdLevelOfInvestment > 2 ? 
        <div><h3 className="sales-title">SALES</h3>
        <div><Button onClickProp={this.props.hireASalesman} name="Hire a salesman" picture="./pictures/salesman.png" classNameButton="salesman-button menu-button" cost={this.props.salesmanCost} classNameChild="info-salesman-button" contentChild="Develop your sales (+10 sales per second)" />
    {this.props.rdLevelOfInvestment > 4 ? 
        <Button onClickProp={this.props.buyFiveSales} picture="./pictures/salesmanx5.png" name="Hire 5 salesmen" classNameButton="salesman-button menu-button" cost={this.props.salesmanCost *5 } classNameChild="salesman-machines-button" contentChild="Hire 5 salesman in a row." />
    : null}</div></div>
    : null}

    {this.props.salesLevelOfInvestment > 1 
    ? <div><h3>Reaserch & Development</h3>
        <div><Button onClickProp={this.props.investRD} name="Invest in R & D" picture="./pictures/invest-in-research-and-development.png" classNameButton="rd-button menu-button" cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild="Unlock new possibilities." />
    {this.props.rdLevelOfInvestment > 10 ?
    <Button onClickProp={this.props.improveAutomaticMachines} name="Improve the automatic machines" picture="./pictures/improve-automatic-machines.png" classNameButton="rd-improve-button menu-button" cost={this.props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild="Increase the productivity of all your automatic machines by x1.5" />
        :null}
    </div></div>
    : null}

{this.props.rdLevelOfInvestment > 4
    ? <div><h3>EXPANSION</h3><div>
    <ButtonAutomaticData onClickProp={this.props.buyAMachine} name="Factory" picture="./pictures/factory.png" classNameButton="factory-button menu-button" cost={8000} classNameChild="info-buy-factory-button" contentChild=" paperclips per second)" isManual={false} machineType="factory" machineProductivity={500} machineQuantity={1} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine}/></div></div>
    : null}
        </div>
        );
    }
}

export default InvestmentBox
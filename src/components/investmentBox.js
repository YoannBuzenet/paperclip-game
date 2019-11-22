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
            <div><Button onClickProp={this.props.buyAMachine} money={this.props.money} machineProductivity={5} picture="./pictures/small-machine.png" classNameButton="small-machines-button menu-button" cost={5} classNameChild="info-small-machines-button" contentChild="Make some more (+ 5 paperclips per click)" isManual={true} machineQuantity={1} name="Small Machine" machineType="smallMachine" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} containsAnimation={true} id='small-Machine-Button' textAnimation="+5" animationIdTarget='ul-main-number' animationTypeOfElementCreated='li' animationCSSClass='graphInputOrange'/>
        {this.props.rdState > 3 ? 
        <Button onClickProp={this.props.buyAMachine} money={this.props.money} name=" 5 Small Machines" machineProductivity={25} picture="./pictures/small-machinex5.png" classNameButton="small-machines5-button menu-button" cost={25} classNameChild="info-small-machinesx5-button" contentChild="Make even more (+ 25 paperclips per click)" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} isManual={true} machineQuantity={5} machineType="smallMachine" containsAnimation={true} id='small-Machine-Buttonx5' textAnimation="+25" animationIdTarget='ul-main-number' animationTypeOfElementCreated='li' animationCSSClass='graphInputOrange'/>
        : null}</div></div>

        {this.props.rdState > 2 
    ? <div>
        <div>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} picture="./pictures/automatic-machine.png" name="Automatic Machine" classNameButton="automatic-machines-button menu-button" cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild=" paperclip per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine" machineProductivity={1}/>
        {this.props.rdState > 3 ? 
        <ButtonAutomaticData onClickProp={this.props.buyAMachine} picture="./pictures/automatic-machinex5.png" name="5 Automatic Machine" classNameButton="automatic-machines5-button menu-button" cost={50} classNameChild="info-automatic-machinesx5-button" contentChild=" paperclip per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine" machineProductivity={1}/>
    : null}
    </div> 
    </div>
    : null}

    {this.props.numberOfSmallMachines > 0 
    ? <div><h3>MARKETING</h3><div><Button onClickProp={this.props.investInMarketing} name="Invest in Marketing" picture="./pictures/invest-in-marketing.png" classNameButton="invest-marketing-button menu-button" cost={this.props.marketingCost} classNameChild="info-invest-marketing-button" contentChild="Increase your sales ! (10 times the revenue)" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} money={this.props.money} containsAnimation={true} id='marketing-button' textAnimation="X 10" animationIdTarget='sell-area' animationTypeOfElementCreated='li' animationCSSClass='graphInputBig'/></div></div>
    : null}

    {this.props.rdState > 3 ? 
        <div><h3 className="sales-title">SALES</h3>
        <div><Button onClickProp={this.props.hireASalesman} name="Hire a salesman" picture="./pictures/salesman.png" classNameButton="salesman-button menu-button" cost={this.props.salesmanCost} classNameChild="info-salesman-button" contentChild="Make some more (+10 sales per second)" />
    {this.props.rdState > 4 ? 
        <Button onClickProp={this.props.buyFiveSales} picture="./pictures/salesmanx5.png" name="Hire 5 salesmen" classNameButton="salesman-button menu-button" cost={250} classNameChild="salesman-machines-button" contentChild="Hire 5 salesman in a row." />
    : null}</div></div>
    : null}

    {this.props.marketingCost > 50 
    ? <div><h3>Reaserch & Development</h3>
        <div><Button onClickProp={this.props.investRD} name="Invest in R & D" picture="./pictures/invest-in-research-and-development.png" classNameButton="rd-button menu-button" cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild="Unlock new possibilities." />
    {this.props.rdState > 3 ?
    <Button onClickProp={this.props.improveAutomaticMachines} name="Improve the automatic machines" picture="./pictures/improve-automatic-machines.png" classNameButton="rd-improve-button menu-button" cost={this.props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild="Increase the productivity of all your automatic machines by x1.5" />
        :null}
    </div></div>
    : null}

{this.props.rdState > 4
    ? <div><h3>EXPANSION</h3><div>
    <Button onClickProp={this.props.buyAMachine} name="Factory" picture="./pictures/factory.png" classNameButton="factory-button menu-button" cost={2000} classNameChild="info-buy-factory-button" contentChild="Let's get serious." isManual={false} machineType="factory" machineProductivity={500} machineQuantity={1}/></div></div>
    : null}
        </div>
        );
    }
}

export default InvestmentBox
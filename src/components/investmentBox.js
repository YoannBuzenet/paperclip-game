import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){

        var className = this.props.soldAtLeastOnePaperclip == 0 ? "investment-box interface-div" : "investment-box interface-div visible-left-div"

    return (<div className={className}>
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
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} picture="./pictures/automatic-machine.png" name="Automatic Machine" classNameButton="automatic-machines-button menu-button" cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild=" paperclips per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity}/>
        {this.props.rdLevelOfInvestment > 3 ? 
        <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} picture="./pictures/automatic-machinex5.png" name="5 Automatic Machine" classNameButton="automatic-machines5-button menu-button" cost={50} classNameChild="info-automatic-machinesx5-button" contentChild=" paperclips per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity}/>
    : null}
    </div> 
    </div>
    : null}


    {this.props.numberOfSmallMachines > 0 ?
        <div>
            <h3 className="sales-title">SALES</h3>
    <Button onClickProp={this.props.investInSales} name="Call a new customer" picture="./pictures/euros_symbol.png" classNameButton="invest-marketing-button menu-button" cost={this.props.salesCost} classNameChild="info-invest-marketing-button" contentChild="+5 future sales. Take your phone and call !" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} money={this.props.money} containsAnimation={true} id='sales-button' textAnimation="+ 5" animationIdTarget='sell-area' animationTypeOfElementCreated='li' animationCSSClass='graphInputBig'/>
        </div>
    : null}
    {(this.props.rdLevelOfInvestment > 2 && this.props.numberOfSmallAutomaticMachines > 3)?    
        <Button onClickProp={this.props.hireASalesman} name="Hire a salesman" picture="./pictures/salesman.png" classNameButton="salesman-button menu-button" cost={this.props.salesmanCost} classNameChild="info-salesman-button" contentChild="Develop your sales (+10 sales per second)" money={this.props.money} maximumSalesHirable={this.props.maximumSalesHirable} salesman={this.props.salesman}/>
    : null}
    {this.props.rdLevelOfInvestment > 3 ? 
        <Button onClickProp={this.props.buyFiveSales} picture="./pictures/salesmanx5.png" name="Hire 5 salesmen" classNameButton="salesman-button menu-button" cost={this.props.salesmanCost *5 } classNameChild="salesman-machines-button" contentChild="Hire 5 salesman in a row." money={this.props.money} maximumSalesHirable={this.props.maximumSalesHirable} salesman={this.props.salesman}/>
    : null}

    {this.props.officeLevelUpgrade > 1 ?
    <Button onClickProp={this.props.hireAManager} name="Hire a Manager" picture="./pictures/manager.png" classNameButton="rd-hire-manager menu-button" cost={this.props.managerCost} classNameChild="info-hire-manager" contentChild="Hire a Manager (hires 1 sales every second)" money={this.props.money} maximumSalesHirable={this.props.maximumSalesHirable} salesman={this.props.salesman}/> 
    : null}

    {this.props.salesLevelOfInvestment > 4 &&
     <div><h3>Research & Development</h3>
        <div><Button onClickProp={this.props.investRD} name="Invest in Research" picture="./pictures/invest-in-research-and-development.png" classNameButton="rd-button menu-button" cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild="Unlock new possibilities." money={this.props.money}/>
        {this.props.rdLevelOfInvestment > 4 && <Button onClickProp={this.props.buyOffice} name="Buy new offices" picture="./pictures/new_office.png" classNameButton="office-button menu-button" cost={this.props.officeCost} classNameChild="info-buy-office-button" contentChild="Hire more sales" money={this.props.money} />}
    

    {this.props.rdLevelOfInvestment > 5 && this.props.softwareLevelOfInvestment < 1 ?
    <Button onClickProp={this.props.investInSoftware} name="Install Software" picture="./pictures/software-program.png" classNameButton="rd-install-software menu-button" cost={30000} classNameChild="info-invest-rd-install-software" contentChild="With software, we will be able to manage all this production." money={this.props.money}/>
        :null}  
    </div></div>}

{this.props.rdLevelOfInvestment > 4
    ? <div><h3>EXPANSION</h3><div>
    <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} name="Factory" picture="./pictures/factory.png" classNameButton="factory-button menu-button" cost={this.props.factoryCost} classNameChild="info-buy-factory-button" contentChild=" paperclips per second)" isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={1} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine}/></div></div>
    : null}
        </div>
        );
    }
}

export default InvestmentBox
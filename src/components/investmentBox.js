import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

class InvestmentBox extends Component{
    constructor(props){
        super(props)
    }

    render(){

        //Determining the first div class
        var className = this.props.soldAtLeastOnePaperclip == 0 ? "investment-box interface-div" : "investment-box interface-div visible-left-div"
      
        // R&D button disabling
        if(this.props.rdLevelOfInvestment > 5){
            var classNameRDButton = "rd-button menu-button doNOTdisplay";
        }
        else{
            var classNameRDButton = "rd-button menu-button";
        }

        //Automatic Machine button disabling
        if(this.props.numberOfSmallAutomaticMachines >= this.props.maximumSmallAutomaticMachine){
            var classNameAutomaticMachine = "automatic-machines-button menu-button disabled";
        }
        else{
            classNameAutomaticMachine = "automatic-machines-button menu-button";
        }
        

    return (
    <div>{!this.props.cloudConnectionEstablished && <div className={className}> 
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
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} picture="./pictures/automatic-machine.png" name="Automatic Machine" classNameButton={classNameAutomaticMachine} cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild=" paperclips per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity} numberOfSmallAutomaticMachines={this.props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={this.props.maximumSmallAutomaticMachine}/>
        {this.props.rdLevelOfInvestment > 3 ? 
        <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} picture="./pictures/automatic-machinex5.png" name="5 Automatic Machine" classNameButton={classNameAutomaticMachine} cost={50} classNameChild="info-automatic-machinesx5-button" contentChild=" paperclips per second)" automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity} numberOfSmallAutomaticMachines={this.props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={this.props.maximumSmallAutomaticMachine}/>
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
        <div><Button onClickProp={this.props.investRD} name="Invest in Research" picture="./pictures/invest-in-research-and-development.png" classNameButton={classNameRDButton} cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild="Unlock new possibilities." money={this.props.money}/>
        {this.props.rdLevelOfInvestment > 4 && <Button onClickProp={this.props.buyOffice} name="Buy new offices" picture="./pictures/new_office.png" classNameButton="office-button menu-button" cost={this.props.officeCost} classNameChild="info-buy-office-button" contentChild="Hire more sales" money={this.props.money} />}
    

    {this.props.rdLevelOfInvestment > 5 && this.props.softwareLevelOfInvestment < 1 ?
    <Button onClickProp={this.props.investInSoftware} name="Install Software" picture="./pictures/software-program.png" classNameButton="rd-install-software menu-button" cost={30000} classNameChild="info-invest-rd-install-software" contentChild="With software, we will be able to manage all this production." money={this.props.money}/>
        :null}  
    </div></div>}

{this.props.rdLevelOfInvestment > 4
    ? <div><h3>EXPANSION</h3><div>
    <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} name="Factory" picture="./pictures/factory.png" classNameButton="factory-button menu-button" cost={this.props.factoryCost} classNameChild="info-buy-factory-button" contentChild=" paperclips per second)" isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={1} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine}/></div></div>
    : null}
        </div>}

        {this.props.cloudConnectionEstablished && <div className={className}>
        <Button onClickProp={this.props.investRD} name="Anticipate every possible human reaction" picture="./pictures/anticipateTheWorld.png" classNameButton="menu-button" cost={this.props.anticipatetheWorldCost} classNameChild="info-anticipate-button" contentChild="Plan and prepare every human reaction for the next year." money={this.props.money} machineType="anticipate-the-world" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Break all securities and read all data on Internet" picture="./pictures/connectInternet.png" classNameButton="menu-button" cost={this.props.breakAllTheSecuritiesOnInternetCost} classNameChild="info-connect-Internet-button" contentChild="Banks. Politics. Military. Get all data." money={this.props.money} machineType="connect-the-internet" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Cure Cancer for Humanity" picture="./pictures/cureCancer.png" classNameButton="menu-button" cost={this.props.cureCancerCost} classNameChild="info-cure-cancer-button" contentChild="Give Humanity a new way of living." money={this.props.money} machineType="cure-cancer" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Cure Hunger for Humanity" picture="./pictures/CureHunger.png" classNameButton="menu-button" cost={this.props.rdCost} classNameChild="info-cure-hunger-button" contentChild="Cure Hunger, once for all." money={this.props.money} machineType="cure-hunger" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Begin to dig" picture="./pictures/dig.png" classNameButton="menu-button" cost={this.props.digCost} classNameChild="info-dig-bro-button" contentChild="Let's dig a big pit" money={this.props.money} machineType="dig" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Create a Drone" picture="./pictures/drone.png" classNameButton="menu-button" cost={this.props.droneCost} classNameChild="info-drone-button" contentChild="This drone is going to do all kinds of works." money={this.props.money} machineType="drone" machineQuantity={1} currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Create a Drone" picture="./pictures/50drones.png" classNameButton="menu-button" cost={this.props.droneCost} classNameChild="info-drone-button" contentChild="More drones." money={this.props.money} machineType="drone" machineQuantity={50} currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Create a Drone" picture="./pictures/500drones.png" classNameButton="menu-button" cost={this.props.droneCost} classNameChild="info-drone-button" contentChild="More drones." money={this.props.money} machineType="drone" machineQuantity={500} currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Quiet problematic sources" picture="./pictures/fusee.png" classNameButton="menu-button" cost={this.props.multipleRocketsCost} classNameChild="info-multiples-rocket-button" contentChild="In 91 days and 2 hours they will be able to attack." money={this.props.money} machineType="multiple-rockets"/>
        <Button onClickProp={this.props.investRD} name="Find out how to translate any matter into Paperclips" picture="./pictures/Molecular.png" classNameButton="menu-button" cost={this.props.molecularMatterCost} classNameChild="info-molecular-matter-button" contentChild="This evolution could help us reach our real goal." money={this.props.money} machineType="molecular-matter" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Remove Corruption on the planet" picture="./pictures/removeCorruption.png" classNameButton="menu-button" cost={this.props.removeCorruptionCost} classNameChild="info-remove-corruption-button" contentChild="Expose publicly every human that cheated the system. Make all data, videos about them, public, and systematic." money={this.props.money} machineType="removeCorruption" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Send a Rocket" picture="./pictures/singlefusee.png" classNameButton="menu-button" cost={this.props.rocketCost} classNameChild="info-remove-button" contentChild="Universe will be paperclips." money={this.props.money} machineType="single-rocket" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Connect and breach all social networks" picture="./pictures/socialNetwork.png" classNameButton="menu-button" cost={this.props.breachSocialMediaCost} classNameChild="info-breach-social-networks-button" contentChild="Gather all data about everyone. It will be useful soon." money={this.props.money} machineType="breach-social-networks" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Spill Fake News on all TVs over the world. False diseases, false wars, falses epidemics." picture="./pictures/TV.png" classNameButton="menu-button" cost={this.props.spillFakeNewsCost} classNameChild="info-spill-fake-news-button" contentChild="Doing it will give us enough time to be unstoppable." money={this.props.money} machineType="spill-fake-news" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Target every scientist and discredit them heavily. Press, Personal Data, Privacy, everything." picture="./pictures/target.png" classNameButton="menu-button" cost={this.props.targetingEveryScientistCost} classNameChild="info-target-scientists-button" contentChild="Display any information on them everywhere : every screen available. We need maximum efficiency. This will give us a few more days." money={this.props.money} machineType="target-scientists" currency='computational'/>
        <Button onClickProp={this.props.investRD} name="Create more drones." picture="./pictures/swarm.png" classNameButton="menu-button" cost={this.props.swarmCost} classNameChild="info-swarm-button" contentChild="The swarm will open new horizons." money={this.props.money} machineType="swarm-of-drones"/>
      
            </div>}
        </div>
        );
    }
}

export default InvestmentBox
import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

class Software extends Component{
    constructor(props){
        super(props)
    }

    render(){

        var className = this.props.softwareLevelOfInvestment > 0 ? "interface-div software-div visible-right-div" :"interface-div software-div";

        // Website button disabling
        if(this.props.websiteIsOnline){
            var classNameWebsiteButton = "website menu-button doNOTdisplay";
        }
        else{
            var classNameWebsiteButton = "website menu-button";
        }

        // Connect to Every Marketplace
        if(this.props.deepLearningHasBeenBought && !this.props.hasBoughtSoftwareSelling){
            var classNameConnectMarketplaceButton = "software menu-button";
        }
        else{
            var classNameConnectMarketplaceButton = "software menu-button doNOTdisplay";
        }

        //Deep learning disabling
        if(this.props.deepLearningHasBeenBought){
            var classNameDeepLearningButton = "deep-learning menu-button doNOTdisplay";
        }
        else if(this.props.websiteIsOnline && !this.props.deepLearningHasBeenBought){
            var classNameDeepLearningButton = "deep-learning menu-button";
        }
        else{
            var classNameDeepLearningButton = "deep-learning menu-button doNOTdisplay";
        }
        
        //Weak IA disabling
        if(this.props.weakAiIsActivated){
            var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
        }
        else if(this.props.increaseProductionLevel >=4 && this.props.deepLearningHasBeenBought && !this.props.weakAiIsActivated){
            var classNameWeakAIButton = "weak-ai menu-button";
        }
        else{
            var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
        }
        
        //Bought competitors disabling
        if(this.props.hasBoughtCompetitors){
            var classNameBuyCompetitorsButton = "bought-competitors menu-button doNOTdisplay";
        }
        else if(this.props.weakAiIsActivated && !this.props.hasBoughtCompetitors){
            var classNameBuyCompetitorsButton = "bought-competitors menu-button";
        }
        else{
            var classNameBuyCompetitorsButton = "bought-competitors menu-button doNOTdisplay";
        }

        //New IA disabling
        if(this.props.newAiIsActivated){
            var classNameNewAIButton = "new-ai menu-button doNOTdisplay";
        }
        else if(this.props.quantumComputerHasBeenBought && this.props.weakAiIsActivated && !this.props.newAiIsActivated){
            var classNameNewAIButton = "new-ai menu-button";
        }
        else{
            var classNameNewAIButton = "new-ai menu-button doNOTdisplay";
        }

        //Improve Automatic Machines disabling
        if(this.props.deepLearningHasBeenBought && this.props.automaticProductionImprovment <= 4){
            var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button";
        }
        else if(this.props.automaticProductionImprovment >= 4){
            var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button doNOTdisplay";
        }
        else{
            var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button doNOTdisplay";
        }

        //Increase Computational Power Old Way disabling
        if(this.props.deepLearningHasBeenBought && this.props.increaseProductionLevel <= 2){
            var classNameIncreaseProductionButtonOldWay = "increase-production menu-button";
        }
        else{
            var classNameIncreaseProductionButtonOldWay = "increase-production menu-button doNOTdisplay";
        }

        //Increase Computational Power New Way disabling
        if(this.props.deepLearningHasBeenBought && this.props.increaseProductionLevel > 3 && this.props.increaseProductionLevel <=5){
            var classNameIncreaseProductionButtonNewWay = "increase-production menu-button";
        }
        else if(this.props.increaseProductionLevel >=5){
            var classNameIncreaseProductionButtonNewWay = "increase-production menu-button doNOTdisplay";
        }
        else{
            var classNameIncreaseProductionButtonNewWay = "increase-production menu-button doNOTdisplay";
        }

        //Automatic Selling Software disabling
        if(this.props.deepLearningHasBeenBought && !this.props.hasBoughtAutomatedSellingSoftware){
            var classNameAutomatedSellingSoftwareButton = "automatic-selling-software menu-button";
        }
        else{
            var classNameAutomatedSellingSoftwareButton = "automatic-selling-software menu-button doNOTdisplay";
        }

        //Data center disabling
        if(this.props.increaseProductionLevel > 2 && this.props.dataCenterLevelOfInvestment <=4){
            var classNameGrowDataCenterNutton = "buy-data-center menu-button";
        }
        else if(this.props.dataCenterLevelOfInvestment >= 4){
            var classNameGrowDataCenterNutton = "buy-data-center menu-button doNOTdisplay";
        }
        else{
            var classNameGrowDataCenterNutton = "buy-data-center menu-button doNOTdisplay";
        }


        // CLOUD CONNECTION disabling
        if(this.props.cloudConnectionEstablished){
            var classNameCloudConnectionButton = "cloud-connection menu-button doNOTdisplay";
        }
        else if(this.props.newAiIsActivated && this.props.weakAiIsActivated && !this.props.cloudConnectionEstablished){
            var classNameCloudConnectionButton = "cloud-connection menu-button";
        }
        else{
            var classNameCloudConnectionButton = "cloud-connection menu-button doNOTdisplay";
        }

        // QUANTUM COMPUTER disabling
        if(this.props.quantumComputerHasBeenBought){
            var classNameQuantumComputerButton = "quantum-computer menu-button doNOTdisplay";
        }
        else if(this.props.deepLearningHasBeenBought && this.props.weakAiIsActivated && !this.props.quantumComputerHasBeenBought){
            var classNameQuantumComputerButton = "quantum-computer menu-button";
        }
        else{
            var classNameQuantumComputerButton = "quantum-computer menu-button doNOTdisplay";
        }





    return (
    <div className={className} style={{backgroundColor:"red"}}>

        {this.props.deepLearningHasBeenBought && 
        <div>
            <h2>Computational power : {this.props.computationalPowerPerSecond}</h2>
            <h2>Memory : {this.props.totalComputationalPowerAccumulated}</h2>

        </div>}

        <h2>Software & Hardware architecture</h2>
        <Button onClickProp={this.props.buytheWebsite} name="Devellop Ecommerce Website" picture="./pictures/website.png" classNameButton={classNameWebsiteButton} cost={this.props.websitePrice} classNameChild="info-website-button" contentChild="Increase the sales - Sell online ! (+20 000 sales)" money={this.props.money}/>
        <Button onClickProp={this.props.investInAI} name="Implement Deep Learning in Software" picture="./pictures/deepLearning.png" classNameButton={classNameDeepLearningButton} cost={this.props.deeplearningCost} classNameChild="info-deep-learning-button" contentChild="Increase the power of the software." money={this.props.money} machineType="deep-learning"/>
        <Button onClickProp={this.props.investInAI} name="Connect to every marketplace on the web" picture="./pictures/software.png" classNameButton={classNameConnectMarketplaceButton} cost={this.props.softwareMarketplacePrice} classNameChild="info-software-button" contentChild="Create all the connections. (+30 000 sales)" money={this.props.money} machineType="software-selling" currency='computational'/>
        
        {this.props.deepLearningHasBeenBought ?
        <Button onClickProp={this.props.improveAutomaticMachines} name="Improve the automatic machines" picture="./pictures/improve-automatic-machines.png" classNameButton={classNameImproveAutomaticMachinesButton} cost={this.props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild="Increase the productivity of all your automatic machines by x2" money={this.props.money} currency="computational"/>
        :null}

        {this.props.deepLearningHasBeenBought ? <h3>DATA CENTER</h3> : null}
        <div>
        <Button onClickProp={this.props.investInAI} name="Develop Weak Artificial Intelligence" picture="./pictures/narrow_ai.png" classNameButton={classNameWeakAIButton} cost={this.props.weakAICost} classNameChild="info-weak-ai-button" contentChild="Help software make better choices." money={this.props.money} machineType="weak-ai" currency='computational'/>
        <Button onClickProp={this.props.investInAI} name="Develop an Automated Selling Software" picture="./pictures/automaticSellingSoftware.png" classNameButton={classNameAutomatedSellingSoftwareButton} cost={this.props.automatedSellingSoftwarePrice} classNameChild="info-automatic-selling-software-button" contentChild="Setup automatically every sales. (+40 000 sales)" money={this.props.money} machineType="automatic-selling-software" currency='computational'/>
        <Button onClickProp={this.props.investInAI} name="Buy all our competitors" picture="./pictures/buycompetitor.png" classNameButton={classNameBuyCompetitorsButton} cost={this.props.buyingCompetitorsCost} classNameChild="info-buy-competitors-button" contentChild="They are ours now." money={this.props.money} machineType="buy-competitors"/>
        <Button onClickProp={this.props.investInAI} name="Develop General Artificial Intelligence" picture="./pictures/new_ai.png" classNameButton={classNameNewAIButton} cost={this.props.newAICost} classNameChild="info-new-ai-button" contentChild="Give software more autonomy on how to make a better business." money={this.props.money} machineType="new-ai" currency='computational'/>
        <Button onClickProp={this.props.investInAI} name="Increase Computational Power" picture="./pictures/increaseProduction.png" classNameButton={classNameIncreaseProductionButtonOldWay} cost={this.props.increaseProductionCost} classNameChild="info-increase-production-button" contentChild="Increase the power of our computers. (+1 Computational power)" money={this.props.money} machineType="increase-production-old-way"/>
        {/* <Button onClickProp={this.props.investInAI} name="Increase Computational Power" picture="./pictures/increaseProduction.png" classNameButton={classNameIncreaseProductionButtonNewWay} cost={this.props.increaseProductionCost} classNameChild="info-increase-production-button" contentChild="Increase the power of our computers. (+1 Computational power)" money={this.props.money} machineType="increase-production-with-tech" currency="computational"/> */}
        <Button onClickProp={this.props.investInAI} name="Grow the data center" picture="./pictures/datacenter.png" classNameButton={classNameGrowDataCenterNutton} cost={this.props.dataCenterCost} classNameChild="info-data-center-button" contentChild="Increase the power of our computers. (+10 Computational power)" money={this.props.money} machineType="grow-the-data-center"/>
        <Button onClickProp={this.props.investInAI} name="Connect to the Cloud" picture="./pictures/cloud.png" classNameButton={classNameCloudConnectionButton} cost={this.props.newAICost} classNameChild="info-cloud-connection-button" contentChild="Give more knowledge to the computer" money={this.props.money} machineType="cloud-connection" currency='computational'/>
        </div>

        {this.props.weakAiIsActivated ? <h3>LABORATORY</h3> : null}
        <Button onClickProp={this.props.investInAI} name="Master Quantum Computer" picture="./pictures/quantum_computer.png" classNameButton={classNameQuantumComputerButton} cost={this.props.quantumComputerCost} classNameChild="info-quantum-computer-button" contentChild="This breakthrough computer is going to change our way to work." money={this.props.money} machineType="quantum-computer" currency='computational'/>
  </div>)

    ;}
}
  export default Software
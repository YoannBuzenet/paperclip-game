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
        else if(this.props.dataCenterLevelOfInvestment >=3 && this.props.deepLearningHasBeenBought && !this.props.weakAiIsActivated){
            var classNameWeakAIButton = "weak-ai menu-button";
        }
        else{
            var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
        }
        
        //Bought competitors disabling
        if(this.props.hasBoughtCompetitors){
            var classNameBuyCompetitorsButton = "bought-competitors menu-button doNOTdisplay";
        }
        else if(this.props.newAiIsActivated && !this.props.hasBoughtCompetitors){
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
        if(this.props.deepLearningHasBeenBought && this.props.automaticProductionImprovment <= 3){
            var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button";
        }
        else if(this.props.automaticProductionImprovment >= 3){
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
        else if(this.props.newAiIsActivated && this.props.weakAiIsActivated && !this.props.cloudConnectionEstablished && this.props.hasBoughtCompetitors){
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

        // Terraform Island disabling
        if(this.props.terraformingIslandIntoServers){
            var classNameTerraformingIslandButton = "terraformingIsland menu-button doNOTdisplay";
        }
        else if(!this.props.terraformingIslandIntoServers && this.props.droneLevelOfInvestment >=2){
            var classNameTerraformingIslandButton = "terraformingIsland menu-button";
        }
        else{
            var classNameTerraformingIslandButton = "terraformingIsland menu-button doNOTdisplay";
        }

        // H3 Data center disabling
        if(this.props.terraformingIslandIntoServers){
            var classh3datacenter = "doNOTdisplay";
        }
        else if(this.props.deepLearningHasBeenBought && this.props.dataCenterLevelOfInvestment <=4){
            var classh3datacenter = "";
        }
        else{
            var classh3datacenter = "doNOTdisplay";
        }

        //Computational Power update 
        var data;
        if(this.props.droneLevelOfInvestment == 1){
            data = this.props.computationalPowerPerSecond + this.props.numberOfDrone;
        }
        else if(this.props.droneLevelOfInvestment > 1){
            data = this.props.computationalPowerPerSecond + this.props.numberOfDrone *5;
        }
        else{
            data =this.props.computationalPowerPerSecond;
        }
        //Software Div update 
        var classSoftwareGlobal;
        if(this.props.terraformingIslandIntoServers && this.props.automaticProductionImprovment >= 4){
            classSoftwareGlobal = "doNOTdisplay"
        }
        else if(this.props.droneLevelOfInvestment ==2){
            classSoftwareGlobal = ""
        }
        else if(this.props.cloudConnectionEstablished && this.props.automaticProductionImprovment >= 4 && !this.props.terraformingIslandIntoServers){
            classSoftwareGlobal = "doNOTdisplay"
        }
        else if(this.props.softwareLevelOfInvestment >=1){
            classSoftwareGlobal = ""
        }
        else{
            classSoftwareGlobal = "doNOTdisplay"
        }


    return (
    <div>
        

        {this.props.deepLearningHasBeenBought && 
        <div className={className}>
            <h2>{this.props.text.gameTitles.softwarePowerAndMemory[this.props.lang]}</h2>
            <div className="data-software">
                <p className="data-title">{this.props.text.gameTitles.softwareComputationalPower[this.props.lang]}<span className="data">{this.props.checkNumber(data)}</span></p>
                <p className="data-title">{this.props.text.gameTitles.softwareMemory[this.props.lang]}<span className="data">{this.props.checkNumber(this.props.totalComputationalPowerAccumulated)}</span></p>
            </div>
        </div>}
        <div className={className}>
        <div className={classSoftwareGlobal}>
            <h2>{this.props.text.gameTitles.softwareTitle[this.props.lang]}</h2>
            <div className="padding-div">
                <Button onClickProp={this.props.buytheWebsite} name={this.props.text.gameButtons.developEcommerceWebsiteName} picture="./pictures/website.png" classNameButton={classNameWebsiteButton} cost={this.props.websitePrice} classNameChild="info-website-button" contentChild={this.props.text.gameButtons.developEcommerceWebsiteContent} money={this.props.money} lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.softwareDeepLearningName} picture="./pictures/deepLearning.png" classNameButton={classNameDeepLearningButton} cost={this.props.deeplearningCost} classNameChild="info-deep-learning-button" contentChild={this.props.text.gameButtons.softwareDeepLearningContent} money={this.props.money} machineType="deep-learning" lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.connectToEveryMarketPlaceName} picture="./pictures/software.png" classNameButton={classNameConnectMarketplaceButton} cost={this.props.softwareMarketplacePrice} classNameChild="info-software-button" contentChild={this.props.text.gameButtons.connectToEveryMarketPlaceContent} money={this.props.money} machineType="software-selling" currency='computational' lang={this.props.lang}/>
                
                {this.props.deepLearningHasBeenBought ?
                <Button onClickProp={this.props.improveAutomaticMachines} name={this.props.text.gameButtons.improveAutomaticMachineName} picture="./pictures/improve-automatic-machines.png" classNameButton={classNameImproveAutomaticMachinesButton} cost={this.props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild={this.props.text.gameButtons.improveAutomaticMachineContent} money={this.props.money} currency="computational" lang={this.props.lang}/>
                :null}

                <h3 className={classh3datacenter}>{this.props.text.gameTitles.softwareDataCenter[this.props.lang]}</h3>
                <div>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.weakAIName} picture="./pictures/narrow_ai.png" classNameButton={classNameWeakAIButton} cost={this.props.weakAICost} classNameChild="info-weak-ai-button" contentChild={this.props.text.gameButtons.weakAIContent} money={this.props.money} machineType="weak-ai" currency='computational' lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.automatedSellingSoftwareName} picture="./pictures/automaticSellingSoftware.png" classNameButton={classNameAutomatedSellingSoftwareButton} cost={this.props.automatedSellingSoftwarePrice} classNameChild="info-automatic-selling-software-button" contentChild={this.props.text.gameButtons.automatedSellingSoftwareContent} money={this.props.money} machineType="automatic-selling-software" currency='computational' lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.buyOurCompetitorName} picture="./pictures/buycompetitor.png" classNameButton={classNameBuyCompetitorsButton} cost={this.props.buyingCompetitorsCost} classNameChild="info-buy-competitors-button" contentChild={this.props.text.gameButtons.buyOurCompetitorContent} money={this.props.money} machineType="buy-competitors" lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.developGeneralAIName} picture="./pictures/new_ai.png" classNameButton={classNameNewAIButton} cost={this.props.newAICost} classNameChild="info-new-ai-button" contentChild={this.props.text.gameButtons.developGeneralAIContent} money={this.props.money} machineType="new-ai" currency='computational' lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.increaseComputationnalPowerName} picture="./pictures/increaseProduction.png" classNameButton={classNameIncreaseProductionButtonOldWay} cost={this.props.increaseProductionCost} classNameChild="info-increase-production-button" contentChild={this.props.text.gameButtons.increaseComputationnalPowerContent} money={this.props.money} machineType="increase-production-old-way" lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.growDataCenterName} picture="./pictures/datacenter.png" classNameButton={classNameGrowDataCenterNutton} cost={this.props.dataCenterCost} classNameChild="info-data-center-button" contentChild={this.props.text.gameButtons.frowDataCenterContent} money={this.props.money} machineType="grow-the-data-center" lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.connectAIToTheCloudName} picture="./pictures/cloud.png" classNameButton={classNameCloudConnectionButton} cost={this.props.newAICost} classNameChild="info-cloud-connection-button" contentChild={this.props.text.gameButtons.connectAIToTheCloudContent} money={this.props.money} machineType="cloud-connection" currency='computational' lang={this.props.lang}/>
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.terraformIslandIntoDataCentersName} picture="./pictures/terraformIslandIntoDataCenter.png" classNameButton={classNameTerraformingIslandButton} cost={this.props.terraformingIslandIntoServersCost} classNameChild="info-terraforming-button" contentChild={this.props.text.gameButtons.terraformIslandIntoDataCentersContent} money={this.props.money} machineType="terraformIsland" lang={this.props.lang}/>
                </div>

                {(this.props.weakAiIsActivated && !this.props.quantumComputerHasBeenBought)? <h3>{this.props.text.gameTitles.softwareLaboratory[this.props.lang]}</h3> : null}
                <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.masterQuantumComputerName} picture="./pictures/quantum_computer.png" classNameButton={classNameQuantumComputerButton} cost={this.props.quantumComputerCost} classNameChild="info-quantum-computer-button" contentChild={this.props.text.gameButtons.masterQuantumComputerContent} money={this.props.money} machineType="quantum-computer" currency='computational' lang={this.props.lang}/>
            </div>
        </div>  
        </div> 
  </div>)

    ;}
}
  export default Software
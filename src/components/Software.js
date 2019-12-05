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
        if(this.props.deeplearningHasBeenBought && !this.props.hasBoughtSoftwareSelling){
            var classNameConnectMarketplaceButton = "software menu-button";
        }
        else{
            var classNameConnectMarketplaceButton = "software menu-button doNOTdisplay";
        }

        //Deep learning disabling
        if(this.props.deeplearningHasBeenBought){
            var classNameDeepLearningButton = "deep-learning menu-button doNOTdisplay";
        }
        else if(this.props.websiteIsOnline && !this.props.deeplearningHasBeenBought){
            var classNameDeepLearningButton = "deep-learning menu-button";
        }
        else{
            var classNameDeepLearningButton = "deep-learning menu-button doNOTdisplay";
        }
        
        //Weak IA disabling
        if(this.props.weakAiIsActivated){
            var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
        }
        else if(this.props.websiteIsOnline && this.props.deeplearningHasBeenBought && !this.props.weakAiIsActivated){
            var classNameWeakAIButton = "weak-ai menu-button";
        }
        else{
            var classNameWeakAIButton = "weak-ai menu-button doNOTdisplay";
        }

        //New IA disabling
        if(this.props.newAiIsActivated){
            var classNameNewAIButton = "new-ai menu-button doNOTdisplay";
        }
        else if(this.props.deeplearningHasBeenBought && this.props.weakAiIsActivated && !this.props.newAiIsActivated){
            var classNameNewAIButton = "new-ai menu-button";
        }
        else{
            var classNameNewAIButton = "new-ai menu-button doNOTdisplay";
        }

        //Improve Automatic Machines disabling
        if(this.props.deeplearningHasBeenBought){
            var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button";
        }
        else{
            var classNameImproveAutomaticMachinesButton = "rd-improve-button menu-button doNOTdisplay";
        }

        //Increase Computational Power disabling
        if(this.props.deeplearningHasBeenBought){
            var classNameIncreaseProductionButton = "increase-production menu-button";
        }
        else{
            var classNameIncreaseProductionButton = "increase-production menu-button doNOTdisplay";
        }


        //Increase CLOUD CONNECTION
        if(this.props.cloudConnectionEstablished){
            var classNameCloudConnectionButton = "cloud-connection menu-button doNOTdisplay";
        }
        else if(this.props.deeplearningHasBeenBought && this.props.weakAiIsActivated && !this.props.cloudConnectionEstablished){
            var classNameCloudConnectionButton = "cloud-connection menu-button";
        }
        else{
            var classNameCloudConnectionButton = "cloud-connection menu-button doNOTdisplay";
        }

        //Increase QUANTUM COMPUTER
        if(this.props.quantumComputerHasBeenBought){
            var classNameQuantumComputerButton = "quantum-computer menu-button doNOTdisplay";
        }
        else if(this.props.deeplearningHasBeenBought && this.props.weakAiIsActivated && !this.props.quantumComputerHasBeenBought){
            var classNameQuantumComputerButton = "quantum-computer menu-button";
        }
        else{
            var classNameQuantumComputerButton = "quantum-computer menu-button doNOTdisplay";
        }





    return (
    <div className={className} style={{backgroundColor:"red"}}>

        {this.props.deeplearningHasBeenBought && 
        <div>
            <h2>Computational power : {this.props.computationalPowerPerSecond}</h2>
            <h2>Memory : {this.props.totalComputationalPowerAccumulated}</h2>

        </div>}

        <h2>Software & Hardware architecture</h2>
        <Button onClickProp={this.props.buytheWebsite} name="Devellop Ecommerce Website" picture="./pictures/website.png" classNameButton={classNameWebsiteButton} cost={this.props.websitePrice} classNameChild="info-website-button" contentChild="Increase the sales - Sell online ! (+20 000 sales)" money={this.props.money}/>
        <Button onClickProp={this.props.investInAI} name="Implement Deep Learning in Software" picture="./pictures/deepLearning.png" classNameButton={classNameDeepLearningButton} cost={this.props.deeplearningCost} classNameChild="info-deep-learning-button" contentChild="Increase the power of the software." money={this.props.money} machineType="deep-learning"/>
        <Button onClickProp={this.props.investInAI} name="Connect to every marketplace on the web" picture="./pictures/software.png" classNameButton={classNameConnectMarketplaceButton} cost={this.props.softwareMarketplacePrice} classNameChild="info-software-button" contentChild="Create all the connections." money={this.props.money} machineType="software-selling" currency='computational'/>
        
        {this.props.deeplearningHasBeenBought ?
        <Button onClickProp={this.props.improveAutomaticMachines} name="Improve the automatic machines" picture="./pictures/improve-automatic-machines.png" classNameButton={classNameImproveAutomaticMachinesButton} cost={this.props.automaticProductionCost} classNameChild="info-invest-rd-improve-button" contentChild="Increase the productivity of all your automatic machines by x1.5" money={this.props.money} currency="computational"/>
        :null}

        {this.props.deeplearningHasBeenBought ? <h3>DATA CENTER</h3> : null}
        <div>
        <Button onClickProp={this.props.investInAI} name="Develop Weak Artificial Intelligence" picture="./pictures/narrow_ai.png" classNameButton={classNameWeakAIButton} cost={this.props.weakAICost} classNameChild="info-weak-ai-button" contentChild="Help software make better choices." money={this.props.money} machineType="weak-ai"/>
        <Button onClickProp={this.props.investInAI} name="Develop General Artificial Intelligence" picture="./pictures/new_ai.png" classNameButton={classNameNewAIButton} cost={this.props.newAICost} classNameChild="info-new-ai-button" contentChild="Give software more autonomy on how to make a better business." money={this.props.money} machineType="new-ai"/>
        <Button onClickProp={this.props.investInAI} name="Increase Computational Power" picture="./pictures/increaseProduction.png" classNameButton={classNameIncreaseProductionButton} cost={this.props.increaseProductionCost} classNameChild="info-increase-production-button" contentChild="Increase the power of our computers." money={this.props.money} machineType="increase-production" currency="computational"/>
        <Button onClickProp={this.props.investInAI} name="Connect to the Cloud" picture="./pictures/cloud.png" classNameButton={classNameCloudConnectionButton} cost={this.props.newAICost} classNameChild="info-cloud-connection-button" contentChild="Give more knowledge to the computer" money={this.props.money} machineType="cloud-connection"/>
        </div>

        {this.props.weakAiIsActivated ? <h3>LABORATORY</h3> : null}
        <Button onClickProp={this.props.investInAI} name="Master Quantum Computer" picture="./pictures/quantum_computer.png" classNameButton={classNameQuantumComputerButton} cost={this.props.quantumComputerCost} classNameChild="info-quantum-computer-button" contentChild="This breakthrough computer is going to change our way to work." money={this.props.money} machineType="quantum-computer"/>
  </div>)

    ;}
}
  export default Software
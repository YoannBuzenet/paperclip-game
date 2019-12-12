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
            var classNameRDButton = "rd-button menu-button investment-button doNOTdisplay";
        }
        else{
            var classNameRDButton = "rd-button investment-button menu-button";
        }

        //Automatic Machine button disabling
        if(this.props.numberOfSmallAutomaticMachines >= this.props.maximumSmallAutomaticMachine){
            var classNameAutomaticMachine = "automatic-machines-button investment-button menu-button disabled";
        }
        else{
            classNameAutomaticMachine = "automatic-machines-button investment-button menu-button";
        }

         // Find News Ways to Make Paperclip disabling
         if(this.props.hasFoundNewsWaysToMakePaperclips){
            var classFindNewsWaysOfMakingPaperclipsDroneButton = "findNewsWaysOfMakingPaperclips menu-button doNOTdisplay";
        }
        else if(!this.props.hasFoundNewsWaysToMakePaperclips){
            var classFindNewsWaysOfMakingPaperclipsDroneButton = "findNewsWaysOfMakingPaperclips menu-button";
        }
        else{
            var classFindNewsWaysOfMakingPaperclipsDroneButton = "findNewsWaysOfMakingPaperclips menu-button doNOTdisplay";
        }

        // One Drone Button disabling
        if(this.props.cloudConnectionEstablished && this.props.hasFoundNewsWaysToMakePaperclips){
            var classNameOneDroneButton = "one-drone menu-button";
        }
        else{
            var classNameOneDroneButton = "one-drone menu-button doNOTdisplay";
        }

        // Fifty Drones Button disabling
        if(this.props.droneLevelOfInvestment > 0){
            var classNameFiftyDroneButton = "fifty-drone menu-button";
        }
        else{
            var classNameFiftyDroneButton = "fifty-drone menu-button doNOTdisplay";
        }

        // 500 Drones Button disabling
        if(this.props.droneLevelOfInvestment > 1 && this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip){
            var classNameFiveHundredDroneButton = "five-hundred-drones menu-button";
        }
        else{
            var classNameFiveHundredDroneButton = "five-hundred-drones menu-button doNOTdisplay";
        }

        // Improve Drone disabling
        if(this.props.droneLevelOfInvestment >2){
            var classNameImproveDroneButton = "improveDrone menu-button doNOTdisplay";
        }
        else if(this.props.droneLevelOfInvestment < 1 && this.props.madeEnoughDrone){
            var classNameImproveDroneButton = "improveDrone menu-button";
        }
        else if(this.props.droneLevelOfInvestment < 2 && this.props.madeEnoughDrone && this.props.madeEnoughFactories && !this.props.terraformingIslandIntoServers){
            var classNameImproveDroneButton = "improveDrone menu-button";
        }
        else if(this.props.droneLevelOfInvestment < 2 && this.props.madeEnoughDrone && this.props.madeEnoughFactories && this.props.terraformingIslandIntoServers && !this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip){
            var classNameImproveDroneButton = "improveDrone menu-button";
        }
        else if(this.props.droneLevelOfInvestment <= 3 && this.props.madeEnoughDrone && this.props.madeEnoughFactories && this.props.terraformingIslandIntoServers && this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip){
            var classNameImproveDroneButton = "improveDrone menu-button";
        }
        else{
            var classNameImproveDroneButton = "improveDrone menu-button doNOTdisplay";
        }

        // Factory disabling
        if(this.props.hasFoundNewsWaysToMakePaperclips){
            var classNameFactoryButton = "factory menu-button";
        }
        else{
            var classNameFactoryButton = "factory menu-button doNOTdisplay";
        }

        // 50 Factory disabling
        if(this.props.hasFoundNewsWaysToMakePaperclips && this.props.droneLevelOfInvestment > 0){
            var className50FactoryButton = "factory menu-button";
        }
        else{
            var className50FactoryButton = "factory menu-button doNOTdisplay";
        }

        // 500 Factory disabling
        if(this.props.hasFoundNewsWaysToMakePaperclips && this.props.droneLevelOfInvestment > 1 && this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip){
            var className500FactoryButton = "factory menu-button";
        }
        else{
            var className500FactoryButton = "factory menu-button doNOTdisplay";
        }

        // Cure Cancer disabling
        if(this.props.hasCuredCancerForHumanity){
            var classNameCancerCuredButton = "cure-cancer menu-button doNOTdisplay";
        }
        else if(!this.props.hasCuredCancerForHumanity && this.props.droneLevelOfInvestment >= 2 && this.props.terraformingIslandIntoServers){
            var classNameCancerCuredButton = "cure-cancer menu-button";
        }
        else{
            var classNameCancerCuredButton = "cure-cancer menu-button doNOTdisplay";
        }

        // Cure Hunger disabling
        if(this.props.hasCuredHungerForHumanity){
            var classNameHungerCuredButton = "cure-hunger menu-button doNOTdisplay";
        }
        else if(!this.props.hasCuredHungerForHumanity && this.props.droneLevelOfInvestment >=2 && this.props.terraformingIslandIntoServers){
            var classNameHungerCuredButton = "cure-hunger menu-button";
        }
        else{
            var classNameHungerCuredButton = "cure-hunger menu-button doNOTdisplay";
        }

        // Corruption disabling
        if(this.props.hasRemovedCorruption){
            var classRemoveCorruptionButton = "removeCorruption menu-button doNOTdisplay";
        }
        else if(!this.props.hasRemovedCorruption && this.props.droneLevelOfInvestment >=2 && this.props.terraformingIslandIntoServers){
            var classRemoveCorruptionButton = "removeCorruption menu-button";
        }
        else{
            var classRemoveCorruptionButton = "removeCorruption menu-button doNOTdisplay";
        }

        // Connect and Breach all social networks disabling
        if(this.props.hasConnectedAndBreachedAllSocialNetworks){
            var classBreachSocialMediaButton = "breachSocialMedia menu-button doNOTdisplay";
        }
        else if(!this.props.hasConnectedAndBreachedAllSocialNetworks && this.props.hasCuredHungerForHumanity && this.props.hasCuredCancerForHumanity && this.props.hasRemovedCorruption){
            var classBreachSocialMediaButton = "breachSocialMedia menu-button";
        }
        else{
            var classBreachSocialMediaButton = "breachSocialMedia menu-button doNOTdisplay";
        }

        // Break all securities on Internet disabling
        if(this.props.didBreakAllSecuritiesOnInternet){
            var classBreakInternetSecurityButton = "breakInternetSecurity menu-button doNOTdisplay";
        }
        else if(!this.props.didBreakAllSecuritiesOnInternet && this.props.hasCuredHungerForHumanity && this.props.hasCuredCancerForHumanity && this.props.hasRemovedCorruption){
            var classBreakInternetSecurityButton = "breakInternetSecurity menu-button";
        }
        else{
            var classBreakInternetSecurityButton = "breakInternetSecurity menu-button doNOTdisplay";
        }

        // Anticipate all human reactions disabling
        if(this.props.hasAnticipatedEveryHumanReaction){
            var classAnticipateHumanReactionButton = "anticipateAllHumanReactions menu-button doNOTdisplay";
        }
        else if(!this.props.hasAnticipatedEveryHumanReaction && this.props.hasCuredHungerForHumanity && this.props.hasCuredCancerForHumanity && this.props.hasRemovedCorruption && this.props.didBreakAllSecuritiesOnInternet && this.props.hasConnectedAndBreachedAllSocialNetworks){
            var classAnticipateHumanReactionButton = "anticipateAllHumanReactions menu-button";
        }
        else{
            var classAnticipateHumanReactionButton = "anticipateAllHumanReactions menu-button doNOTdisplay";
        }

        // Molecular transformation disabling
        if(this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip){
            var classMolecularTransformationButton = "molecularTransformation menu-button doNOTdisplay";
        }
        else if(!this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip && this.props.hasAnticipatedEveryHumanReaction){
            var classMolecularTransformationButton = "molecularTransformation menu-button";
        }
        else{
            var classMolecularTransformationButton = "molecularTransformation menu-button doNOTdisplay";
        }

        // Dig Button disabling
        if(this.props.hasBegunToDig){
            var classDigHasStartedButton = "hasBegunToDig menu-button doNOTdisplay";
        }
        else if(!this.props.hasBegunToDig && this.props.hasAnticipatedEveryHumanReaction && this.props.hasFoundOutHowToTransformMolecularMatterIntoPaperclip && this.props.droneLevelOfInvestment >=3){
            var classDigHasStartedButton = "hasBegunToDig menu-button";
        }
        else{
            var classDigHasStartedButton = "hasBegunToDig menu-button doNOTdisplay";
        }

        // Earth Weight disabling
        if(this.props.hasBegunToDig){
            var weightEarth = "weightEarth";
        }
        else{
            var weightEarth = "weightEarth doNOTdisplay";
        }

        // Improve Factory Disabling
        if(!this.props.factoryCanProduceDrones && this.props.hasBegunToDig){
            var classNameImproveFactoryButton = "ImproveFactory menu-button";
        }
        else{
            var classNameImproveFactoryButton = "ImproveFactory menu-button doNOTdisplay";
        }

        // Drones can build factories Disabling
        if(this.props.numberOfDrone > 15000 && !this.props.hasAllowedDroneToBuildFactories){
            var classNameDroneBuildFactoryButton = "droneBuildFactory menu-button";
        }
        else{
            var classNameDroneBuildFactoryButton = "droneBuildFactory menu-button doNOTdisplay";
        }

        // Spill Fake News Disabling
        if(this.props.hasSpilledFakedNewsAllOverTheWorld){
            var classSpillFakeNewsButton = "spillFakeNews menu-button doNOTdisplay";
        }
        else if(!this.props.hasSpilledFakedNewsAllOverTheWorld && this.props.hasAnticipatedEveryHumanReaction && this.props.hasBegunToDig && this.props.numberOfDrone > 40000){
            var classSpillFakeNewsButton = "spillFakeNews menu-button";
        }
        else{
            var classSpillFakeNewsButton = "spillFakeNews menu-button doNOTdisplay";
        }

        // Target Scientists Disabling
        if(this.props.hasTargetedEveryScientistOnEarth){
            var classTargetScientistsButton = "targetScientists menu-button doNOTdisplay";
        }
        else if(!this.props.hasTargetedEveryScientistOnEarth && this.props.hasSpilledFakedNewsAllOverTheWorld){
            var classTargetScientistsButton = "targetScientists menu-button";
        }
        else{
            var classTargetScientistsButton = "targetScientists menu-button doNOTdisplay";
        }

        // Increase Factory Building Disabling
        if(this.props.increaseFactoryBuilding){
            var classIncreaseFactoryProductivityButton = "increaseProductivityFactory menu-button doNOTdisplay";
        }
        else if(!this.props.increaseFactoryBuilding && this.props.hasSpilledFakedNewsAllOverTheWorld){
            var classIncreaseFactoryProductivityButton = "increaseProductivityFactory menu-button";
        }
        else{
            var classIncreaseFactoryProductivityButton = "increaseProductivityFactory menu-button doNOTdisplay";
        }

        // Multiple Rockets disabling
        if(this.props.hasQuietProblematicSources){
            var classQuietProblematicSourcesButton = "quieteProblematicSources menu-button doNOTdisplay";
        }
        else if(!this.props.hasQuietProblematicSources && this.props.hasTargetedEveryScientistOnEarth){
            var classQuietProblematicSourcesButton = "quieteProblematicSources menu-button";
        }
        else{
            var classQuietProblematicSourcesButton = "quieteProblematicSources menu-button doNOTdisplay";
        }

        // Create Swarm Disabling
        if(this.props.hasCreatedTheSwarm){
            var classCreatedSwarmButton = "createSwarm menu-button doNOTdisplay";
        }
        else if(!this.props.hasCreatedTheSwarm && this.props.hasQuietProblematicSources){
            var classCreatedSwarmButton = "createSwarm menu-button";
        }
        else{
            var classCreatedSwarmButton = "createSwarm menu-button doNOTdisplay";
        }

        // Single Rocket disabling
        if(this.props.hasLaunchedARocket){
            var classLaucnhingRocketButton = "hasLaunchedARocket menu-button doNOTdisplay";
        }
        else if(!this.props.hasLaunchedARocket && this.props.hasCreatedTheSwarm && this.props.weightOfTheEarth ==0){
            var classLaucnhingRocketButton = "hasLaunchedARocket menu-button";
        }
        else{
            var classLaucnhingRocketButton = "hasLaunchedARocket menu-button doNOTdisplay";
        }
        

    return (
    <div>{!this.props.cloudConnectionEstablished && <div className={className}> 
    <h2>{this.props.text.gameTitles.investment[this.props.lang]}</h2>
        <div className="padding-div">

        <div>
    <h3>{this.props.text.gameTitles.machines[this.props.lang]}</h3>
            <div>
                <Button onClickProp={this.props.buyAMachine} money={this.props.money} machineProductivity={3} picture="./pictures/small-machine.png" classNameButton="small-machines-button menu-button investment-button" cost={5} classNameChild="info-small-machines-button" contentChild={this.props.text.gameButtons.investmentSmallMachineText} isManual={true} machineQuantity={1} name={this.props.text.gameButtons.investmentSmallMachine} machineType="smallMachine" createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} containsAnimation={true} id='small-Machine-Button' textAnimation="+3" animationIdTarget='ul-main-number' animationTypeOfElementCreated='li' animationCSSClass='graphInputOrange' lang={this.props.lang}/>
            </div>
        </div> 

        {this.props.rdLevelOfInvestment > 2 
    ? <div>
        <div>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} picture="./pictures/automatic-machine.png" name={this.props.text.gameButtons.investmentAutomaticMachineName} classNameButton={classNameAutomaticMachine} cost={this.props.smallAutomaticMachineCost} classNameChild="info-automatic-machines-button" contentChild={this.props.text.gameButtons.investmentAutomaticMachineContent} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} isManual={false} machineQuantity={1} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity} numberOfSmallAutomaticMachines={this.props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={this.props.maximumSmallAutomaticMachine} lang={this.props.lang}/>
        {this.props.rdLevelOfInvestment > 3 ? 
        <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} picture="./pictures/x5.png" name={this.props.text.gameButtons.investment5AutomaticMachineName} classNameButton={classNameAutomaticMachine} cost={50} classNameChild="info-automatic-machinesx5-button" contentChild={this.props.text.gameButtons.investmentAutomaticMachineContent} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} machineQuantity={5} isManual={false} machineType="smallAutomaticMachine" machineProductivity={this.props.smallAutomaticMachineProductivity} numberOfSmallAutomaticMachines={this.props.numberOfSmallAutomaticMachines} maximumSmallAutomaticMachine={this.props.maximumSmallAutomaticMachine} lang={this.props.lang}/>
    : null}
    </div> 
    </div>
    : null}


    {this.props.numberOfSmallMachines > 0 ?
        <div>
    <h3 className="sales-title">{this.props.text.gameTitles.sales[this.props.lang]}</h3>
    <Button onClickProp={this.props.investInSales} name={this.props.text.gameButtons.salesCallACustomerName} picture="./pictures/euros_symbol.png" classNameButton="invest-marketing-button menu-button investment-button" cost={this.props.salesCost} classNameChild="info-invest-marketing-button" contentChild={this.props.text.gameButtons.salesCallACustomerContent} createAndRemoveGraphicEffect={this.props.createAndRemoveGraphicEffect} money={this.props.money} containsAnimation={true} id='sales-button' textAnimation="+ 5" animationIdTarget='sell-area' animationTypeOfElementCreated='li' animationCSSClass='graphInputBig' lang={this.props.lang}/>
        </div>
    : null}
    {(this.props.rdLevelOfInvestment > 2 && this.props.numberOfSmallAutomaticMachines > 3)?    
        <Button onClickProp={this.props.hireASalesman} name={this.props.text.gameButtons.salesHireSalesman} picture="./pictures/salesman.png" classNameButton="salesman-button menu-button investment-button" cost={this.props.salesmanCost} classNameChild="info-salesman-button" contentChild={this.props.text.gameButtons.salesHireSalesmanContent} money={this.props.money} maximumSalesHirable={this.props.maximumSalesHirable} salesman={this.props.salesman} lang={this.props.lang}/>
    : null}
    {this.props.rdLevelOfInvestment > 3 ? 
        <Button onClickProp={this.props.buyFiveSales} picture="./pictures/x5.png" name={this.props.text.gameButtons.salesHire5SalesmenName} classNameButton="salesman-button menu-button investment-button" cost={this.props.salesmanCost *5 } classNameChild="salesman-machines-button" contentChild={this.props.text.gameButtons.salesHire5SalesmenContent} money={this.props.money} maximumSalesHirable={this.props.maximumSalesHirable} salesman={this.props.salesman} lang={this.props.lang}/>
    : null}

    {this.props.officeLevelUpgrade > 1 ?
    <Button onClickProp={this.props.hireAManager} name={this.props.text.gameButtons.salesHireAManagerName} picture="./pictures/manager.png" classNameButton="rd-hire-manager menu-button investment-button" cost={this.props.managerCost} classNameChild="info-hire-manager" contentChild={this.props.text.gameButtons.salesHireAManagerContent} money={this.props.money} maximumSalesHirable={this.props.maximumSalesHirable} salesman={this.props.salesman} lang={this.props.lang}/> 
    : null}

    {this.props.salesLevelOfInvestment > 4 &&
     <div><h3>{this.props.text.gameTitles.researchAndDevelopment[this.props.lang]}</h3>
        <div><Button onClickProp={this.props.investRD} name={this.props.text.gameButtons.investInRD} picture="./pictures/invest-in-research-and-development.png" classNameButton={classNameRDButton} cost={this.props.rdCost} classNameChild="info-invest-rd-button" contentChild={this.props.text.gameButtons.investInRDContent} money={this.props.money} lang={this.props.lang}/>
        {this.props.rdLevelOfInvestment > 4 && <Button onClickProp={this.props.buyOffice} name={this.props.text.gameButtons.buyNewOfficesName} picture="./pictures/new_office.png" classNameButton="office-button menu-button investment-button" cost={this.props.officeCost} classNameChild="info-buy-office-button" contentChild={this.props.text.gameButtons.buyNewOfficesContent} money={this.props.money} lang={this.props.lang}/>}
    

    {this.props.rdLevelOfInvestment > 5 && this.props.softwareLevelOfInvestment < 1 ?
    <Button onClickProp={this.props.investInSoftware} name={this.props.text.gameButtons.installSoftwareName} picture="./pictures/software-program.png" classNameButton="rd-install-software menu-button investment-button" cost={this.props.softwareCost} classNameChild="info-invest-rd-install-software" contentChild={this.props.text.gameButtons.installSoftwareContent} money={this.props.money} lang={this.props.lang}/>
        :null}  
    </div></div>}

{this.props.rdLevelOfInvestment > 4
    ? <div><h3>{this.props.text.gameTitles.expansion[this.props.lang]}</h3><div>
    <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} name={this.props.text.gameButtons.factoryName} picture="./pictures/factory.png" classNameButton="factory-button menu-button investment-button" cost={this.props.factoryCost} classNameChild="info-buy-factory-button" contentChild={this.props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={1} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} lang={this.props.lang}/></div></div>
    : null}
    </div>
        </div>}
     

        {this.props.cloudConnectionEstablished && <div className={className}>
            <h2 className="AI-context">{this.props.text.gameTitles.aiExecution[this.props.lang]}</h2>
            <div className="padding-div">

            <div className={weightEarth}>
                <p className="data-title">{this.props.text.gameTitles.harvestingEarth[this.props.lang]}<span className="data">{this.props.checkNumber(this.props.weightOfTheEarth)} kg</span></p>
                <p className="data-title">{this.props.text.gameTitles.droneCurrentlyDigging[this.props.lang]}<span className="data">{this.props.checkNumber(this.props.numberOfDrone)}</span></p>
            </div>

        <div>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.findNewsWaysToMakePaperclips} picture="./pictures/findNewsWaysOfMakingPaperclips.png" classNameButton={classFindNewsWaysOfMakingPaperclipsDroneButton} cost={this.props.findNewsWayxToMakePaperclipCost} classNameChild="info-findNewsWays-button" contentChild={this.props.text.gameButtons.findNewsWaysToMakePaperclipsContent} money={this.props.money} machineType="find-news-ways-of-making-paperclips" machineQuantity={1} currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.createADroneName} picture="./pictures/drone.png" classNameButton={classNameOneDroneButton} cost={this.props.droneCost} classNameChild="info-drone-button" contentChild={this.props.text.gameButtons.createADroneContent} money={this.props.money} machineType="drone" machineQuantity={1} currency='paperclips' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.create50DroneName} picture="./pictures/x50.png" classNameButton={classNameFiftyDroneButton} cost={this.props.droneCost*50} classNameChild="info-drone-button" contentChild={this.props.text.gameButtons.create50DroneContent} money={this.props.money} machineType="drone" machineQuantity={50} currency='paperclips' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.create500DroneName} picture="./pictures/x500.png" classNameButton={classNameFiveHundredDroneButton} cost={this.props.droneCost*500} classNameChild="info-drone-button" contentChild={this.props.text.gameButtons.create500DroneContent} money={this.props.money} machineType="drone" machineQuantity={500} currency='paperclips' lang={this.props.lang}/>
        </div>
        <div>
             <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.improveDrone} picture="./pictures/improveDrones.png" classNameButton={classNameImproveDroneButton} cost={this.props.ImprovedroneCost} classNameChild="info-improve-drone-button" contentChild={this.props.text.gameButtons.improveDroneContent} money={this.props.money} machineType="improve-drone" currency='computational' lang={this.props.lang}/>
             <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.improveFactories} picture="./pictures/droneFactory.png" classNameButton={classNameImproveFactoryButton} cost={this.props.improveFactoryToCreateDroneCost} classNameChild="info-improve-factory-button" contentChild={this.props.text.gameButtons.improveFactoriesContent} money={this.props.money} machineType="improve-factory" currency='computational' lang={this.props.lang}/>
             <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.droneCanBuildFactoriesName} picture="./pictures/programDroneToBuildFactories.png" classNameButton={classNameDroneBuildFactoryButton} cost={this.props.droneCanCreateFactoryCost} classNameChild="info-drone-can-build-factory-button" contentChild={this.props.text.gameButtons.droneCanBuildFactoriesContent} money={this.props.money} machineType="drones-can-build-factories" currency='computational' lang={this.props.lang}/>
             <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.increaseMachineProductivyName} picture="./pictures/factoryIncrease.png" classNameButton={classIncreaseFactoryProductivityButton} cost={this.props.increaseFactoryCost} classNameChild="info-drone-can-build-factory-button" contentChild={this.props.text.gameButtons.increaseMachineProductivyContent} money={this.props.money} machineType="increaseFactoryProductivity" currency='computational' lang={this.props.lang}/>
        </div>
        <div>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} name={this.props.text.gameButtons.factoryPaperclipName} picture="./pictures/factory.png" classNameButton={classNameFactoryButton} cost={10000} classNameChild="info-buy-factory-button" contentChild={this.props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={1} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} currency='paperclips' lang={this.props.lang}/>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} name={this.props.text.gameButtons.factory50PaperclipName} picture="./pictures/x50.png" classNameButton={className50FactoryButton} cost={500000} classNameChild="info-buy-factory-button" contentChild={this.props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={50} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} currency='paperclips' lang={this.props.lang}/>
            <ButtonAutomaticData onClickProp={this.props.buyAMachine} money={this.props.money} name={this.props.text.gameButtons.factory500PaperclipName} picture="./pictures/x500.png" classNameButton={className500FactoryButton} cost={5000000} classNameChild="info-buy-factory-button" contentChild={this.props.text.gameButtons.investmentAutomaticMachineContent} isManual={false} machineType="factory" machineProductivity={10000} machineQuantity={500} automaticProductivityPerMachine={this.props.productivyPerAutomaticMachine} currency='paperclips' lang={this.props.lang}/>
        </div>
        <div>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.cureCancerForHumanity} picture="./pictures/cureCancer.png" classNameButton={classNameCancerCuredButton} cost={this.props.cureCancerCost} classNameChild="info-cure-cancer-button" contentChild={this.props.text.gameButtons.cureCancerForHumanityContent} money={this.props.money} machineType="cure-cancer" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.cureHungerForHumanityName} picture="./pictures/CureHunger.png" classNameButton={classNameHungerCuredButton} cost={this.props.rdCost} classNameChild="info-cure-hunger-button" contentChild={this.props.text.gameButtons.cureHungerForHumanityContent} money={this.props.money} machineType="cure-hunger" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.removeCorruptionOnPlanetName} picture="./pictures/removeCorruption.png" classNameButton={classRemoveCorruptionButton} cost={this.props.removeCorruptionCost} classNameChild="info-remove-corruption-button" contentChild={this.props.text.gameButtons.removeCorruptionOnPlanetContent} money={this.props.money} machineType="removeCorruption" currency='computational' lang={this.props.lang}/>
        </div>
        <div>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.connectAndBreachAllSocialNetworksName} picture="./pictures/socialNetwork.png" classNameButton={classBreachSocialMediaButton} cost={this.props.breachSocialMediaCost} classNameChild="info-breach-social-networks-button" contentChild={this.props.text.gameButtons.connectAndBreachAllSocialNetworksContent} money={this.props.money} machineType="breach-social-networks" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.breakAllSecuritiesName} picture="./pictures/connectInternet.png" classNameButton={classBreakInternetSecurityButton} cost={this.props.breakAllTheSecuritiesOnInternetCost} classNameChild="info-connect-Internet-button" contentChild={this.props.text.gameButtons.breakAllSecuritiesContent} money={this.props.money} machineType="connect-the-internet" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.anticipateEveryHumanReactionName} picture="./pictures/anticipateTheWorld.png" classNameButton={classAnticipateHumanReactionButton} cost={this.props.anticipatetheWorldCost} classNameChild="info-anticipate-button" contentChild={this.props.text.gameButtons.anticipateEveryHumanReactionContent} money={this.props.money} machineType="anticipate-the-world" currency='computational' lang={this.props.lang}/>
        </div>
        <div>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.transformMatterIntoMetalName} picture="./pictures/Molecular.png" classNameButton={classMolecularTransformationButton} cost={this.props.molecularMatterCost} classNameChild="info-molecular-matter-button" contentChild={this.props.text.gameButtons.transformMatterIntoMetalContent} money={this.props.money} machineType="molecular-matter" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.beginToDigName} picture="./pictures/dig.png" classNameButton={classDigHasStartedButton} cost={this.props.digCost} classNameChild="info-dig-bro-button" contentChild={this.props.text.gameButtons.beginToDigContent} money={this.props.money} machineType="dig" currency='computational' lang={this.props.lang}/>
        </div>
        <div>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.quietProblematicSourcesName} picture="./pictures/fusee.png" classNameButton={classQuietProblematicSourcesButton} cost={this.props.multipleRocketsCost} classNameChild="info-multiples-rocket-button" contentChild={this.props.text.gameButtons.quietProblematicSourcesContent} money={this.props.money} machineType="multiple-rockets" lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.sendARocketName} picture="./pictures/singlefusee.png" classNameButton={classLaucnhingRocketButton} cost={this.props.rocketCost} classNameChild="info-remove-button" contentChild={this.props.text.gameButtons.sendARocketContent} money={this.props.money} machineType="single-rocket" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.spillFakeNewsName} picture="./pictures/TV.png" classNameButton={classSpillFakeNewsButton} cost={this.props.spillFakeNewsCost} classNameChild="info-spill-fake-news-button" contentChild={this.props.text.gameButtons.spillFakeNewsCOntent} money={this.props.money} machineType="spill-fake-news" currency='computational' lang={this.props.lang}/>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.targetEveryScientistName} picture="./pictures/target.png" classNameButton={classTargetScientistsButton} cost={this.props.targetingEveryScientistCost} classNameChild="info-target-scientists-button" contentChild={this.props.text.gameButtons.targetEveryScientistContent} money={this.props.money} machineType="target-scientists" currency='computational' lang={this.props.lang}/>
        </div>
        <div>
            <Button onClickProp={this.props.investInAI} name={this.props.text.gameButtons.createTheSwarmName} picture="./pictures/swarm.png" classNameButton={classCreatedSwarmButton} cost={this.props.swarmCost} classNameChild="info-swarm-button" contentChild={this.props.text.gameButtons.createTheSwarmContent} money={this.props.money} machineType="swarm-of-drones" lang={this.props.lang} currency='computational'/>
        </div>
        </div>
            </div>}
            
        </div>
        );
    }
}

export default InvestmentBox
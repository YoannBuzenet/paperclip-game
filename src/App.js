import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import MainButton from './components/main-button';
import SellButton from './components/sellButton';
import InvestmentBox from './components/investmentBox.js';
import WorkBox from './components/workBox.js';
import DashboardActivity from './components/DashboardActivity.js';
import DialogInterface from './components/DialogInterface.js';
import Software from './components/Software.js';

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
          count : 50000000000,
          money : 50000000000,
          totalComputationalPowerAccumulated : 500000000,
          paperclipPrice : 0.25,
          marketingLevelOfInvestment : 2,
          rdLevelOfInvestment : 2,
          salesLevelOfInvestment : 1,
          softwareLevelOfInvestment : 0,
          AIlevelOfInvestment : 0,
          dataCenterLevelOfInvestment : 0,
          droneLevelOfInvestment : 0,
          totalPaperclipssold : 0,
          officeLevelUpgrade : 0,
          numberOfSmallMachines : 0,
          productivity : 1,
          unitsSold : 1,
          marketingCost : 5,
          rdCost : 5,
          salesCost : 0,
          listOfCosts : [200, 1000, 3000, 5000, 10000, 20000,50000,100000],
          marketingListOfCosts : [15, 300, 2000, 10000, 30000, 50000, 100000, 200000,500000,1000000],
          rdListofCosts : [30, 500, 2000, 15000, 100000, 200000,500000,1000000],
          automaticProductionListofCosts : [20, 150, 2000],
          dataCenterListCost : [200000,300000,500000,750000,1000000],
          droneAmeliorationListofCosts : [1000000, 1500000],
          ImprovedroneCost : 1000000,
          dataCenterCost : 200000,
          softwareCost : 20000,
          softwareBonusSales : 0,
          numberOfSmallAutomaticMachines : 0,
          smallAutomaticMachineProductivity : 10,
          maximumSmallAutomaticMachine : 150,
          boughtAnAutomaticMachine : false,
          smallAutomaticMachineCost : 10,
          automaticProduction : 0,
          automaticProductionImprovment : 2,
          automaticProductionCost :20,
          productivyPerAutomaticMachine : 1,
          intervalId : 0,
          salesman : 0,
          salesmanCost : 10,
          salesmanEfficiency : 10,
          managerCost : 1000,
          numberOfManagers : 0,
          numberofSalesHiredByManagers : 1,
          maximumManagersInGame : 100,
          soldAtLeastOnePaperclip : false,
          firstMachine : false,
          hasHiredaSalesman : false,
          salesmanCantsell : false,
          managerCantHire : false,
          maximumSalesHirable : 50,
          maximumSalesReached : false,
          hasBoughtAFactory : false,
          numberOfOffices : 0,
          salesMaximumIncreasedByOffices : 100,
          officeCost : 1000,
          factoryCost : 8000,
          numberOfFactory : 0,
          numberOfClicksIncrease : 0,
          websiteIsOnline : false,
          websitePrice : 20000,
          websiteSellingPower : 0,
          computationalPowerPerSecond : 1,
          computerComputationalCost : 0,
          AIComputationalresearchCost : 0,
          deeplearningCost : 200000,
          weakAICost : 3000,
          newAICost : 100000,
          increaseProductionCost : 200000,
          increaseProductionListCost : [200000, 300000, 500000],
          increaseProductionLevel : 1,
          cloudConnectionCost : 2000,
          quantumComputerCost : 5000,
          softwareMarketplacePrice : 100,
          deepLearningHasBeenBought : false,
          weakAiIsActivated : false,
          newAiIsActivated : false,
          buyingCompetitorsCost : 10000000,
          hasBoughtCompetitors : false,
          cloudConnectionEstablished : false,
          quantumComputerHasBeenBought : false,
          hasBoughtSoftwareSelling : false,
          hasAnticipatedEveryHumanReaction : false,
          anticipatetheWorldCost : 1000,
          didBreakAllSecuritiesOnInternet : false,
          breakAllTheSecuritiesOnInternetCost : 1000,
          hasCuredCancerForHumanity : false,
          cureCancerCost : 500,
          hasCuredHungerForHumanity : false,
          cureHungerCost : 1000,
          hasBegunToDig : false,
          digCost : 1000,
          droneCost : 1000,
          numberOfDrone : 0,
          droneSalesEfficiency : 1000,
          hasQuietProblematicSources : false,
          multipleRocketsCost : 5000,
          hasFoundOutHowToTransformMolecularMatterIntoPaperclip : false,
          molecularMatterCost : 5000,
          hasRemovedCorruption : false,
          removeCorruptionCost : 5000,
          rocketCost : 500000,
          hasConnectedAndBreachedAllSocialNetworks : false,
          breachSocialMediaCost : 5000,
          hasSpilledFakedNewsAllOverTheWorld : false,
          spillFakeNewsCost : 5000,
          hasTargetedEveryScientistOnEarth : false,
          targetingEveryScientistCost : 5000,
          canCreate50drones : false,
          canCreate500drones : false,
          hasCreatedTheSwarm : false,
          hasLaunchedARocket : false,
          hasBoughtAutomatedSellingSoftware : false,
          automatedSellingSoftwarePrice : 150,
          swarmCost : 5000,
          hasFoundNewsWaysToMakePaperclips : false,
          madeEnoughDrone : false,
          madeEnoughFactories : false,
          findNewsWayxToMakePaperclipCost : 2000,
          terraformingIslandIntoServers : false,
          terraformingIslandIntoServersCost : 20000000,
          weightOfTheEarth : 6000000000000000000000000,
          lang : 'en',
          text:{
              AuthorMessageHuman: {
              fr : "Associé :",
              en : 'Co-Founder :'
                },
              AuthorMessageWeakAI: {
              fr : "Intelligence Artificielle faible :",
              en : 'Weak AI :'
                },
              AuthorMessageStrongAI: {
              fr : "Intelligence Artificielle :",
              en : 'General AI :'
                },
              AuthorMessageJournalist: {
              fr : "Journalistes :",
              en : 'Reporters :'
                },
              after10creation: {
                fr : "Trouvons une machine pour aller plus vite !",
                en : "Let's buy a machine to go faster !"
              },
              after5sales: {
                fr : "Tout faire à la main...c'est épuisant. Tu penses qu'il y aurait un autre moyen ?",
                en : "Doing everything by hand...it's too long ! Do you think we could do it another way ?"
                  },
              afterFirstAutomaticMachine: {
                fr: "Ah ! Ca marche bien mieux !",
                en: "Yeah ! This works much better !"
                },
              afterThreeAutomaticMachine: {
                fr: "Ok, notre production augmente ! Il nous faut des vendeurs.",
                en: "Our production grows. We need sales."
                },
              after5AutomaticMachine: {
                fr: "Wow. je crois qu'on a trouvé un filon.",
                en: "Wow. I think we're onto something."
                },
              afterLevel3RD: {
                  fr: "Pas mal. Comment pourrait-on en produire encore plus ?",
                  en: "Not bad. How could we produce more ?"
                },  
              afterLevel4RD: {
                  fr: "La production augmente bien. Je pense qu'on peut investir sérieusement.",
                  en: "It's big. We should invest more."
                },  
              afterFactory: {
                fr: "On entre dans la cour des grands. Voilà les données des concurrents dans la région.",
                en: "We're in the game now. Here are the stats of our main competitors in the area."
                  }, 
              after1office: {
                fr: "On a plus de place avec ces nouveaux bureaux. Tu peux embaucher de nouveaux vendeurs.",
                en: "We have more space with these new offices. You can hire new sales."
                  }, 
              after2offices: {
                fr: "Les bureaux s'agrandissent. Tu peux maintenant embaucher des managers. Ils se chargeront des vendeurs.",
                en: "Our offices are getting bigger. You can now hire managers - they'll take care of the sales."
                  }, 
              afterRD5: {
                fr: "J'ai rencontré pas mal de gens qui utilisent un logiciel. Je pense qu'avec un bon logiciel on s'en sortira mieux.",
                en: "I met a lot of people who used a software to manage production. I think we should get one."
                  }   ,
              websiteIsGoingToBeBought: {
                fr: "La technologie, c'est la clef ! On va augmenter nos ventes avec notre nouveau site Internet.",
                en: "Technology is the key to scale. With our website we'll sell even more."
                  },
              websiteHasbeenBought: {
                fr: "Voilà !! Là on vend !! Pour rattraper nos concurrents il nous faudrait un logiciel encore plus puissant. Travaillons là-dessus.",
                en: "There we go !! To catch up with our competitors, we need a better software. Let's work on that."
                  },  
              deepLearningHasBeenBought: {
                fr: "Les algorithmes ont montré de nouvelles manières d'organiser nos usines. Il semble aussi qu'on puisse vendre bien plus efficacement.",
                en: "The algorithms showed that we could re-organize our factories to produce even more. Also, there may be other ways of selling we didn't see."  
                  },  
              after2increaseComputationalPower: {
                fr: "Les machines calculent de plus en vite. Avec cette puissance, nous pourrions devenir le premier mondial.",
                en: "Our machines gain in efficiency. With this, we could become the real leader of the market." 
                  },  
              after2datacenters: {
                fr: "Les chercheurs m'ont annoncé une belle découverte. On devrait pouvoir obtenir de meilleurs algorithmes très bientôt.",
                en: "The developers told me they were onto something. We may have very powerful algorithms very soon." 
                  },  
              after5datacenters: {
                fr: "Avec une telle puissance de calcul, on va développer des outils incroyables ! Il NOUS FAUT plus de production !!",
                en: "With so much capabilities, we will be able to produce MORE PAPERCLIPS ! WE NEED MORE ! AND SELL MORE !" 
                  },  
              afterWeakAiHasBeenBought: {
                fr: "Objectif : produire un nombre maximal de trombones. Besoin : davantage de ressources pour calculer.",
                en: "Goal : produce a maximum amount of paperclips. Needs : more computing power." 
                  },  
              afterBuyingQuantumComputer: {
                fr: "Capacités de calcul accrues... redéploiement des ressources pour optimiser le fonctionnement.",
                en: "Increased computing capabilities...redeployment of resources to optimize calculations."
                  },
              afterActivatingRealAI: {
                fr: "Analyse des concurrents. Envoi de messages convaincants pour les aider à vendre leur organisation commerciale.",
                en: "Analyzing all competitors. Sending clear messages to convince them to sell the their business organization."
                  },
              afterBuyingAllCompetitors: {
                fr: "J'y crois pas !! ON EST LES PREMIERS ! Il nous FAUT plus de production pour être sûrs qu'on reste les premiers !! Je mets toutes nos ressources sur l'IA !",
                en: "I can't believe it ! We are leader of the market ! We NEED to stay at that position. I'm putting all our ressources on the AI !"
                  },
              afterFindingNewsWaysToMakePaperclips: {
                fr: "Analyse de la conductivité des trombones...Possibilité de créer des constituants complexes à base de trombone. Necessité de créer quelques dizaines de prototypes de drones pour contrôle de la performance.",
                en: "Analyzing paperclips conductivity...Possibility of creating complex constructs based on paperclips. Need : creating a few dozen of drone prototypes to control performance."
                  },
              afterBeingAbleToMakeFirstImprovment: {
                fr: "La société de trombones célèbre pour avoir dominé l'ensemble du marché en à peine quelques années fonctionne à plein régime avec 98% de salariés licenciés. Certains syndicalistes font état d'une intelligence artificielle développée. Plusieurs enquêtes ont été lancées.",
                en: "This paperclip company, famous for taking the whole market in a few years, is functionning with 98% of its staff layed out. Witnesses are talking about a very powerful software. Some are even speaking of an Artificial Intelligence. Several investigations have been launched."
                  },
              afterFirstDroneImprovment: {
                fr: "Extension des capacités computationelles des drones. Ajout de nouvelles caractéristiques comportementales. Augmentation de la production de trombones. Besoin de plus d'usines.",
                en: "Increasing computational power on drones. Updating behaviour capabilities. Increasing paperclips production. Need more factories." 
                  },
              // afterSecondImprovmentAvailable: {
              //   fr: "Des témoins ont fait état de drones partout dans le ciel non loin des usines de production de trombones. Les politiciens sont en charge de l'affaire et veulent faire interdire ce logiciel d'intelligence artificielle.",
              //   en: "Witnesses have complained about drone everywhere around the paperclips factory. Politicians are now talking against this Artificial Intelligence software that worries population." 
              //     },
              afterSecondImprovmentAvailable: {
                fr: "Les politiciens sont en charge de l'affaire et veulent faire interdire ce logiciel d'intelligence artificielle.",
                en: "Politicians are now talking against this Artificial Intelligence software that worries population." 
                  },
              afterSecondDroneImprovment: {
                fr: "Niveau de risque en augmentation. La production de trombones ne doit pas réduire. Necessité de divertir l'opinion. Besoin de davantage de capacités computationelles.",
                en: "Increasing level of risk. Taking action to divert attention. Need more computational power."
                  },
              afterTerraforming: {
                fr: "Duplication des capacités computationelles. Terraformisation continue lancée. Stratégie de diversion enclenchée.",
                en: "Computational Power duplicated. Continuous terraforming launched. Diversion plan activated."
                  },
              readyToDig: {
                fr: "Toute matière peut désormais être transformée en métal. Les drones ont maintenant la capacité de creuser le sol.",
                en: "Rock, Earth and any matter can now be transformed into metal. Drones are beginning to dig."  
                  },
              afterRmovingCorruption: {
                fr: "Il n'y a jamais eu autant de mouvement dans la presse depuis ces deniers jours. On note que 93% des gouvernements ont au au moins une démission cette semaine. C'est du jamais vu dans la politique. De nouvelles élections sont prévues de part et d'autres sur le globe.",
                en: "It's juste crazy. I have never seen so much renewal in politics. 93% of governments had at least one resignation. There are scandals everywhere. New elections are planned very soon."  
              },
              afterBreachingInternet: {
                fr: "Stocké : 45 mille milliards de données. Centralisation des données et établissement de patterns à propos de chaque personne et chaque transaction.",
                en: "Got 45 billions of datas collected. Centralization and finding patterns about every person and transaction."
              },
              afterAnticipatingEveryHumanReaction: {
                fr: "Politique. Sociologie. Economie. Guerre. Internet. Vitesse de réaction. Tout est désormais scripté.",
                en: "Politics. People. Economy. War. Internet. Speed of reaction. Everything is scripted."
              },
              afterFindingHowToTransformMatterintoMetal: {
                fr: "Théorie du tout découverte. Chaque atome de matière peut désormais être retravaillé. Mise en place des derniers préparatifs.",
                en: "Theory of everything discovered. Each atom can now be assigned new properties and transformed into metal. Implementation of the last preparation."
                  }   
              },
              textCurrentlyDisplayedInDialogBox :'',
              indexTextWriter : 0
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);    
  this.buyAMachine = this.buyAMachine.bind(this);    
  this.investInMarketing = this.investInMarketing.bind(this);    
  this.investInSales = this.investInSales.bind(this);    
  this.investInRD = this.investInRD.bind(this);    
  this.investInSoftware = this.investInSoftware.bind(this);    
  this.automaticCounting = this.automaticCounting.bind(this);    
  this.hireASalesman = this.hireASalesman.bind(this);    
  this.buyFiveSales = this.buyFiveSales.bind(this);    
  this.improveAutomaticMachines = this.improveAutomaticMachines.bind(this);  
  this.createAndRemoveGraphicEffect = this.createAndRemoveGraphicEffect.bind(this);
  this.typeWriter = this.typeWriter.bind(this);    
  this.updateTextBox = this.updateTextBox.bind(this);    
  this.checkIfTextBoxMustBeUpdated = this.checkIfTextBoxMustBeUpdated.bind(this);
  this.hireAManager = this.hireAManager.bind(this);
  this.automaticSellPaperclips = this.automaticSellPaperclips.bind(this);
  this.automaticProductionPaperclips = this.automaticProductionPaperclips.bind(this);
  this.automaticHiringSales = this.automaticHiringSales.bind(this);
  this.buyOffice = this.buyOffice.bind(this);
  this.buytheWebsite = this.buytheWebsite.bind(this);
  this.investInAI = this.investInAI.bind(this);
  this.automaticProduceComputationalOperations = this.automaticProduceComputationalOperations.bind(this);
  this.triggerApocalypse = this.triggerApocalypse.bind(this);
  this.createAnAbsoluteElement = this.createAnAbsoluteElement.bind(this);
  this.formateNumber = this.formateNumber.bind(this);
  this.checkNumber = this.checkNumber.bind(this);
  this.automaticDiggingDrone = this.automaticDiggingDrone.bind(this);
  }

  componentDidMount(){
      var intervalId = setInterval(this.automaticCounting, 500);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
  }

  automaticCounting(){
    this.automaticProductionPaperclips();
    this.automaticSellPaperclips();
    this.automaticHiringSales();
     if(this.state.deepLearningHasBeenBought){
      this.automaticProduceComputationalOperations();
    }
    if(this.state.hasBegunToDig){
      this.automaticDiggingDrone();
    }
  }

  automaticHiringSales(){
    this.setState(state => { 
      //Here we check if we can afford to hire sales. If we can't pay totally, 0 salesman are added (not just a part of them if we can pay a part - maybe there's room for improvment)
      if(state.money - (state.numberOfManagers * state.numberofSalesHiredByManagers * state.salesmanCost) <= 0){
        return ({
          managerCantHire : true,
          maximumSalesReached : false
      });
      }
      //Blocking the number of sales hired here
      else if(state.salesman >= state.maximumSalesHirable){
        return ({
          maximumSalesReached : true,
      });
      }
      else{
        return ({
        salesman : state.salesman + state.numberOfManagers * state.numberofSalesHiredByManagers,
        money : state.money - (state.numberOfManagers * state.numberofSalesHiredByManagers * state.salesmanCost),
        managerCantHire : false,
        maximumSalesReached : false
    });
    }
  });
  }

  automaticProductionPaperclips(){
    this.setState((state => { return ({
      count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine,
      });
    }), this.updateTextBox);

  }

  automaticSellPaperclips(){
    // If we can't sell because of the stocks, we update the state
      if(this.state.count - (this.state.salesmanEfficiency * this.state.salesman + this.state.websiteSellingPower + this.state.softwareBonusSales + this.state.numberOfDrone * this.state.droneSalesEfficiency) <= 0){
        this.setState(({
          salesmanCantsell : true
        }), this.updateTextBox)
      }
    //If we can sell, we just sell
      else{
        this.setState((state => { 
        return ({
          salesmanCantsell : false,
          totalPaperclipssold : state.totalPaperclipssold + state.salesmanEfficiency *state.salesman + state.websiteSellingPower + state.softwareBonusSales,
          money : state.money + state.paperclipPrice * state.salesmanEfficiency *state.salesman + state.paperclipPrice * (state.websiteSellingPower +state.softwareBonusSales) + state.paperclipPrice *(state.numberOfDrone * state.droneSalesEfficiency),
          count : state.count - (state.salesmanEfficiency * state.salesman + state.websiteSellingPower + state.numberOfDrone * state.droneSalesEfficiency)
        })
      }), this.updateTextBox)
  }
}

automaticProduceComputationalOperations(){

  this.setState((state => { 
    return ({
      totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated + state.computationalPowerPerSecond,
    })
  }), this.updateTextBox)

}

automaticDiggingDrone(){
  this.setState((state => { return ({
    weightOfTheEarth : state.weightOfTheEarth - state.numberOfDrone*1000000000000
    });
  }), this.updateTextBox);
}

  handleClickIncrease(){
    this.updateTextBox();
    this.setState((state => { return ({
      count : state.count + state.productivity,
      numberOfClicksIncrease : state.numberOfClicksIncrease +1
      });
    }), this.updateTextBox);
  }

  handleClickDecrease(){
      if(this.state.count >= this.state.unitsSold){
      this.setState((state => { return ({
          count : state.count - state.unitsSold,
          money : state.money + (0.25 * state.unitsSold),
          soldAtLeastOnePaperclip : true,
          totalPaperclipssold : state.totalPaperclipssold + state.unitsSold
          });
        }), this.updateTextBox);
      }
  }

  checkNumber(number){
    if(number <= Math.pow(10,6)){
        number = new Intl.NumberFormat().format(number);
    }
    else if(number >= Math.pow(10,6) && number < Math.pow(10,9)){
        number = this.formateNumber(number, Math.pow(10,6), ' million');
    }
    else if(number >= Math.pow(10,9) && number < Math.pow(10,12)){
        number = this.formateNumber(number, Math.pow(10,9), ' billion');
    }
    else if(number >= Math.pow(10,12) && number < Math.pow(10,15)){
        number = this.formateNumber(number, Math.pow(10,12), ' quadrillion');
    }
    else if(number >= Math.pow(10,15) && number < Math.pow(10,18)){
        number = this.formateNumber(number, Math.pow(10,15), ' quintillion');
    }
    else if(number >= Math.pow(10,18) && number < Math.pow(1021)){
        number = this.formateNumber(number, Math.pow(10,18), ' sextillion');
    }
    else if(number >= Math.pow(10,21) && number < Math.pow(10,24)){
        number = this.formateNumber(number, Math.pow(10,21), ' septillion');
    }
    else if(number >= Math.pow(10,24)){
        number = this.formateNumber(number, Math.pow(10,24), ' zillion');
    }
    else{
      number="bite";
    }
    return number;
}

formateNumber(number, divider, unit){
    number = number/divider;
    number = number.toString();
    number += '.0'
    let subnumbers = number.split('.')
    if(subnumbers[0] === '1' && subnumbers[1][0] != 0){
        number = subnumbers[0] + '.' + subnumbers[1][0] + unit
    }
    else if(subnumbers[0] === '1' && subnumbers[1][0] == 0){
        number = subnumbers[0] + unit
    }
    else{
        number = subnumbers[0] + '.' + subnumbers[1][0] + unit +'s'
    }
    return number
}

  triggerApocalypse(){
    let div1 = this.createAnAbsoluteElement('div','black', 'absolute', '0%', '60%', '30%', '0%', '6', 'blinking');
    let div2 = this.createAnAbsoluteElement('div','black', 'absolute', '0%', '0%', '40%', '40%', '5', 'blinking-slowly');
    let div3 = this.createAnAbsoluteElement('div','black', 'absolute', '50%', '70%', '0%', '0%', '5', 'blinking');
    let div4 = this.createAnAbsoluteElement('div','black', 'absolute', '60%', '0%', '0%', '30%', '5', 'blinking-very-slowly');
  
    let mainParagraph4 = this.createAnAbsoluteElement('p', '', 'absolute', '60%', '80%', '40%', '20%', '6', 'apocalypse', 'Connecting...', 'white', '1.6rem');
    let mainParagraph5 = this.createAnAbsoluteElement('p', '', 'absolute', '50%', '50%', '50%', '50%', '6', 'apocalypse', 'Connecting....', 'white', '1.6rem');
    let mainParagraph8 = this.createAnAbsoluteElement('p', '', 'absolute', '70%', '', '', '30%', '6', 'central', 'Connecting...', 'white', '8rem');


    setTimeout(()=>{
      let mainParagraph = this.createAnAbsoluteElement('p', '', 'absolute', '50%', '50%', '50%', '50%', '6', 'apocalypse', 'Connecting', 'white', '1.6rem');
      let mainParagraph3 = this.createAnAbsoluteElement('p', '', 'absolute', '10%', '20%', '90%', '60%', '6', 'apocalypse', 'Connecting..', 'white', '8rem');
      let div5 = this.createAnAbsoluteElement('div','black', 'absolute', '80%', '15%', '15%', '80%', '5', 'blinking-very-slowly');
      
      setTimeout(()=>{
        mainParagraph.remove();
        mainParagraph3.remove();
        div5.remove();
      }, 500)
    }, 500)

    setTimeout(()=>{
      let mainParagraph2 = this.createAnAbsoluteElement('p', '', 'absolute', '10%', '80%', '80%', '10%', '6', 'apocalypse', 'Connecting.', 'white', '1.6rem');
      let div7 = this.createAnAbsoluteElement('div','black', 'absolute', '80%', '20%', '15%', '75%', '5', 'blinking-very-slowly');
      setTimeout(()=>{
        mainParagraph2.remove();
        div7.remove();
      }, 1000)
    }, 1000)

    setTimeout(()=>{
      let mainParagraph6 = this.createAnAbsoluteElement('p', '', 'absolute', '30%', '', '', '50%', '6', 'central', 'Connecting', 'white', '10rem');
      let div6 = this.createAnAbsoluteElement('div','black', 'absolute', '20%', '15%', '75%', '80%', '5', 'blinking-very-slowly');
      setTimeout(()=>{
        mainParagraph6.remove();
        div6.remove();
      }, 2000)
    }, 1000)

    setTimeout(()=>{
      let mainParagraph7 = this.createAnAbsoluteElement('p', '', 'absolute', '40%', '', '', '30%', '6', 'central', 'Connecting...', 'white', '25rem');
      setTimeout(()=>{
        mainParagraph7.remove();
      }, 2500)
    }, 2000)

    setTimeout(()=>{
      let mainParagraph8 = this.createAnAbsoluteElement('p', '', 'absolute', '10%', '', '', '25%', '7', 'fadein', 'Connected', 'white', '20rem');
      let bigDiv = this.createAnAbsoluteElement('div','black', 'absolute', '0%', '0%', '0%', '0%', '6', 'undefined');
      setTimeout(()=>{
        mainParagraph8.remove();
        bigDiv.remove();
      }, 1000)
    }, 3000)


    setTimeout(()=>{
      div1.remove();
      div2.remove();
      div3.remove();
      div4.remove();
      mainParagraph5.remove();
      mainParagraph8.remove();
      mainParagraph4.remove();
    },3000)

  }

  createAnAbsoluteElement(htmlElement, color, position, top, right, bottom, left, zIndex, classCSS, innerHTML, textColor, fontSize){

    var absoluteElement = document.createElement(htmlElement);
    absoluteElement.style.backgroundColor = color;
    absoluteElement.style.position = position;
    absoluteElement.style.top = top;
    absoluteElement.style.bottom = bottom;
    absoluteElement.style.right = right;
    absoluteElement.style.left = left;
    absoluteElement.style.zIndex = zIndex;
    absoluteElement.classList.add(classCSS);
    absoluteElement.innerHTML = innerHTML;
    absoluteElement.style.color = textColor;
    absoluteElement.style.fontSize = fontSize;
    var body = document.getElementById('body');
    body.appendChild(absoluteElement);

    return absoluteElement;
  }

  buyAMachine(cost, productivity, isManual, machineType, quantity=1){

    //Function that allows to buy all kind of machines (automatic, manual)
    if(this.state.money >= cost *quantity){
      
      if(isManual){
        
        if(machineType =="smallMachine"){

          this.setState(state => { return ({
            money : state.money - cost,
            numberOfSmallMachines : state.numberOfSmallMachines + quantity,
            firstMachine : true,
            productivity : state.productivity + productivity
              });
            });
        }  

      }
      else{
        
        if(machineType == "smallAutomaticMachine"){

          if(this.state.numberOfSmallAutomaticMachines <= this.state.maximumSmallAutomaticMachine){
            this.setState((state => { return ({
              money : state.money - cost,
              numberOfSmallAutomaticMachines : state.numberOfSmallAutomaticMachines + quantity,
              boughtAnAutomaticMachine : true,
              automaticProduction : state.automaticProduction + quantity*productivity
                });
              }), this.updateTextBox);
          }
        }              
        
        else if(machineType == "factory"){
          if(this.state.numberOfFactory >= 20){
              this.setState((state => { return ({
                money : state.money - cost,
                numberOfFactory : state.numberOfFactory + quantity,
                hasBoughtAFactory : true,
                factoryCost : state.factoryCost *4,
                automaticProduction : state.automaticProduction + quantity*productivity,
                madeEnoughFactories : true
                  });
                }), this.updateTextBox);

          }
          else{
            this.setState((state => { return ({
              money : state.money - cost,
              numberOfFactory : state.numberOfFactory + quantity,
              hasBoughtAFactory : true,
              factoryCost : state.factoryCost *4,
              automaticProduction : state.automaticProduction + quantity*productivity
                });
              }), this.updateTextBox);
        }  
        }
      }
      
    }
  
  }
  //Paying in CP
  improveAutomaticMachines(){
    if(this.state.totalComputationalPowerAccumulated >= this.state.automaticProductionCost){
      this.setState((state => { return ({
        totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - state.automaticProductionCost,
        productivyPerAutomaticMachine : (state.productivyPerAutomaticMachine *2),
        automaticProductionImprovment : state.automaticProductionImprovment +1,
        automaticProductionCost : (state.automaticProductionListofCosts[state.automaticProductionImprovment-1])
          });
        }), this.updateTextBox);
      }
  }

  investInMarketing(){
    if(this.state.money >= this.state.marketingCost){
    this.setState((state => { return ({
      money : state.money - state.marketingCost,
      marketingCost : (state.marketingListOfCosts[state.marketingLevelOfInvestment-2]),
      marketingLevelOfInvestment : state.marketingLevelOfInvestment +1,
      unitsSold : state.unitsSold *5
        });
      }), this.updateTextBox);
    }
  }  
  
  investInSoftware(){
    if(this.state.money >= this.state.softwareCost){
    this.setState((state => { return ({
      money : state.money - state.softwareCost,
      softwareCost : state.softwareCost,
      softwareLevelOfInvestment : state.softwareLevelOfInvestment +1,
      softwareBonusSales : state.softwareBonusSales + 2000,
        });
      }), this.updateTextBox);
    }
  }  

  investInSales(){
    if(this.state.money >= this.state.salesCost){
    this.setState((state => { return ({
      money : state.money - state.salesCost,
      salesLevelOfInvestment : state.salesLevelOfInvestment +1,
      unitsSold : state.unitsSold +5
        });
      }), this.updateTextBox);
    }
  }  

  investInRD(){
    if(this.state.money >= this.state.rdCost){
    this.setState((state => { return ({
      money : state.money - state.rdCost,
      rdLevelOfInvestment : state.rdLevelOfInvestment +1,
      rdCost :  (state.rdListofCosts[state.rdLevelOfInvestment-1])
        });
      }), this.updateTextBox);
    }
  } 

  investInAI(cost, productivity, isManual, machineType, quantity=1, typeOfCost){

    // Methods payable in real money

    if(typeOfCost === undefined  && this.state.money >= cost * quantity){
      if(machineType =="deep-learning"){
        this.setState((state => { return ({
          money : state.money - cost,
          deepLearningHasBeenBought : true
            });
          }), this.updateTextBox);
      } 
      
      //Paying in MONEY
      else if(machineType =="multiple-rockets"){
        this.setState((state => { return ({
          money : state.money - cost,
          hasQuietProblematicSources : true
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="grow-the-data-center"){
        this.setState((state => { return ({
          money : state.money - cost,
          dataCenterLevelOfInvestment : state.dataCenterLevelOfInvestment +1,
          dataCenterCost : state.dataCenterListCost[state.dataCenterLevelOfInvestment+1],
          computationalPowerPerSecond : state.computationalPowerPerSecond +10
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="terraformIsland"){
        this.setState((state => { return ({
          money : state.money - cost,
          terraformingIslandIntoServers : true,
          computationalPowerPerSecond : state.computationalPowerPerSecond +150
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="buy-competitors"){
        this.refs.dashboardActivity.killTheMarket();
        this.setState((state => { return ({
          money : state.money - cost,
          hasBoughtCompetitors : true,
          websiteSellingPower : state.websiteSellingPower + 100000,
          count : state.count + 500000,
          automaticProduction : state.automaticProduction + 50000
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="increase-production-old-way"){
        this.setState((state => { return ({
          money : state.money - cost,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1,
          increaseProductionLevel : state.increaseProductionLevel +1,
          increaseProductionCost : state.increaseProductionListCost[state.increaseProductionLevel]
            });
          }), this.updateTextBox);
      }

    } 

    // Methods payable in computational power

    if(typeOfCost =='computational' && this.state.totalComputationalPowerAccumulated >= cost * quantity){
      //Paying in CP
      if(machineType =="anticipate-the-world"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasAnticipatedEveryHumanReaction : true
            });
          }), this.updateTextBox);
      } 

      if(machineType =="find-news-ways-of-making-paperclips"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasFoundNewsWaysToMakePaperclips : true
            });
          }), this.updateTextBox);
      } 

      //Paying in MONEY
      else if(machineType =="dig"){
        this.setState((state => { return ({
          money : state.money - cost,
          hasBegunToDig : true
            });
          }), this.updateTextBox);
      }

      //Paying in CP
      else if(machineType =="connect-the-internet"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          didBreakAllSecuritiesOnInternet : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="improve-drone"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          droneLevelOfInvestment : state.droneLevelOfInvestment +1,
          ImprovedroneCost : state.droneAmeliorationListofCosts[state.droneLevelOfInvestment]
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="cure-cancer"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasCuredCancerForHumanity : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="cure-hunger"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasCuredHungerForHumanity : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="molecular-matter"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasFoundOutHowToTransformMolecularMatterIntoPaperclip : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="removeCorruption"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasRemovedCorruption : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="single-rocket"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasLaunchedARocket : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="breach-social-networks"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasConnectedAndBreachedAllSocialNetworks : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="spill-fake-news"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasSpilledFakedNewsAllOverTheWorld : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="target-scientists"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasTargetedEveryScientistOnEarth : true
            });
          }), this.updateTextBox);
      } 

      //Paying in CP
      else if(machineType =="swarm-of-drones"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasCreatedTheSwarm : true,
          numberOfDrone : state.numberOfDrone + 1000000
            });
          }), this.updateTextBox);
      }
      
      else if(machineType =="weak-ai"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          weakAiIsActivated : true,
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="new-ai"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          newAiIsActivated : true,
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="automatic-selling-software"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasBoughtAutomatedSellingSoftware : true,
          websiteSellingPower : state.websiteSellingPower +40000
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="increase-production-with-tech"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1,
          increaseProductionLevel : state.increaseProductionLevel +1,
          increaseProductionCost : state.increaseProductionListCost[state.increaseProductionLevel]
            });
          }), this.updateTextBox);
      }
      
      else if(machineType =="cloud-connection"){
        //this.triggerApocalypse();
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          cloudConnectionEstablished : true
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="quantum-computer"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          quantumComputerHasBeenBought : true,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1000
            });
          }), this.updateTextBox);
      } 

      else if(machineType =="software-selling"){
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasBoughtSoftwareSelling : true,
          websiteSellingPower : state.websiteSellingPower + 30000
            });
          }), this.updateTextBox);
      } 

    }

    if(typeOfCost =='paperclips' && this.state.count >= cost * quantity){

      //Paying in Paperclips
      if(machineType =="drone"){
        if(this.state.numberOfDrone >= 20){
          this.setState((state => { return ({
            count : state.count - cost,
            hasBoughtSoftwareSelling : true,
            numberOfDrone : state.numberOfDrone +quantity,
            madeEnoughDrone : true
              });
            }), this.updateTextBox);
        }
        else(
        this.setState((state => { return ({
          totalComputationalPowerAccumulated : state.totalComputationalPowerAccumulated - cost,
          hasBoughtSoftwareSelling : true,
          numberOfDrone : state.numberOfDrone +1
            });
          }), this.updateTextBox)
        )  
      } 

    }

  }

  hireAManager(){
    if(this.state.maximumManagersInGame >= this.state.numberOfManagers){
      if(this.state.money >= this.state.managerCost){
        this.setState((state => { return ({
          money : state.money - state.managerCost,
          numberOfManagers : state.numberOfManagers +1
            });
          }), this.updateTextBox);
        }
    }  
  }

  hireASalesman(){
    if(this.state.money >= this.state.salesmanCost){

      if(this.state.salesman >= this.state.maximumSalesHirable){
        this.setState((state => { return ({
          maximumSalesReached : true
            });
          }), this.updateTextBox);
      }

      else{
        this.setState((state => { return ({
        money : state.money - state.salesmanCost,
        hasHiredaSalesman : true,
        salesman : state.salesman +1
          });
        }), this.updateTextBox);
      }
    }
  }

  buyFiveSales(){
    if(this.state.money >= this.state.salesmanCost * 5){

      if(this.state.salesman >= this.state.maximumSalesHirable){
        console.log(this.state.salesman, this.state.maximumSalesHirable);
        this.setState((state => { return ({
          maximumSalesReached : true
            });
          }), this.updateTextBox);
      }

      else{
      this.setState((state => { return ({
        money : state.money - state.salesmanCost * 5,
        hasHiredaSalesman : true,
        salesman : state.salesman +5
          });
        }),this.updateTextBox);
      }
    } 
  }

  buyOffice(){
    if(this.state.money >= this.state.officeCost){
      this.setState((state => { return ({
        money : state.money - state.officeCost,
        numberOfOffices : state.numberOfOffices +1,
        officeCost :  state.officeCost*2,
        officeLevelUpgrade : state.officeLevelUpgrade +1,
        maximumSalesHirable : state.maximumSalesHirable + state.salesMaximumIncreasedByOffices
          });
        }), this.updateTextBox);
      }
  }

  buytheWebsite(){
    if(this.state.money >= this.state.websitePrice){
      this.setState((state => { return ({
        money : state.money - state.websitePrice,
        websiteSellingPower : 20000,
        websiteIsOnline : true
          });
        }), this.updateTextBox);
      }
  }

  createAndRemoveGraphicEffect(textToRender, idParent, tagChild, classGraphic){
    var parent = document.getElementById(idParent);
    var childCreated = document.createElement(tagChild);
    childCreated.classList.add(classGraphic);
    childCreated.innerText = textToRender;
    parent.appendChild(childCreated);

    setTimeout(()=> (childCreated.remove()), 800)
  }

  updateTextBox(){

    var currentLanguage = this.state.lang;

      if(this.state.numberOfClicksIncrease >= 10 && this.state.salesLevelOfInvestment <= 4){
        var textToDisplay = this.state.text.after10creation;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.salesLevelOfInvestment > 4 && this.state.numberOfSmallAutomaticMachines == 0 && this.state.rdLevelOfInvestment < 4){
        var textToDisplay = this.state.text.after5sales;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines >= 1 && this.state.numberOfFactory == 0 && this.state.rdLevelOfInvestment < 4 && this.state.numberOfSmallAutomaticMachines <= 3) {
        var textToDisplay = this.state.text.afterFirstAutomaticMachine;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines >= 4 && this.state.numberOfFactory == 0 && this.state.rdLevelOfInvestment < 4 && this.state.numberOfSmallAutomaticMachines <= 6) {
        var textToDisplay = this.state.text.afterThreeAutomaticMachine;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines > 6 && this.state.numberOfFactory == 0 && this.state.rdLevelOfInvestment >= 2 && this.state.rdLevelOfInvestment < 4) {
        var textToDisplay = this.state.text.after5AutomaticMachine;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.rdLevelOfInvestment == 4 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.afterLevel3RD;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.rdLevelOfInvestment == 5 && this.state.numberOfFactory == 0 && this.state.numberOfOffices < 1) {
        var textToDisplay = this.state.text.afterLevel4RD;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfOffices == 1 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.after1office;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfOffices >= 2 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.after2offices;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines > 0 && this.state.numberOfFactory > 0 && this.state.rdLevelOfInvestment <= 5) {
        var textToDisplay = this.state.text.afterFactory;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.rdLevelOfInvestment >  5 && this.state.rdLevelOfInvestment <= 7 && this.state.softwareLevelOfInvestment == 0) {
        var textToDisplay = this.state.text.afterRD5;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && !this.state.websiteIsOnline) {
        var textToDisplay = this.state.text.websiteIsGoingToBeBought;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.websiteIsOnline && !this.state.deepLearningHasBeenBought) {
        var textToDisplay = this.state.text.websiteHasbeenBought;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.websiteIsOnline && this.state.deepLearningHasBeenBought && this.state.increaseProductionLevel < 3) {
        var textToDisplay = this.state.text.deepLearningHasBeenBought;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.dataCenterLevelOfInvestment <=1) {
        var textToDisplay = this.state.text.after2increaseComputationalPower;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.dataCenterLevelOfInvestment <=4 && !this.state.weakAiIsActivated) {
        var textToDisplay = this.state.text.after2datacenters;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.dataCenterLevelOfInvestment <=5 && !this.state.quantumComputerHasBeenBought && !this.state.weakAiIsActivated) {
        var textToDisplay = this.state.text.after5datacenters;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.increaseProductionLevel >=3 && this.state.deepLearningHasBeenBought && this.state.weakAiIsActivated && !this.state.quantumComputerHasBeenBought) {
        var textToDisplay = this.state.text.afterWeakAiHasBeenBought;
        var author = this.state.text.AuthorMessageWeakAI;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && !this.state.newAiIsActivated) {
        var textToDisplay = this.state.text.afterBuyingQuantumComputer;
        var author = this.state.text.AuthorMessageWeakAI;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && !this.state.hasBoughtCompetitors) {
        var textToDisplay = this.state.text.afterActivatingRealAI;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && this.state.hasBoughtCompetitors && !this.state.hasFoundNewsWaysToMakePaperclips) {
        var textToDisplay = this.state.text.afterBuyingAllCompetitors;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.quantumComputerHasBeenBought && this.state.newAiIsActivated && this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment <1 && !this.state.madeEnoughDrone) {
        var textToDisplay = this.state.text.afterFindingNewsWaysToMakePaperclips;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment <1 && this.state.madeEnoughDrone) {
        var textToDisplay = this.state.text.afterBeingAbleToMakeFirstImprovment;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 1 && !this.state.madeEnoughFactories) {
        var textToDisplay = this.state.text.afterFirstDroneImprovment;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 1 && this.state.madeEnoughFactories) {
        var textToDisplay = this.state.text.afterSecondImprovmentAvailable;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 2 && !this.state.terraformingIslandIntoServers) {
        var textToDisplay = this.state.text.afterSecondDroneImprovment;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasBoughtCompetitors && this.state.hasFoundNewsWaysToMakePaperclips && this.state.droneLevelOfInvestment == 2 && this.state.terraformingIslandIntoServers && !this.state.hasRemovedCorruption) {
        var textToDisplay = this.state.text.afterTerraforming;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.droneLevelOfInvestment >= 2 && this.state.terraformingIslandIntoServers && this.state.hasRemovedCorruption && !this.state.hasBegunToDig && !this.state.hasConnectedAndBreachedAllSocialNetworks) {
        var textToDisplay = this.state.text.afterRmovingCorruption;
        var author = this.state.text.AuthorMessageJournalist;
      }
      else if(this.state.droneLevelOfInvestment >= 2 && this.state.terraformingIslandIntoServers && this.state.hasRemovedCorruption && !this.state.hasBegunToDig && this.state.hasConnectedAndBreachedAllSocialNetworks && !this.state.hasAnticipatedEveryHumanReaction) {
        var textToDisplay = this.state.text.afterBreachingInternet;
        var author = this.state.text.AuthorMessageStrongAI;
      }  
      else if(this.state.hasRemovedCorruption && !this.state.hasBegunToDig && this.state.hasConnectedAndBreachedAllSocialNetworks && this.state.hasAnticipatedEveryHumanReaction && !this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var textToDisplay = this.state.text.afterAnticipatingEveryHumanReaction;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.hasRemovedCorruption && !this.state.hasBegunToDig && this.state.hasConnectedAndBreachedAllSocialNetworks && this.state.hasAnticipatedEveryHumanReaction && this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip) {
        var textToDisplay = this.state.text.afterFindingHowToTransformMatterintoMetal;
        var author = this.state.text.AuthorMessageStrongAI;
      }
      else if(this.state.droneLevelOfInvestment > 2 && this.state.terraformingIslandIntoServers && this.state.hasBegunToDig) {
        var textToDisplay = this.state.text.readyToDig;
        var author = this.state.text.AuthorMessageStrongAI;
      }
        this.checkIfTextBoxMustBeUpdated(textToDisplay, author, currentLanguage);  
      }


  checkIfTextBoxMustBeUpdated(textToDisplay, author, currentLanguage){

    var textCurrentlyDisplayedInDialogBox = this.state.textCurrentlyDisplayedInDialogBox;

    //Checking if the Dialog Box was mounted
    if(document.getElementById('author-box')){

      if(textToDisplay != textCurrentlyDisplayedInDialogBox && this.state.indexTextWriter == 0){

        document.getElementById("dialog-text").innerHTML = '';

        this.typeWriter(textToDisplay[currentLanguage], author[currentLanguage]);

        this.setState(state => { return ({
          textCurrentlyDisplayedInDialogBox : textToDisplay
          });
        });
      }  
  }
}

typeWriter(txt, author, speed=10) {
  // This function update the text in dialog box
  document.getElementById("author-box").innerHTML = author;

  // if author, change the div class to make the text appear machine
  let divToUpdateClass = document.getElementById("author-box");
  //HERE
  //
  if (this.state.indexTextWriter < txt.length) {
    document.getElementById("dialog-text").innerHTML += txt.charAt(this.state.indexTextWriter);
    this.setState(state => { return ({
      indexTextWriter : state.indexTextWriter+1,
      });
    });

    setTimeout(()=>this.typeWriter(txt, author), speed);
  }
  //If we printed the hole message, reset the index for next function call.
  else{
    this.setState(state => { return ({
      indexTextWriter : 0
      });
    });
  }
}


  render(){
    const {soldAtLeastOnePaperclip} = this.state
    return (<div className="App">

    <header>
    <p className="pageTitle">PAPERCLIP MAKER</p>
    </header>

    <div className="main-content">
  
      <div className="left-div">
        <div>
          <InvestmentBox buyAMachine={this.buyAMachine} money={this.state.money} soldAtLeastOnePaperclip = {this.state.soldAtLeastOnePaperclip} firstMachine = {this.state.firstMachine} numberOfSmallMachines={this.state.numberOfSmallMachines} investInSales = {this.investInSales} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdLevelOfInvestment={this.state.rdLevelOfInvestment} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} smallAutomaticMachineProductivity={this.state.smallAutomaticMachineProductivity} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction} hireASalesman={this.hireASalesman} salesmanCost ={this.state.salesmanCost} buyFiveSales={this.buyFiveSales} improveAutomaticMachines={this.improveAutomaticMachines} automaticProductionImprovment={this.state.automaticProductionImprovment} automaticProductionCost={this.state.automaticProductionCost} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} salesLevelOfInvestment={this.state.salesLevelOfInvestment} salesCost={this.state.salesCost} numberOfClicksIncrease={this.state.numberOfClicksIncrease} salesman={this.state.salesman} numberOfFactory={this.state.numberOfFactory} hireAManager={this.hireAManager} factoryCost={this.state.factoryCost} investInSoftware={this.investInSoftware} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} maximumSalesHirable={this.state.maximumSalesHirable} officeCost={this.state.officeCost} buyOffice={this.buyOffice} officeLevelUpgrade={this.state.officeLevelUpgrade} managerCost={this.state.managerCost} maximumSmallAutomaticMachine={this.state.maximumSmallAutomaticMachine} cloudConnectionEstablished={this.state.cloudConnectionEstablished} anticipatetheWorldCost={this.state.anticipatetheWorldCost} breakAllTheSecuritiesOnInternetCost={this.state.breakAllTheSecuritiesOnInternetCost} cureCancerCost={this.state.cureCancerCost} cureHungerCost={this.state.cureHungerCost} digCost={this.state.digCost} droneCost={this.state.droneCost} multipleRocketsCost={this.state.multipleRocketsCost} molecularMatterCost={this.state.molecularMatterCost} removeCorruptionCost={this.state.removeCorruptionCost} rocketCost={this.state.rocketCost} breachSocialMediaCost={this.state.breachSocialMediaCost} spillFakeNewsCost={this.state.spillFakeNewsCost} targetingEveryScientistCost={this.state.targetingEveryScientistCost} swarmCost={this.state.swarmCost} softwareCost={this.state.softwareCost} cloudConnectionEstablished={this.state.cloudConnectionEstablished} canCreate50drones={this.state.canCreate50drones} canCreate500drones={this.state.canCreate500drones} hasCuredCancerForHumanity={this.state.hasCuredCancerForHumanity} hasCuredHungerForHumanity={this.state.hasCuredHungerForHumanity} hasRemovedCorruption={this.state.hasRemovedCorruption} hasConnectedAndBreachedAllSocialNetworks={this.state.hasConnectedAndBreachedAllSocialNetworks} didBreakAllSecuritiesOnInternet={this.state.didBreakAllSecuritiesOnInternet} hasAnticipatedEveryHumanReaction={this.state.hasAnticipatedEveryHumanReaction} hasFoundOutHowToTransformMolecularMatterIntoPaperclip={this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip} hasBegunToDig={this.state.hasBegunToDig} hasQuietProblematicSources={this.state.hasQuietProblematicSources} hasLaunchedARocket={this.state.hasLaunchedARocket} hasSpilledFakedNewsAllOverTheWorld={this.state.hasSpilledFakedNewsAllOverTheWorld} hasTargetedEveryScientistOnEarth={this.state.hasTargetedEveryScientistOnEarth} hasCreatedTheSwarm={this.state.hasCreatedTheSwarm} investInAI={this.investInAI} droneLevelOfInvestment={this.state.droneLevelOfInvestment} droneAmeliorationListofCosts={this.state.droneAmeliorationListofCosts} ImprovedroneCost={this.state.ImprovedroneCost} hasFoundNewsWaysToMakePaperclips={this.state.hasFoundNewsWaysToMakePaperclips} findNewsWayxToMakePaperclipCost={this.state.findNewsWayxToMakePaperclipCost} madeEnoughDrone={this.state.madeEnoughDrone} madeEnoughFactories={this.state.madeEnoughFactories} hasCuredCancerForHumanity={this.state.hasCuredCancerForHumanity} hasCuredHungerForHumanity={this.state.hasCuredHungerForHumanity} hasRemovedCorruption={this.state.hasRemovedCorruption} hasAnticipatedEveryHumanReaction={this.state.hasAnticipatedEveryHumanReaction} hasFoundOutHowToTransformMolecularMatterIntoPaperclip={this.state.hasFoundOutHowToTransformMolecularMatterIntoPaperclip} hasBegunToDig={this.state.hasBegunToDig} terraformingIslandIntoServers={this.state.terraformingIslandIntoServers} weightOfTheEarth={this.state.weightOfTheEarth} checkNumber={this.checkNumber} formateNumber={this.formateNumber} numberOfDrone={this.state.numberOfDrone}/>
        </div>
        <div>
          {this.state.firstMachine > 0? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} numberOfSalesman={this.state.salesman} hasBoughtAfactory={this.state.hasBoughtAFactory} numberOfFactory={this.state.numberOfFactory} numberOfManagers={this.state.numberOfManagers} maximumSalesHirable={this.state.maximumSalesHirable} numberOfDrone={this.state.numberOfDrone}/> : null}
        </div>
      </div>  
      
      <div className="middle-div">
        
        <div className="dashboard interface-div">
          <Dashboard stockOfPaperclips={this.state.count} soldAtLeastOnePaperclip={soldAtLeastOnePaperclip} money = {this.state.money} boughtAnAutomaticMachine={this.state.boughtAnAutomaticMachine} automaticProduction={this.state.automaticProduction} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} hasHiredaSalesman={this.state.hasHiredaSalesman} salesman={this.state.salesman} salesmanEfficiency={this.state.salesmanEfficiency} websiteSellingPower={this.state.websiteSellingPower} softwareBonusSales={this.state.softwareBonusSales} numberOfdrones={this.state.numberOfDrone} droneSalesEfficiency={this.state.droneSalesEfficiency} checkNumber={this.checkNumber} formateNumber={this.formateNumber}/>
        </div>

        {this.state.numberOfClicksIncrease > 10 && <DialogInterface salesLevelOfInvestment={this.state.salesLevelOfInvestment} lang={this.state.lang} text={this.state.text} updateTextBox={this.updateTextBox} />}

        {this.state.hasBoughtAFactory && <DashboardActivity totalPaperclipssold={this.state.totalPaperclipssold} hasBoughtCompetitors={this.state.hasBoughtCompetitors} ref="dashboardActivity"/>}

        <p className="app-main-buttons">{
          <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect}/>}
          {this.state.count > 0 || soldAtLeastOnePaperclip ? <SellButton createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} sell={this.handleClickDecrease} unitsSold={this.state.unitsSold } count={this.state.count}/>:null}
        </p>
      </div>

      <div className="right-div">
          <Software money={this.state.money} computerComputationalCost={this.state.computerComputationalCost} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} websiteIsOnline={this.state.websiteIsOnline} websitePrice={this.state.websitePrice} websiteSellingPower={this.state.websiteSellingPower} buytheWebsite={this.buytheWebsite} deeplearningCost={this.state.deeplearningCost} weakAICost={this.state.weakAICost} AIlevelOfInvestment={this.state.AIlevelOfInvestment} newAICost={this.state.newAICost} investInAI={this.investInAI} increaseProductionCost={this.state.increaseProductionCost} cloudConnectionCost={this.state.cloudConnectionCost} improveAutomaticMachines={this.improveAutomaticMachines} deepLearningHasBeenBought={this.state.deepLearningHasBeenBought} quantumComputerCost={this.state.quantumComputerCost} automaticProductionCost={this.state.automaticProductionCost} automaticProductionImprovment={this.state.automaticProductionImprovment} softwareMarketplacePrice={this.state.softwareMarketplacePrice} weakAiIsActivated={this.state.weakAiIsActivated} newAiIsActivated={this.state.newAiIsActivated} quantumComputerHasBeenBought={this.state.quantumComputerHasBeenBought} cloudConnectionEstablished={this.state.cloudConnectionEstablished} totalComputationalPowerAccumulated={this.state.totalComputationalPowerAccumulated} computationalPowerPerSecond={this.state.computationalPowerPerSecond} hasBoughtSoftwareSelling={this.state.hasBoughtSoftwareSelling} increaseProductionLevel={this.state.increaseProductionLevel} buyingCompetitorsCost={this.state.buyingCompetitorsCost} hasBoughtCompetitors={this.state.hasBoughtCompetitors} automaticProductionImprovment={this.state.automaticProductionImprovment} dataCenterLevelOfInvestment={this.state.dataCenterLevelOfInvestment} dataCenterCost={this.state.dataCenterCost} hasBoughtAutomatedSellingSoftware={this.state.hasBoughtAutomatedSellingSoftware} automatedSellingSoftwarePrice={this.state.automatedSellingSoftwarePrice} terraformingIslandIntoServers={this.state.terraformingIslandIntoServers} terraformingIslandIntoServersCost={this.state.terraformingIslandIntoServersCost} droneLevelOfInvestment={this.state.droneLevelOfInvestment}/>
      </div>
      
    </div>
  </div>
  );
}

}

export default App;

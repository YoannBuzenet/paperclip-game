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
          count : 1000000,
          money : 1000000,
          paperclipPrice : 0.25,
          marketingLevelOfInvestment : 2,
          rdLevelOfInvestment : 2,
          salesLevelOfInvestment : 1,
          softwareLevelOfInvestment : 0,
          AIlevelOfInvestment : 0,
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
          automaticProductionListofCosts : [20, 50, 200],
          softwareCost : 20000,
          numberOfSmallAutomaticMachines : 0,
          smallAutomaticMachineProductivity : 10,
          maximumSmallAutomaticMachine : 700,
          boughtAnAutomaticMachine : false,
          smallAutomaticMachineCost : 10,
          automaticProduction : 0,
          automaticProductionImprovment : 2,
          automaticProductionCost :200,
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
          totalComputationalPowerAccumulated : 0,
          computerComputationalCost : 0,
          AIComputationalresearchCost : 0,
          deeplearningCost : 30000,
          weakAICost : 30000,
          newAICost : 1000,
          increaseProductionCost : 20,
          increaseProductionListCost : [20, 100, 500],
          increaseProductionLevel : 0,
          cloudConnectionCost : 2000,
          quantumComputerCost : 15000,
          softwareMarketplacePrice : 20,
          deeplearningHasBeenBought : false,
          weakAiIsActivated : false,
          newAiIsActivated : false,
          cloudConnectionEstablished : false,
          quantumComputerHasBeenBought : false,
          hasBoughtSoftwareSelling : false,
          lang : 'en',
          text:{
              AuthorMessageHuman: {
              fr : "Associé :",
              en : 'Co-Founder :'
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
                fr: "Avec un logiciel on s'en sortira mieux.",
                en: "With a software we'll manage our business better."
                  }   ,
              websiteIsGoingToBeBought: {
                fr: "La technologie, c'est la clef ! On va augmenter nos ventes avec notre nouveau site Internet.",
                en: "Technology is the key to scale. With our website we'll sell even more."
                  },
              websiteHasbeenBought: {
                fr: "Voilà !! Là on vend !! Pour rattraper nos concurrents il nous faut un logiciel encore plus puissant. Au fait, j'ai embauché des chercheurs pour avancer.",
                en: "There we go !! To get up to our competitors, we need an even better software. By the way, I've hired scientists to help."
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
    if(this.state.deeplearningHasBeenBought){
      this.automaticProduceComputationalOperations();
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
      if(this.state.count - (this.state.salesmanEfficiency * this.state.salesman + this.state.websiteSellingPower) <= 0){
        this.setState(({
          salesmanCantsell : true
        }), this.updateTextBox)
      }
    //If we can sell, we just sell
      else{
        this.setState((state => { 
        return ({
          salesmanCantsell : false,
          totalPaperclipssold : state.totalPaperclipssold + state.salesmanEfficiency *state.salesman + state.websiteSellingPower,
          money : state.money + state.paperclipPrice * state.salesmanEfficiency *state.salesman + state.paperclipPrice * state.websiteSellingPower,
          count : state.count - (state.salesmanEfficiency * state.salesman + state.websiteSellingPower)
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

  handleClickIncrease(){
    this.updateTextBox();
    this.triggerApocalypse();
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

  triggerApocalypse(){
    this.createAnAbsoluteElement('div','black', 'absolute', '0%', '0%', '40%', '40%', '5');
    this.createAnAbsoluteElement('div','black', 'absolute', '50%', '70%', '0%', '0%', '5');
    let mainParagraph = this.createAnAbsoluteElement('p', '', 'absolute', '50%', '50%', '50%', '50%', '6');
    mainParagraph.innerHTML = "Connecting";
    mainParagraph.style.color = "white";

  }

  createAnAbsoluteElement(htmlElement, color, position, top, right, bottom, left, zIndex){

    var blackDiv1 = document.createElement(htmlElement);
    blackDiv1.style.backgroundColor = color;
    blackDiv1.style.position = position;
    blackDiv1.style.top = top;
    blackDiv1.style.bottom = bottom;
    blackDiv1.style.right = right;
    blackDiv1.style.left = left;
    blackDiv1.style.zIndex = zIndex;
    var body = document.getElementById('body');
    body.appendChild(blackDiv1);

    return blackDiv1;
  }

  buyAMachine(cost, productivity, isManual, machineType, quantity){

    //Function that allows to buy all kind of machines (automatic, manual)
    if(this.state.money >= cost){
      
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
          this.setState((state => { return ({
            money : state.money - cost,
            numberOfFactory : state.numberOfFactory + 1,
            hasBoughtAFactory : true,
            factoryCost : state.factoryCost *4,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            }), this.updateTextBox);
        }
      }
      
    }
  
  }

  improveAutomaticMachines(){
    if(this.state.money >= this.state.automaticProductionCost){
      this.setState((state => { return ({
        money : state.money - state.automaticProductionCost,
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

  investInAI(cost, productivity, isManual, machineType, quantity){

    if(this.state.money >= cost){

      if(machineType =="deep-learning"){

        this.setState(state => { return ({
          money : state.money - cost,
          deeplearningHasBeenBought : true
            });
          });
      } 

      else if(machineType =="weak-ai"){
        this.setState(state => { return ({
          money : state.money - cost,
          weakAiIsActivated : true,
            });
          });
      } 

      else if(machineType =="new-ai"){
        this.setState(state => { return ({
          money : state.money - cost,
          newAiIsActivated : true,
            });
          });
      } 

      else if(machineType =="increase-production"){
        this.setState(state => { return ({
          money : state.money - cost,
          computationalPowerPerSecond : state.computationalPowerPerSecond +1,
          increaseProductionCost : state.increaseProductionCost[state.increaseProductionLevel]
            });
          });
      } 

      else if(machineType =="cloud-connection"){
        this.setState(state => { return ({
          money : state.money - cost,
          cloudConnectionEstablished : true
            });
          });
      } 

      else if(machineType =="quantum-computer"){
        this.setState(state => { return ({
          money : state.money - cost,
          quantumComputerHasBeenBought : true
            });
          });
      } 

      else if(machineType =="software-selling"){
        this.setState(state => { return ({
          computerComputationalCost : state.computerComputationalCost - cost,
          hasBoughtSoftwareSelling : true
            });
          });
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
        console.log(this.state.salesman, this.state.maximumSalesHirable);
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
      else if(this.state.softwareLevelOfInvestment > 0 && this.state.websiteIsOnline) {
        var textToDisplay = this.state.text.websiteHasbeenBought;
        var author = this.state.text.AuthorMessageHuman;
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
          <InvestmentBox buyAMachine={this.buyAMachine} money={this.state.money} soldAtLeastOnePaperclip = {this.state.soldAtLeastOnePaperclip} firstMachine = {this.state.firstMachine} numberOfSmallMachines={this.state.numberOfSmallMachines} investInSales = {this.investInSales} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdLevelOfInvestment={this.state.rdLevelOfInvestment} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} smallAutomaticMachineProductivity={this.state.smallAutomaticMachineProductivity} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction} hireASalesman={this.hireASalesman} salesmanCost ={this.state.salesmanCost} buyFiveSales={this.buyFiveSales} improveAutomaticMachines={this.improveAutomaticMachines} automaticProductionImprovment={this.state.automaticProductionImprovment} automaticProductionCost={this.state.automaticProductionCost} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} salesLevelOfInvestment={this.state.salesLevelOfInvestment} salesCost={this.state.salesCost} numberOfClicksIncrease={this.state.numberOfClicksIncrease} salesman={this.state.salesman} numberOfFactory={this.state.numberOfFactory} hireAManager={this.hireAManager} factoryCost={this.state.factoryCost} investInSoftware={this.investInSoftware} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} maximumSalesHirable={this.state.maximumSalesHirable} officeCost={this.state.officeCost} buyOffice={this.buyOffice} officeLevelUpgrade={this.state.officeLevelUpgrade} managerCost={this.state.managerCost} maximumSmallAutomaticMachine={this.state.maximumSmallAutomaticMachine}/>
        </div>
        <div>
          {this.state.firstMachine > 0? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} numberOfSalesman={this.state.salesman} hasBoughtAfactory={this.state.hasBoughtAFactory} numberOfFactory={this.state.numberOfFactory} numberOfManagers={this.state.numberOfManagers} maximumSalesHirable={this.state.maximumSalesHirable}/> : null}
        </div>
      </div>  
      
      <div className="middle-div">
        
        <div className="dashboard interface-div">
          <Dashboard stockOfPaperclips={this.state.count} soldAtLeastOnePaperclip={soldAtLeastOnePaperclip} money = {this.state.money} boughtAnAutomaticMachine={this.state.boughtAnAutomaticMachine} automaticProduction={this.state.automaticProduction} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} hasHiredaSalesman={this.state.hasHiredaSalesman} salesman={this.state.salesman} salesmanEfficiency={this.state.salesmanEfficiency} websiteSellingPower={this.state.websiteSellingPower}/>
        </div>

        {this.state.numberOfClicksIncrease > 10 && <DialogInterface salesLevelOfInvestment={this.state.salesLevelOfInvestment} lang={this.state.lang} text={this.state.text} updateTextBox={this.updateTextBox} />}

        {this.state.hasBoughtAFactory && <DashboardActivity totalPaperclipssold={this.state.totalPaperclipssold} />}

        <p className="app-main-buttons">{
          <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect}/>}
          {this.state.count > 0 || soldAtLeastOnePaperclip ? <SellButton createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} sell={this.handleClickDecrease} unitsSold={this.state.unitsSold } count={this.state.count}/>:null}
        </p>
      </div>

      <div className="right-div">
          <Software money={this.state.money} computerComputationalCost={this.state.computerComputationalCost} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} websiteIsOnline={this.state.websiteIsOnline} websitePrice={this.state.websitePrice} websiteSellingPower={this.state.websiteSellingPower} buytheWebsite={this.buytheWebsite} deeplearningCost={this.state.deeplearningCost} weakAICost={this.state.weakAICost} AIlevelOfInvestment={this.state.AIlevelOfInvestment} newAICost={this.state.newAICost} investInAI={this.investInAI} increaseProductionCost={this.state.increaseProductionCost} cloudConnectionCost={this.state.cloudConnectionCost} improveAutomaticMachines={this.improveAutomaticMachines} deeplearningHasBeenBought={this.state.deeplearningHasBeenBought} quantumComputerCost={this.state.quantumComputerCost} automaticProductionCost={this.state.automaticProductionCost} automaticProductionImprovment={this.state.automaticProductionImprovment} softwareMarketplacePrice={this.state.softwareMarketplacePrice} weakAiIsActivated={this.state.weakAiIsActivated} newAiIsActivated={this.state.newAiIsActivated} quantumComputerHasBeenBought={this.state.quantumComputerHasBeenBought} cloudConnectionEstablished={this.state.cloudConnectionEstablished} totalComputationalPowerAccumulated={this.state.totalComputationalPowerAccumulated} computationalPowerPerSecond={this.state.computationalPowerPerSecond}/>
      </div>
      
    </div>
  </div>
  );
}

}

export default App;

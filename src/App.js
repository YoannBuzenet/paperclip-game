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
          count : 10000000,
          money : 10000000,
          marketingLevelOfInvestment : 2,
          rdLevelOfInvestment : 2,
          salesLevelOfInvestment : 1,
          softwareLevelOfInvestment : 0,
          totalPaperclipssold : 0,
          numberOfSmallMachines : 0,
          productivity : 1,
          unitsSold : 1,
          marketingCost : 5,
          rdCost : 5,
          salesCost : 0,
          listOfCosts : [200, 1000, 3000, 5000, 10000, 20000,50000,100000],
          marketingListOfCosts : [15, 300, 2000, 10000, 30000, 50000, 100000, 200000,500000,1000000],
          rdListofCosts : [30, 500, 2000, 5000, 10000, 20000,50000,100000],
          softwareCost : 50000,
          numberOfSmallAutomaticMachines : 0,
          smallAutomaticMachineProductivity : 10,
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
          numberofSalesHiredByManagers : 5,
          soldAtLeastOnePaperclip : false,
          firstMachine : false,
          hasHiredaSalesman : false,
          salesmanCantsell : false,
          hasBoughtAFactory : false,
          factoryCost : 8000,
          numberOfFactory : 0,
          numberOfClicksIncrease : 0,
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
  }

  componentDidMount(){
      var intervalId = setInterval(this.automaticCounting, 500);
      // store intervalId in the state so it can be accessed later:
      this.setState({intervalId: intervalId});
  }

  automaticCounting(){
    this.setState(state => { 
      if((state.count + state.automaticProduction - (state.salesmanEfficiency * state.salesman)) <= 0){
        return ({
          count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine,
          salesmanCantsell : true,
          salesman : state.salesman + state.numberOfManagers * state.numberofSalesHiredByManagers
      });
      }
      else{
        return ({
        count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine- state.salesmanEfficiency*state.salesman,
        money : state.money + 0.25*10*state.salesman,
        totalPaperclipssold : state.totalPaperclipssold + state.salesmanEfficiency *state.salesman,
        salesmanCantsell : false,
        salesman : state.salesman + state.numberOfManagers * state.numberofSalesHiredByManagers
    });
    }
  });
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
          
          this.setState((state => { return ({
            money : state.money - cost,
            numberOfSmallAutomaticMachines : state.numberOfSmallAutomaticMachines + quantity,
            boughtAnAutomaticMachine : true,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            }), this.updateTextBox);
        }
        else if(machineType == "factory"){
          this.setState((state => { return ({
            money : state.money - cost,
            numberOfFactory : state.numberOfFactory + 1,
            hasBoughtAFactory : true,
            factoryCost : state.factoryCost *2,
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
        productivyPerAutomaticMachine : (state.productivyPerAutomaticMachine *1.5),
        automaticProductionImprovment : state.automaticProductionImprovment +1,
        automaticProductionCost : (state.listOfCosts[state.automaticProductionImprovment-1])
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

  hireAManager(){
    if(this.state.money >= this.state.managerCost){
      this.setState((state => { return ({
        money : state.money - state.managerCost,
        numberOfManagers : state.numberOfManagers +1
          });
        }), this.updateTextBox);
      }
  }

  hireASalesman(){
    if(this.state.money >= this.state.salesmanCost){
      this.setState((state => { return ({
        money : state.money - state.salesmanCost,
        hasHiredaSalesman : true,
        salesman : state.salesman +1
          });
        }), this.updateTextBox);
      }
  }

  buyFiveSales(){
    if(this.state.money >= this.state.salesmanCost * 5){
      this.setState((state => { return ({
        money : state.money - state.salesmanCost * 5,
        hasHiredaSalesman : true,
        salesman : state.salesman +5
          });
        }),this.updateTextBox);
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
      else if(this.state.rdLevelOfInvestment == 5 && this.state.numberOfFactory == 0) {
        var textToDisplay = this.state.text.afterLevel4RD;
        var author = this.state.text.AuthorMessageHuman;
      }
      else if(this.state.numberOfSmallAutomaticMachines > 0 && this.state.numberOfFactory > 0) {
        var textToDisplay = this.state.text.afterFactory;
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
          <InvestmentBox buyAMachine={this.buyAMachine} money={this.state.money} soldAtLeastOnePaperclip = {this.state.soldAtLeastOnePaperclip} firstMachine = {this.state.firstMachine} numberOfSmallMachines={this.state.numberOfSmallMachines} investInSales = {this.investInSales} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdLevelOfInvestment={this.state.rdLevelOfInvestment} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} smallAutomaticMachineProductivity={this.state.smallAutomaticMachineProductivity} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction} hireASalesman={this.hireASalesman} salesmanCost ={this.state.salesmanCost} buyFiveSales={this.buyFiveSales} improveAutomaticMachines={this.improveAutomaticMachines} automaticProductionImprovment={this.state.automaticProductionImprovment} automaticProductionCost={this.state.automaticProductionCost} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} salesLevelOfInvestment={this.state.salesLevelOfInvestment} salesCost={this.state.salesCost} numberOfClicksIncrease={this.state.numberOfClicksIncrease} salesman={this.state.salesman} numberOfFactory={this.state.numberOfFactory} hireAManager={this.hireAManager} factoryCost={this.state.factoryCost} investInSoftware={this.investInSoftware} softwareLevelOfInvestment={this.state.softwareLevelOfInvestment} />
        </div>
        <div>
          {this.state.firstMachine > 0? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} numberOfSalesman={this.state.salesman} hasBoughtAfactory={this.state.hasBoughtAFactory} numberOfFactory={this.state.numberOfFactory} numberOfManagers={this.state.numberOfManagers}/> : null}
        </div>  
      </div>  
      
      <div className="middle-div">
        
        <div className="dashboard interface-div">
          <Dashboard stockOfPaperclips={this.state.count} soldAtLeastOnePaperclip={soldAtLeastOnePaperclip} money = {this.state.money} boughtAnAutomaticMachine={this.state.boughtAnAutomaticMachine} automaticProduction={this.state.automaticProduction} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} hasHiredaSalesman={this.state.hasHiredaSalesman} salesman={this.state.salesman} salesmanEfficiency={this.state.salesmanEfficiency}/>
        </div>

        {this.state.numberOfClicksIncrease > 10 && <DialogInterface salesLevelOfInvestment={this.state.salesLevelOfInvestment} lang={this.state.lang} text={this.state.text} updateTextBox={this.updateTextBox} />}

        {this.state.hasBoughtAFactory && <DashboardActivity totalPaperclipssold={this.state.totalPaperclipssold} />}

        <p className="app-main-buttons">{
          <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect}/>}
          {this.state.count > 0 || soldAtLeastOnePaperclip ? <SellButton createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} sell={this.handleClickDecrease} unitsSold={this.state.unitsSold } count={this.state.count}/>:null}
        </p>
      </div>

      <div className="right-div">
          <Software softwareLevelOfInvestment={this.state.softwareLevelOfInvestment}/>
      </div>
      
    </div>
  </div>
  );
}

}

export default App;

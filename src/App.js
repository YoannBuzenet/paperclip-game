import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import MainButton from './components/main-button';
import SellButton from './components/sellButton';
import InvestmentBox from './components/investmentBox.js';
import WorkBox from './components/workBox.js';
import DashboardActivity from './components/DashboardActivity.js';
import DialogInterface from './components/DialogInterface.js';

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
          count : 1000000,
          money : 1000000,
          marketingLevelOfInvestment : 2,
          rdLevelOfInvestment : 2,
          salesLevelOfInvestment : 1,
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
          soldAtLeastOnePaperclip : false,
          firstMachine : false,
          hasHiredaSalesman : false,
          salesmanCantsell : false,
          hasBoughtAFactory : false,
          numberOfFactory : 0
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);    
  this.buyAMachine = this.buyAMachine.bind(this);    
  this.investInMarketing = this.investInMarketing.bind(this);    
  this.investInSales = this.investInSales.bind(this);    
  this.investInRD = this.investInRD.bind(this);    
  this.automaticCounting = this.automaticCounting.bind(this);    
  this.hireASalesman = this.hireASalesman.bind(this);    
  this.buyFiveSales = this.buyFiveSales.bind(this);    
  this.improveAutomaticMachines = this.improveAutomaticMachines.bind(this);  
  this.createAndRemoveGraphicEffect = this.createAndRemoveGraphicEffect.bind(this);    
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
      });
      }
      else{
        return ({
        count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine- state.salesmanEfficiency*state.salesman,
        money : state.money + 0.25*10*state.salesman,
        totalPaperclipssold : state.totalPaperclipssold + state.salesmanEfficiency *state.salesman,
        salesmanCantsell : false
    });
    }
  });
  }

  handleClickIncrease(){
    this.setState(state => { return ({
      count : state.count + state.productivity,
      });
    });
  }

  handleClickDecrease(){
      if(this.state.count >= this.state.unitsSold){
      this.setState(state => { return ({
          count : state.count - state.unitsSold,
          money : state.money + (0.25 * state.unitsSold),
          soldAtLeastOnePaperclip : true,
          totalPaperclipssold : state.totalPaperclipssold + state.unitsSold
          });
        });
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
          
          this.setState(state => { return ({
            money : state.money - cost,
            numberOfSmallAutomaticMachines : state.numberOfSmallAutomaticMachines + quantity,
            boughtAnAutomaticMachine : true,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            });
        }
        else if(machineType == "factory"){
          this.setState(state => { return ({
            money : state.money - cost,
            numberOfFactory : state.numberOfFactory + 1,
            hasBoughtAFactory : true,
            automaticProduction : state.automaticProduction + quantity*productivity
              });
            });
        }
      }
      
    }
  }

  improveAutomaticMachines(){
    if(this.state.money >= this.state.automaticProductionCost){
      this.setState(state => { return ({
        money : state.money - state.automaticProductionCost,
        productivyPerAutomaticMachine : (state.productivyPerAutomaticMachine *1.5),
        automaticProductionImprovment : state.automaticProductionImprovment +1,
        automaticProductionCost : (state.listOfCosts[state.automaticProductionImprovment-1])
          });
        });
      }
  }

  investInMarketing(){
    if(this.state.money >= this.state.marketingCost){
    this.setState(state => { return ({
      money : state.money - state.marketingCost,
      marketingCost : (state.marketingListOfCosts[state.marketingLevelOfInvestment-2]),
      marketingLevelOfInvestment : state.marketingLevelOfInvestment +1,
      unitsSold : state.unitsSold *5
        });
      });
    }
  }  

  investInSales(){
    if(this.state.money >= this.state.salesCost){
    this.setState(state => { return ({
      money : state.money - state.salesCost,
      salesLevelOfInvestment : state.salesLevelOfInvestment +1,
      unitsSold : state.unitsSold +5
        });
      });
    }
  }  

  investInRD(){
    if(this.state.money >= this.state.rdCost){
    this.setState(state => { return ({
      money : state.money - state.rdCost,
      rdLevelOfInvestment : state.rdLevelOfInvestment +1,
      rdCost :  (state.rdListofCosts[state.rdLevelOfInvestment-1])
        });
      });
    }
  } 

  hireASalesman(){
    if(this.state.money >= this.state.salesmanCost){
      this.setState(state => { return ({
        money : state.money - state.salesmanCost,
        hasHiredaSalesman : true,
        salesman : state.salesman +1
          });
        });
      }
  }

  buyFiveSales(){
    if(this.state.money >= this.state.salesmanCost * 5){
      this.setState(state => { return ({
        money : state.money - state.salesmanCost * 5,
        hasHiredaSalesman : true,
        salesman : state.salesman +5
          });
        });
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

  render(){
    const {soldAtLeastOnePaperclip} = this.state
    return (<div className="App">

    <header>
    <p className="pageTitle">PAPERCLIP MAKER</p>
    </header>

    <div className="main-content">
  
      <div className="left-div">
        <div>
          {soldAtLeastOnePaperclip ? <InvestmentBox buyAMachine={this.buyAMachine} money={this.state.money} numberOfSmallMachines={this.state.numberOfSmallMachines} investInSales = {this.investInSales} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdLevelOfInvestment={this.state.rdLevelOfInvestment} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} smallAutomaticMachineProductivity={this.state.smallAutomaticMachineProductivity} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction} hireASalesman={this.hireASalesman} salesmanCost ={this.state.salesmanCost} buyFiveSales={this.buyFiveSales} improveAutomaticMachines={this.improveAutomaticMachines} automaticProductionImprovment={this.state.automaticProductionImprovment} automaticProductionCost={this.state.automaticProductionCost} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} salesLevelOfInvestment={this.state.salesLevelOfInvestment} salesCost={this.state.salesCost}/> : null}
        </div>
        <div>
          {this.state.firstMachine ? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} numberOfSalesman={this.state.salesman} hasBoughtAfactory={this.state.hasBoughtAFactory} numberOfFactory={this.state.numberOfFactory} /> : null}
        </div>
        <div style={{clear:'both'}}></div>
      </div>  
      
      <div className="middle-div">
        
        <div className="dashboard interface-div">
          <Dashboard stockOfPaperclips={this.state.count} soldAtLeastOnePaperclip={soldAtLeastOnePaperclip} money = {this.state.money} boughtAnAutomaticMachine={this.state.boughtAnAutomaticMachine} automaticProduction={this.state.automaticProduction} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine} hasHiredaSalesman={this.state.hasHiredaSalesman} salesman={this.state.salesman} salesmanEfficiency={this.state.salesmanEfficiency}/>
        </div>

        {this.state.salesLevelOfInvestment > 5 && <DialogInterface/>}

        { this.state.hasBoughtAFactory && <DashboardActivity totalPaperclipssold={this.state.totalPaperclipssold}/>}

        <p className="app-main-buttons">{
          <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity} createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect}/>}
          {this.state.count > 0 || soldAtLeastOnePaperclip ? <SellButton createAndRemoveGraphicEffect={this.createAndRemoveGraphicEffect} sell={this.handleClickDecrease} unitsSold={this.state.unitsSold } count={this.state.count}/>:null}
        </p>
      </div>

      <div className="right-div">
        <div className="interface-div ai-stuff" style={{backgroundColor:"red"}}>
          <h2>AI Stuff</h2>
          <p>hey</p>
        </div>  
      </div>
      
    </div>
  </div>
  );
}

}

export default App;

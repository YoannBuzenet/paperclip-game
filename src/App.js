import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import MainButton from './components/main-button';
import NumberOfClicks from './components/number-of-clicks';
import SellButton from './components/sellButton';
import DisplayMoney from './components/displaymoney';
import InvestmentBox from './components/investmentBox.js';
import WorkBox from './components/workBox.js';

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
          count : 100000,
          money : 100000,
          soldAtLeastOnePaperclip : false,
          firstMachine : false,
          numberOfSmallMachines : 0,
          productivity : 1,
          unitsSold : 1,
          marketingCost : 5,
          marketingState : 2,
          rdCost : 5,
          rdState : 2,
          numberOfSmallAutomaticMachines : 0,
          smallAutomaticMachineCost : 10,
          automaticProduction : 0,
          automaticProductionImprovment : 2,
          automaticProductionCost :200,
          productivyPerAutomaticMachine : 1,
          intervalId : 0,
          salesman : 0,
          salesmanCost : 50,
          salesmanCantsell : false,
          numberOfFactory : 0
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);    
  this.buyASmallMachine = this.buyASmallMachine.bind(this);    
  this.investInMarketing = this.investInMarketing.bind(this);    
  this.investInRD = this.investInRD.bind(this);    
  this.buyASmallAutomaticMachine = this.buyASmallAutomaticMachine.bind(this);    
  this.automaticCounting = this.automaticCounting.bind(this);    
  this.buyFiveSmallMachines = this.buyFiveSmallMachines.bind(this);    
  this.hireASalesman = this.hireASalesman.bind(this);    
  this.buyFiveAutomaticMachines = this.buyFiveAutomaticMachines.bind(this);    
  this.buyFiveSales = this.buyFiveSales.bind(this);    
  this.improveAutomaticMachines = this.improveAutomaticMachines.bind(this);    
  }

componentDidMount(){
    var intervalId = setInterval(this.automaticCounting, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
}

automaticCounting(){
  this.setState(state => { 
    if(state.count + state.automaticProduction - 10*state.salesman < 0){
      return ({
        count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine,
        salesmanCantsell : true
    });
    }
    else{
      return ({
      count : state.count + state.automaticProduction * state.productivyPerAutomaticMachine- 10*state.salesman,
      money : state.money + 0.25*10*state.salesman
  });
  }
});
}

handleClickIncrease(){
    this.setState(state => { return ({
        count : state.count + state.productivity
      });
    });
    console.log(this.state);
}
handleClickDecrease(){
    if(this.state.count >= this.state.unitsSold){
    this.setState(state => { return ({
        count : state.count - state.unitsSold,
        money : state.money + (0.25 * state.unitsSold),
        soldAtLeastOnePaperclip : true
        });
      });
    //console.log(this.state);
    }
}

  buyASmallMachine(){
    console.log(this.state);
    if(this.state.money >= 5){
    this.setState(state => { return ({
      money : state.money - 5,
      numberOfSmallMachines : state.numberOfSmallMachines +1,
      firstMachine : true,
      productivity : state.productivity +5
        });
      });
    }
  }

  buyFiveSmallMachines(){
    if(this.state.money >= 25){
      this.setState(state => { return ({
        money : state.money - 25,
        numberOfSmallMachines : state.numberOfSmallMachines +5,
        firstMachine : true,
        productivity : state.productivity +25
          });
        });
      }
  }

  buyASmallAutomaticMachine(){
    console.log(this.state);
    if(this.state.money >= this.state.smallAutomaticMachineCost){
    this.setState(state => { return ({
      money : state.money - state.smallAutomaticMachineCost,
      numberOfSmallAutomaticMachines : state.numberOfSmallAutomaticMachines +1,
      automaticProduction : state.automaticProduction +1
        });
      });
    }
  }

  buyFiveAutomaticMachines(){
    if(this.state.money >= 50){
      this.setState(state => { return ({
        money : state.money - 50,
        numberOfSmallAutomaticMachines : state.numberOfSmallAutomaticMachines +5,
        automaticProduction : state.automaticProduction +5
          });
        });
      }
  }

  improveAutomaticMachines(){
    if(this.state.money >= this.state.automaticProductionCost){
      this.setState(state => { return ({
        money : state.money - state.automaticProductionCost,
        productivyPerAutomaticMachine : (state.productivyPerAutomaticMachine *1.5),
        automaticProductionImprovment : state.automaticProductionImprovment +1,
        automaticProductionCost : (state.automaticProductionImprovment*Math.pow(10, state.automaticProductionImprovment))
          });
        });
      }
  }

  investInMarketing(){
    if(this.state.money >= this.state.marketingCost){
    this.setState(state => { return ({
      money : state.money - state.marketingCost,
      marketingCost : (state.marketingState*Math.pow(10, state.marketingState)),
      marketingState : state.marketingState +1,
      unitsSold : state.unitsSold *10
        });
      });
    }
  }  

  investInRD(){
    if(this.state.money >= this.state.rdCost){
    this.setState(state => { return ({
      money : state.money - state.rdCost,
      rdState : state.rdState +1,
      rdCost :  (state.rdState*Math.pow(10, state.rdState))
        });
      });
    }
  } 

  hireASalesman(){
    if(this.state.money >= this.state.salesmanCost){
      this.setState(state => { return ({
        money : state.money - state.salesmanCost,
        salesman : state.salesman +1
          });
        });
      }
  }

  buyFiveSales(){
    if(this.state.money >= this.state.salesmanCost * 5){
      this.setState(state => { return ({
        money : state.money - state.salesmanCost * 5,
        salesman : state.salesman +5
          });
        });
      }
  }

  render(){
    const {soldAtLeastOnePaperclip} = this.state
    return (<div className="App">

    <div className="main-content">
      <header>
      <p className="pageTitle">PAPERCLIP MAKER</p>
      </header>
      
      <div className="dashboard">
        <Dashboard />
        <NumberOfClicks numberOfClicks={this.state.count}/>
        {soldAtLeastOnePaperclip > 0 ? <DisplayMoney money = {this.state.money} /> : null}
      </div>

      <div>
        {soldAtLeastOnePaperclip ? <InvestmentBox buyASmallMachine={this.buyASmallMachine} numberOfSmallMachines={this.state.numberOfSmallMachines} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdState={this.state.rdState} buyASmallAutomaticMachine={this.buyASmallAutomaticMachine} numberOfSmallAutomaticMachines={this.numberOfSmallAutomaticMachines} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction} buyFiveSmallMachines={this.buyFiveSmallMachines} hireASalesman={this.hireASalesman} salesmanCost ={this.state.salesmanCost} buyFiveAutomaticMachines={this.buyFiveAutomaticMachines} buyFiveSales={this.buyFiveSales} improveAutomaticMachines={this.improveAutomaticMachines} automaticProductionImprovment={this.state.automaticProductionImprovment} automaticProductionCost={this.state.automaticProductionCost} productivyPerAutomaticMachine={this.state.productivyPerAutomaticMachine}/> : null}
      </div>
      <div>
        {this.state.firstMachine ? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines} numberOfSalesman={this.state.salesman}/> : null}
      </div>
      
      <p className="app-main-buttons">
          <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity}/>
          {this.state.count > 0 ? <SellButton sell={this.handleClickDecrease} unitsSold={this.state.unitsSold}/>:null}
      </p>
    </div>
  </div>
  );
}

}

export default App;

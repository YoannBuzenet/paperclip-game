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
          count : 0,
          money : 0,
          soldAtLeastOnePaperclip : false,
          firstMachine : false,
          numberOfSmallMachines : 0,
          productivity : 1,
          unitsSold : 1,
          marketingCost : 5,
          rdCost : 5,
          rdState : 1,
          numberOfSmallAutomaticMachines : 0,
          smallAutomaticMachineCost : 10,
          automaticProduction : 0,
          intervalId : 0
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);    
  this.buyASmallMachine = this.buyASmallMachine.bind(this);    
  this.investInMarketing = this.investInMarketing.bind(this);    
  this.investInRD = this.investInRD.bind(this);    
  this.buyASmallAutomaticMachine = this.buyASmallAutomaticMachine.bind(this);    
  this.automaticCounting = this.automaticCounting.bind(this);    
  }

componentDidMount(){
    var intervalId = setInterval(this.automaticCounting, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
}

automaticCounting(){
  this.setState(state => { return ({
    count : state.count + state.automaticProduction
  });
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

  investInMarketing(){
    if(this.state.money >= this.state.marketingCost){
    this.setState(state => { return ({
      money : state.money - state.marketingCost,
      marketingCost : state.marketingCost +5,
      unitsSold : state.unitsSold +5
        });
      });
    }
  }  

  investInRD(){
    if(this.state.money >= this.state.rdCost){
    this.setState(state => { return ({
      money : state.money - state.rdCost,
      rdState : state.rdState +1,
      rdCost : state.rdCost + (10*state.rdState)
        });
      });
    }
  } 

  render(){
    return (<div className="App">
    <header>
    <p className="pageTitle">PAPERCLIP MAKER</p>
    </header>

    <div className="dashboard">
      <Dashboard />
      <NumberOfClicks numberOfClicks={this.state.count}/>
      {this.state.soldAtLeastOnePaperclip > 0 ? <DisplayMoney money = {this.state.money} /> : null}
    </div>

    <div>
      {this.state.soldAtLeastOnePaperclip ? <InvestmentBox buyASmallMachine={this.buyASmallMachine} numberOfSmallMachines={this.state.numberOfSmallMachines} investInMarketing={this.investInMarketing} marketingCost={this.state.marketingCost} investRD={this.investInRD} rdCost={this.state.rdCost} rdState={this.state.rdState} buyASmallAutomaticMachine={this.buyASmallAutomaticMachine} numberOfSmallAutomaticMachines={this.numberOfSmallAutomaticMachines} smallAutomaticMachineCost={this.state.smallAutomaticMachineCost} automaticProduction={this.automaticProduction}/> : null}
    </div>
    <div>
      {this.state.firstMachine ? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines} numberOfSmallAutomaticMachines={this.state.numberOfSmallAutomaticMachines}/> : null}
    </div>
    
    <p>
        <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity}/>
        {this.state.count > 0 ? <SellButton sell={this.handleClickDecrease} unitsSold={this.state.unitsSold}/>:null}
    </p>

    
    
    
  </div>
  );
}

}

export default App;

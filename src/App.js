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
          productivity : 1
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);    
  this.buyASmallMachine = this.buyASmallMachine.bind(this);    
  }

  handleClickIncrease(){
    this.setState(state => { return ({
        count : state.count + state.productivity
      });
    });
    console.log(this.state);
  }
  handleClickDecrease(){
    this.setState(state => { return ({
        count : state.count -1,
        money : state.money + 0.25,
        soldAtLeastOnePaperclip : true
      });
    });
    //console.log(this.state);
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
      {this.state.soldAtLeastOnePaperclip ? <InvestmentBox buyASmallMachine={this.buyASmallMachine}/> : null}
    </div>
    <div>
      {this.state.firstMachine ? <WorkBox numberOfSmallMachines={this.state.numberOfSmallMachines}/> : null}
    </div>
    
    <p>
        <MainButton count={this.state.count} increase={this.handleClickIncrease} firstMachine={this.state.firstMachine} productivity={this.state.productivity}/>
        {this.state.count > 0 ? <SellButton sell={this.handleClickDecrease}/>:null}
    </p>

    
    
    
  </div>
  );
}

}

export default App;

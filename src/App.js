import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import MainButton from './components/main-button';
import NumberOfClicks from './components/number-of-clicks';
import SellButton from './components/sellButton';
import DisplayMoney from './components/displaymoney';

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
          count : 0,
          money : 0
      }
  this.handleClickIncrease = this.handleClickIncrease.bind(this);      
  this.handleClickDecrease = this.handleClickDecrease.bind(this);      
  }

  handleClickIncrease(){
    this.setState(state => { return ({
        count : state.count +1
      });
    });
    console.log(this.state);
  }
  handleClickDecrease(){
    this.setState(state => { return ({
        count : state.count -1,
        money : state.money + 5
      });
    });
    console.log(this.state);
  }

  render(){
    return (<div className="App">
    <header>
    <p className="pageTitle">PAPERCLIP MAKER</p>
    </header>
    <div className="dashboard">
    <Dashboard />
      <NumberOfClicks numberOfClicks={this.state.count}/>
      {this.state.money > 0 ? <DisplayMoney money = {this.state.money} /> : null}
    </div>
    
    <p>
        <MainButton count={this.state.count} increase={this.handleClickIncrease}/>
        {this.state.count > 0 ? <SellButton sell={this.handleClickDecrease} />:null}
    </p>
    
    
  </div>
  );
}

}

export default App;

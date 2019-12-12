import React, { Component } from 'react';

class WorkBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="work-box interface-div">
        <h2>{this.props.text.gameTitles.workboxTitle[this.props.lang]}</h2>
    <div className="padding-div">
        <p className="data-title">{this.props.text.gameTitles.worboxSmallMachines[this.props.lang]}<span className="data">{this.props.numberOfSmallMachines}</span></p>
        {this.props.numberOfSmallAutomaticMachines > 0 
        ? <p className="data-title">{this.props.text.gameTitles.worboxAutomaticMachines[this.props.lang]}<span className="data">{this.props.numberOfSmallAutomaticMachines}</span></p> 
        : null}

        {this.props.numberOfSalesman > 0 
        ? <p className="data-title">{this.props.text.gameTitles.worboxSalesmen[this.props.lang]}<span className="data">{this.props.numberOfSalesman}/{this.props.maximumSalesHirable}</span></p> 
        : null}    

        {this.props.hasBoughtAfactory && <p className="data-title">{this.props.text.gameTitles.worboxFactories[this.props.lang]}<span className="data">{this.props.checkNumber(this.props.numberOfFactory)}</span></p>}

        {this.props.numberOfManagers > 0 ? <p className="data-title">{this.props.text.gameTitles.worboxManagers[this.props.lang]}<span className="data">{this.props.checkNumber(this.props.numberOfManagers)}</span></p> : null}

        {this.props.numberOfDrone > 0 ? <p className="data-title">{this.props.text.gameTitles.worboxDrones[this.props.lang]}<span className="data">{this.props.checkNumber(this.props.numberOfDrone)}</span></p> : null}

    </div>
        </div>);
    }
}

export default WorkBox
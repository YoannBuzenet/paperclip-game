import React, { Component } from 'react';

class WorkBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="work-box interface-div">
        <h2>WORK</h2>
    <div>
        <p className="data-title">Small Machines <span className="data">{this.props.numberOfSmallMachines}</span></p>
        {this.props.numberOfSmallAutomaticMachines > 0 
        ? <p className="data-title">Automatic Machines <span className="data">{this.props.numberOfSmallAutomaticMachines}</span></p> 
        : null}

        {this.props.numberOfSalesman > 0 
        ? <p className="data-title">Salesmen <span className="data">{this.props.numberOfSalesman}/{this.props.maximumSalesHirable}</span></p> 
        : null}    

        {this.props.hasBoughtAfactory && <p className="data-title">Factories <span className="data">{this.props.checkNumber(this.props.numberOfFactory)}</span></p>}

        {this.props.numberOfManagers > 0 ? <p className="data-title">Managers <span className="data">{this.props.checkNumber(this.props.numberOfManagers)}</span></p> : null}

        {this.props.numberOfDrone > 0 ? <p className="data-title">Drones <span className="data">{this.props.checkNumber(this.props.numberOfDrone)}</span></p> : null}

    </div>
        </div>);
    }
}

export default WorkBox
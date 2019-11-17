import React, { Component } from 'react';

class WorkBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="work-box">
        <h2>WORK</h2>
    <h3>Small Machines : {this.props.numberOfSmallMachines}</h3>
    {this.props.numberOfSmallAutomaticMachines > 0 
    ? <h3>Automatic Machines : {this.props.numberOfSmallAutomaticMachines}</h3> 
    : null}

    {this.props.numberOfSalesman > 0 
    ? <h3>Salesmen : {this.props.numberOfSalesman}</h3> 
    : null}    


        </div>);
    }
}

export default WorkBox
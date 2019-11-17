import React, { Component } from 'react';

class WorkBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
    return (<div className="work-box">
        <h2>WORK</h2>
    <h3>Small Machines : {this.props.numberOfSmallMachines}</h3>
        </div>);
    }
}

export default WorkBox
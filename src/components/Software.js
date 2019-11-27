import React, { Component } from 'react';
import Button from './button';
import ButtonAutomaticData from './button-automatic-data-productivity';

class Software extends Component{
    constructor(props){
        super(props)
    }

    render(){

        var className = this.props.softwareLevelOfInvestment > 0 ? "interface-div software-div visible-right-div" :"interface-div software-div";

    return (
    <div className={className} style={{backgroundColor:"red"}}>
        <h2>Software & Hardware architecture</h2>
        <p>hey</p>
  </div>)

    ;}
}
  export default Software
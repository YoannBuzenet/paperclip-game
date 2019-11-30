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
        <Button onClickProp={this.props.buytheWebsite} name="Devellop Ecommerce Website" picture="./pictures/website.png" classNameButton="website menu-button" cost={this.props.websitePrice} classNameChild="info-website-button" contentChild="Increase the sales - Sell online ! (+20 000 sales)" money={this.props.money}/>
  </div>)

    ;}
}
  export default Software
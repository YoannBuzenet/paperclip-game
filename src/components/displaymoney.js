import React, { Component } from 'react';

class DisplayMoney extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <p className="display-money">Money in bank : {this.props.money} €</p>;
    }
}

export default DisplayMoney
import React, { Component } from 'react';

class DisplayMoney extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <p className="display-money">Cash: <strong>{this.props.money} €</strong></p>;
    }
}

export default DisplayMoney
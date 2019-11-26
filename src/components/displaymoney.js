import React, { Component } from 'react';

class DisplayMoney extends Component{
    constructor(props){
        super(props)
    }

    render(){

        let money = this.props.checkNumber(this.props.money);

        return <p className="display-money">Cash: <strong>{money} €</strong></p>;
    }
}

export default DisplayMoney
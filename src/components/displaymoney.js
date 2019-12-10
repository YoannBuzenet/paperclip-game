import React, { Component } from 'react';

class DisplayMoney extends Component{
    constructor(props){
        super(props)
    }

    render(){

        let money = this.props.checkNumber(this.props.money);

        return <p className="display-money data-title">Cash: <span className="data">{money} €</span></p>;
    }
}

export default DisplayMoney
import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.sell} className="sell-button">Sell a paperclip (.25€)</button>;
    }
}

export default SellButton
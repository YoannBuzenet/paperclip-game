import React, { Component } from 'react';

class SellButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.sell}>Sell a paperclip</button>;
    }
}

export default SellButton
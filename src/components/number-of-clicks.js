import React, { Component } from 'react';

class NumberOfClicks extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <p className="number-of-clicks">Number of paperclips : {this.props.numberOfClicks}</p>;
    }
}

export default NumberOfClicks
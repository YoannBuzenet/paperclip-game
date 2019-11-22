import React, { Component } from 'react';

// class NumberOfClicks extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return <p className="number-of-clicks">Number of paperclips : {this.props.numberOfClicks}</p>;
//     }
// }

const StockOfPaperclips = ({stockOfPaperclips}) => {
    return <p className="stockOfPaperclips">Paperclips in stock : <strong>{stockOfPaperclips}</strong></p>;
}

export default StockOfPaperclips
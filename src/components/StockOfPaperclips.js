import React from 'react';

// class NumberOfClicks extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return <p className="number-of-clicks">Number of paperclips : {this.props.numberOfClicks}</p>;
//     }
// }

const StockOfPaperclips = ({stockOfPaperclips, checkNumber}) => {

    stockOfPaperclips = checkNumber(stockOfPaperclips);

    return <p className="stockOfPaperclips data-title">Stock <span className="data">{stockOfPaperclips}</span></p>;
}

export default StockOfPaperclips
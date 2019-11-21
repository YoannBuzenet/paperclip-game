import React, { Component } from 'react';

class MainButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            animationButton : false
        };
        this.increaseStockAndUpdateLocalArray = this.increaseStockAndUpdateLocalArray.bind(this);
    }

    increaseStockAndUpdateLocalArray(){
        this.props.increase();
        console.log(this.state);

        this.setState(state => { return ({
            list : state.list.concat(this.props.productivity),
            animationButton: true
            })
        });
    }

    render(){
        const graphInputPaperclips = this.state.list.map(element => 
            <li className="graphInput" key={Math.random()}> {element} </li>);

    return (
    <button onClick={this.increaseStockAndUpdateLocalArray} className="main-button">
        Create <ul className="main-button-number">
            <li>{this.props.productivity}</li>
            {/* {graphInputPaperclips.length > 0 ? graphInputPaperclips[graphInputPaperclips.length -1] : null} */}
            </ul> paperclips
    </button>);
    }
}

export default MainButton
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

    createAndRemoveGraphicEffect(textToRender){
        var ul = document.getElementById('ul-main-number');
        var li = document.createElement('li');
        li.classList.add('graphInput');
        li.innerText = textToRender;
        ul.appendChild(li);

        setTimeout(()=> (li.remove()), 800)
    }

    componentDidMount(){
        var mainButton = document.getElementById('main-button-id');
        mainButton.addEventListener('click', ()=>{
            this.createAndRemoveGraphicEffect(this.props.productivity);
        });
    }
    
    componentWillUnmount(){
        document.removeEventListener('click', ()=>{
        this.createAndRemoveGraphicEffect(this.props.productivity);
        })
    }


    render(){
        const graphInputPaperclips = this.state.list.map(element => 
            <li className="graphInput" key={Math.random()}> {element} </li>);

    return (
    <button onClick={this.increaseStockAndUpdateLocalArray} className="main-button" id="main-button-id">
        Create <ul className="main-button-number" id="ul-main-number">
            <li>{this.props.productivity}</li>
            {/* {graphInputPaperclips.length > 0 ? graphInputPaperclips[graphInputPaperclips.length -1] : null} */}
            </ul> paperclips
    </button>);
    }
}

export default MainButton
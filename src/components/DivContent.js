import React, { Component } from 'react';

class DivContent extends Component{
    constructor(props){
        super(props)

        this.closeDiv=this.closeDiv.bind(this);
    }


    closeDiv(){
            document.querySelector('.absolute-content-div').className = "doNOTdisplay absolute-content-div"
            document.querySelector('.black-overlay').className = 'doNOTdisplay black-overlay';
      }

    render(){

        var className = "doNOTdisplay absolute-content-div"


    return (
        <div className={className}>
            <span className="closing_cross" onClick={this.closeDiv}><img src="./pictures/closing_picture.png"></img></span>
            <h2 className="final-title">{this.props.text.mainTitle[this.props.lang]}</h2>
            <p>{this.props.text.firstParagraph[this.props.lang]}</p>
            <h3>{this.props.text.firstTitle[this.props.lang]}</h3>
            <p>{this.props.text.secondParagraph[this.props.lang]}</p>
            <h3>{this.props.text.secondTitle[this.props.lang]}</h3>
            <p>{this.props.text.thirdParagraph[this.props.lang]}</p>
            <p>{this.props.text.fourthParagraph[this.props.lang]}</p>
            <p>{this.props.text.conclusion[this.props.lang]}</p>
        </div>
    );
    }
}

export default DivContent
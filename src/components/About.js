import React, { Component } from 'react';

class About extends Component{
    constructor(props){
        super(props)

        this.closeDiv=this.closeDiv.bind(this);
    }


    closeDiv(){
            document.querySelector('.absolute-content-div-About').className = "doNOTdisplay absolute-content-div-About"
            document.querySelector('.black-overlay').className = 'doNOTdisplay black-overlay';
      }

    render(){

        var className = "doNOTdisplay absolute-content-div-About"


    return (
        <div className={className}>
            <span className="closing_cross" onClick={this.closeDiv}><img src="./pictures/closing_picture.png"></img></span>
            <h2>{this.props.text.aboutTitle[this.props.lang]}</h2>
    <p>{this.props.text.aboutFirstParagraph[this.props.lang]}</p>
    <p>{this.props.text.aboutSecondParagraphPart1[this.props.lang]}<a href='https://thenounproject.com/' target='_blank'>{this.props.text.aboutSecondParagraphPart2[this.props.lang]}</a></p>
    <p>{this.props.text.logo1[this.props.lang]}</p>
    <p>{this.props.text.logo2[this.props.lang]}</p>
    <p>{this.props.text.logo3[this.props.lang]}</p>
    <p>{this.props.text.logo4[this.props.lang]}</p>
    <p>{this.props.text.logo5[this.props.lang]}</p>
    <p>{this.props.text.logo6[this.props.lang]}</p>
    <p>{this.props.text.logo7[this.props.lang]}</p>
    <p>{this.props.text.logo8[this.props.lang]}</p>
    <p>{this.props.text.logo9[this.props.lang]}</p>
    <p>{this.props.text.logo10[this.props.lang]}</p>
    <p>{this.props.text.logo11[this.props.lang]}</p>
    <p>{this.props.text.logo12[this.props.lang]}</p>
    <p>{this.props.text.logo13[this.props.lang]}</p>
    <p>{this.props.text.logo14[this.props.lang]}</p>
    <p>{this.props.text.logo15[this.props.lang]}</p>
    <p>{this.props.text.logo16[this.props.lang]}</p>
    <p>{this.props.text.logo17[this.props.lang]}</p>
    <p>{this.props.text.logo18[this.props.lang]}</p>
    <p>{this.props.text.logo19[this.props.lang]}</p>
    <p>{this.props.text.logo20[this.props.lang]}</p>
    <p>{this.props.text.logo21[this.props.lang]}</p>
    <p>{this.props.text.logo22[this.props.lang]}</p>
    <p>{this.props.text.logo23[this.props.lang]}</p>
    <p>{this.props.text.logo24[this.props.lang]}</p>
    <p>{this.props.text.logo25[this.props.lang]}</p>
    <p>{this.props.text.logo26[this.props.lang]}</p>
    <p>{this.props.text.logo27[this.props.lang]}</p>
    <p>{this.props.text.logo28[this.props.lang]}</p>
    <p>{this.props.text.logo29[this.props.lang]}</p>
    <p>{this.props.text.logo30[this.props.lang]}</p>
    <p>{this.props.text.logo31[this.props.lang]}</p>
    <p>{this.props.text.logo32[this.props.lang]}</p>
    <p>{this.props.text.logo33[this.props.lang]}</p>
    <p>{this.props.text.logo34[this.props.lang]}</p>
            
            <p>{this.props.text.aboutFollowMePart1[this.props.lang]}<a href="https://twitter.com/Yoann_Buzenet?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false" target='_blank'>{this.props.text.aboutFollowMePart2[this.props.lang]}</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>
        </div>
    );
    }
}

export default About
import React, { Component } from 'react';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

class DialogInterface extends Component{
    constructor(props){
        super(props)
        this.state = {
            index : 0
        }
        this.typeWriter = this.typeWriter.bind(this);
    }



    componentDidMount(){
        this.typeWriter(this.props.text[this.props.lang], 'CoFounder :')
    }


      typeWriter(txt, author, speed=20) {
        document.getElementById("author-box").innerHTML = author;

        if (this.state.index < txt.length) {
          document.getElementById("dialog-text").innerHTML += txt.charAt(this.state.index);
          this.setState(state => { return ({
            index : state.index+1
            });
          });

          setTimeout(()=>this.typeWriter(txt, author), speed);
        }
      }


    render(){
        return(
        <div className="Dialog-interface interface-div">
            <p className="author-dialog" id="author-box"></p>
            <p className="dialog-box" id="dialog-text"></p>
        </div>
        );
    }
}



export default DialogInterface
import React, { Component } from 'react';

class DialogInterface extends Component{
    constructor(props){
        super(props)
        
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
import React, { Component } from 'react';
import ResponsivePie from './ResponsivePie.js'

class DashboardActivity extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                  "id": "Our Company",
                  "label": "Our Company",
                  "value": this.props.totalPaperclipssold,
                  "color": "hsl(151, 70%, 50%)"
                },
                {
                  "id": "scala",
                  "label": "scala",
                  "value": this.props.totalPaperclipssold*4,
                  "color": "hsl(56, 70%, 50%)"
                },
                {
                  "id": "hack",
                  "label": "hack",
                  "value": this.props.totalPaperclipssold*5,
                  "color": "hsl(288, 70%, 50%)"
                },
                {
                  "id": "lisp",
                  "label": "lisp",
                  "value": this.props.totalPaperclipssold*6,
                  "color": "hsl(299, 70%, 50%)"
                },
                {
                  "id": "erlang",
                  "label": "erlang",
                  "value": this.props.totalPaperclipssold*20,
                  "color": "hsl(165, 70%, 50%)"
                }
              ],
              formerMarketShare : 0,
              newMarketShare : 0,
              fill : [],
        }
      this.compileDataForPieChart = this.compileDataForPieChart.bind(this)  
    }

    compileDataForPieChart(valueCompetitor1, valueCompetitor2, valueCompetitor3, valueCompetitor4){

      this.setState(state => { return ({
        data : [
          {
            "id": "Our Company",
            "label": "Our Company",
            "value": this.props.totalPaperclipssold,
            "color": "hsl(151, 70%, 50%)"
          },
          {
            "id": "PPC Company",
            "label": "PPC Company",
            "value": state.data[1].value+valueCompetitor1,
            "color": "hsl(56, 70%, 50%)"
          },
          {
            "id": "World Supply Company",
            "label": "World Supply Company",
            "value": state.data[2].value+valueCompetitor2,
            "color": "hsl(288, 70%, 50%)"
          },
          {
            "id": "Metal PPC",
            "label": "Metal PPC",
            "value": state.data[3].value+valueCompetitor3,
            "color": "hsl(299, 70%, 50%)"
          },
          {
            "id": "DM Company",
            "label": "DM Company",
            "value": state.data[4].value+valueCompetitor4,
            "color": "hsl(165, 70%, 50%)"
          }
        ],
        formerMarketShare : state.newMarketShare,
        newMarketShare :this.props.totalPaperclipssold/(this.props.totalPaperclipssold + (state.data[1].value+valueCompetitor1)+(state.data[2].value+valueCompetitor2) + (state.data[3].value+valueCompetitor3) + (state.data[4].value+valueCompetitor4))
          });
        });

    }

    componentDidMount(){

      this.timerCompetitorMarket = setInterval(()=>{
                                    this.compileDataForPieChart(61000,24000,35000,22000)
                                  },1000);
      
    }

    componentWillUnmount(){
      clearInterval(this.timerCompetitorMarket);
    }

    render(){

        return (
        <div className="activity-dashboard interface-div">
            <h2>MARKET ACTIVITY</h2>
            <div className="activity-content">
                <div className="activity-kpi">
                    <p>Regional Market Share: {Math.round(this.state.newMarketShare*100)}%</p>
                    <p>Number of competitors: 4</p>
                    <p>Marketshare Growth: {(this.state.newMarketShare > 0 && this.state.formerMarketShare > 0)  ? <span>{Math.round(((this.state.newMarketShare-this.state.formerMarketShare)/this.state.formerMarketShare)*100)} %</span> : <span>Calculating...</span> }</p>
                </div>

                <div className="pie-Chart">
                    <ResponsivePie data={this.state.data} fill={this.state.fill} enableRadialLabels={false} padAngle={0} innerRadius={0.55}/>
                </div>
            </div>

        </div>);
    }    
}

export default DashboardActivity
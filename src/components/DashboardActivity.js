import React, { Component } from 'react';
import ResponsivePie from './ResponsivePie.js'

class DashboardActivity extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                  "id": this.props.text.gameTitles.competitor1[this.props.lang],
                  "label": this.props.text.gameTitles.competitor1[this.props.lang],
                  "value": this.props.totalPaperclipssold,
                  "color": "hsl(151, 70%, 50%)"
                },
                {
                  "id": this.props.text.gameTitles.competitor2[this.props.lang],
                  "label": this.props.text.gameTitles.competitor2[this.props.lang],
                  "value": this.props.totalPaperclipssold*4,
                  "color": "hsl(56, 70%, 50%)"
                },
                {
                  "id": this.props.text.gameTitles.competitor3[this.props.lang],
                  "label": this.props.text.gameTitles.competitor3[this.props.lang],
                  "value": this.props.totalPaperclipssold*5,
                  "color": "hsl(288, 70%, 50%)"
                },
                {
                  "id": this.props.text.gameTitles.competitor4[this.props.lang],
                  "label": this.props.text.gameTitles.competitor4[this.props.lang],
                  "value": this.props.totalPaperclipssold*6,
                  "color": "hsl(299, 70%, 50%)"
                },
                {
                  "id": this.props.text.gameTitles.competitor5[this.props.lang],
                  "label": this.props.text.gameTitles.competitor5[this.props.lang],
                  "value": this.props.totalPaperclipssold*20,
                  "color": "hsl(165, 70%, 50%)"
                }
              ],
              formerMarketShare : 0,
              newMarketShare : 0,
              fill : [],
              numberOfCompetitor : 4
        }
      this.compileDataForPieChart = this.compileDataForPieChart.bind(this) ;
      this.killTheMarket = this.killTheMarket.bind(this) ;
      
    }

    compileDataForPieChart(valueCompetitor1, valueCompetitor2, valueCompetitor3, valueCompetitor4){

      this.setState(state => { return ({
        data : [
          {
            "id": state.data[0].id,
            "label": state.data[0].label,
            "value": this.props.totalPaperclipssold,
            "color": "hsl(151, 70%, 50%)"
          },
          {
            "id": state.data[1].id,
            "label": state.data[1].label,
            "value": state.data[1].value+valueCompetitor1,
            "color": "hsl(56, 70%, 50%)"
          },
          {
            "id": state.data[2].id,
            "label": state.data[2].label,
            "value": state.data[2].value+valueCompetitor2,
            "color": "hsl(288, 70%, 50%)"
          },
          {
            "id": state.data[3].id,
            "label": state.data[3].label,
            "value": state.data[3].value+valueCompetitor3,
            "color": "hsl(299, 70%, 50%)"
          },
          {
            "id": state.data[4].id,
            "label": state.data[4].label,
            "value": state.data[4].value+valueCompetitor4,
            "color": "hsl(165, 70%, 50%)"
          }
        ],
        formerMarketShare : state.newMarketShare,
        newMarketShare :this.props.totalPaperclipssold/(this.props.totalPaperclipssold + (state.data[1].value+valueCompetitor1)+(state.data[2].value+valueCompetitor2) + (state.data[3].value+valueCompetitor3) + (state.data[4].value+valueCompetitor4))
          });
        });

    }

    killTheMarket(){
      clearInterval(this.timerCompetitorMarket);

      this.setState((state => { return ({
        data : [
          {
            "id": state.data[0].id,
            "label": state.data[0].label,
            "value": this.props.totalPaperclipssold,
            "color": "hsl(151, 70%, 50%)"
          }
        ],
        newMarketShare : 1,
        numberOfCompetitor : 0
      })})); 
      
      setInterval(()=>
      {this.setState((state => { return ({
        data : [
          {
            "id": state.data[0].id,
            "label": state.data[0].label,
            "value": this.props.totalPaperclipssold,
            "color": "hsl(151, 70%, 50%)"
          }
        ],
        newMarketShare : 1,
        numberOfCompetitor : 0
      })}));
    }, 1000)

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
            <h2>{this.props.text.gameTitles.dashboardActivityTitle[this.props.lang]}</h2>
            <div className="activity-content">
                <div className="activity-kpi">
                    <p className="containsHint" className="data-title">{this.props.text.gameTitles.marketShare[this.props.lang]}<span className="data">{Math.round(this.state.newMarketShare*100)}%</span><span className="hint">{this.props.text.gameTitles.basedOnSales[this.props.lang]}</span></p>
                  <p className="data-title">{this.props.text.gameTitles.numberOfCompetitors[this.props.lang]}<span className="data">{this.state.numberOfCompetitor}</span></p>
                    <p className="data-title">{this.props.text.gameTitles.growth[this.props.lang]}{(this.state.newMarketShare > 0 && this.state.formerMarketShare > 0)  ? <span className="data">{Math.round(((this.state.newMarketShare-this.state.formerMarketShare)/this.state.formerMarketShare)*100)} %</span> : <span> Calculating...</span> }</p>
                </div>

                <div className="pie-Chart">
                    <ResponsivePie data={this.state.data} fill={this.state.fill} enableRadialLabels={false} padAngle={0} innerRadius={0.55}/>
                </div>
            </div>

        </div>);
    }    
}

export default DashboardActivity
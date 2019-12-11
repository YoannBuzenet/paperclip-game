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
                  "id": "The Berlin Company",
                  "label": "The Berlin Company",
                  "value": this.props.totalPaperclipssold*4,
                  "color": "hsl(56, 70%, 50%)"
                },
                {
                  "id": "Paris Paperclips",
                  "label": "Paris Paperclips",
                  "value": this.props.totalPaperclipssold*5,
                  "color": "hsl(288, 70%, 50%)"
                },
                {
                  "id": "Madrid Paperclips",
                  "label": "Madrid Paperclips",
                  "value": this.props.totalPaperclipssold*6,
                  "color": "hsl(299, 70%, 50%)"
                },
                {
                  "id": "London Metal",
                  "label": "London Metal",
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
            <h2>MARKET ACTIVITY</h2>
            <div className="activity-content">
                <div className="activity-kpi">
                    <p className="containsHint" className="data-title">Market Share<span className="data">{Math.round(this.state.newMarketShare*100)}%</span><span className="hint">(based on sales)</span></p>
                  <p className="data-title">Number of competitors<span className="data">{this.state.numberOfCompetitor}</span></p>
                    <p className="data-title">Marketshare Growth{(this.state.newMarketShare > 0 && this.state.formerMarketShare > 0)  ? <span className="data">{Math.round(((this.state.newMarketShare-this.state.formerMarketShare)/this.state.formerMarketShare)*100)} %</span> : <span> Calculating...</span> }</p>
                </div>

                <div className="pie-Chart">
                    <ResponsivePie data={this.state.data} fill={this.state.fill} enableRadialLabels={false} padAngle={0} innerRadius={0.55}/>
                </div>
            </div>

        </div>);
    }    
}

export default DashboardActivity
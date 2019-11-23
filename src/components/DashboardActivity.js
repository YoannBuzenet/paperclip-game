import React, { Component } from 'react';
import ResponsivePie from './ResponsivePie.js'

class DashboardActivity extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                  "id": "sass",
                  "label": "sass",
                  "value": 433,
                  "color": "hsl(151, 70%, 50%)"
                },
                {
                  "id": "scala",
                  "label": "scala",
                  "value": 276,
                  "color": "hsl(56, 70%, 50%)"
                },
                {
                  "id": "hack",
                  "label": "hack",
                  "value": 557,
                  "color": "hsl(288, 70%, 50%)"
                },
                {
                  "id": "lisp",
                  "label": "lisp",
                  "value": 45,
                  "color": "hsl(299, 70%, 50%)"
                },
                {
                  "id": "erlang",
                  "label": "erlang",
                  "value": 420,
                  "color": "hsl(165, 70%, 50%)"
                }
              ],
              fill : [
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]
        }
    }

    render(){

        return (
        <div className="activity-dashboard interface-div">
            <h2>MARKET ACTIVITY</h2>
            <div className="activity-content">
                <div className="activity-kpi">
                    <p>National Market Share: 3%</p>
                    <p>Number of competitors : 6</p>
                    <p>Growth %</p>
                    <p>Notoriety : 0.05%</p>
                </div>

                <div className="pie-Chart">
                    <ResponsivePie data={this.state.data} fill={this.state.fill} enableRadialLabels={false} padAngle={0} />
                </div>
            </div>

        </div>);
    }    
}

export default DashboardActivity
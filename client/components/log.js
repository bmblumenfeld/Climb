import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';




class Log extends React.Component {
  constructor(props){
    super(props)
      
  }
  

  render() {
		return (
		  <div className="buy-main"> 
        <h1>Hope you are having a great climb!</h1>
        <div>Here are a few quick things before we get started!</div>
        <XYPlot
            width={300}
            height={300}
                >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                    data={[
                        {x: 1, y: 4},
                        {x: 5, y: 2},
                        {x: 15, y: 6}
                    ]}/>
            </XYPlot>
      </div>
		)

  }


}



export default Log
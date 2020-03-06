import React from 'react';
import DayCard from './DayCard';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=702dd3f7c83d947fcc084f5af1b9f70f`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }


// this section of the code is what doesnt work because DayCard hasn't been defined
  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast</h1>
      <h5 className="display-5 text-muted">London, UK</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }

}

export default WeekContainer;

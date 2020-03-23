import React from 'react';
import './weekcontainer.css';
import DayCard from './DayCard';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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

  onSubmitCloudy = () => {
    this.props.history.push('/cloudy');
  }

  onSubmitSunny = () => {
    this.props.history.push('/sunny');
  }

  onSubmitRainy = () => {
    this.props.history.push('/rainy');
  }

  render() {
    var suggestions = '/somewhere'
    return (
      <div class="AApp">
      <h2 id="Atitle">Plan Ahead</h2>
      <div className="container">
      <br></br>
      <div className="column">

        <Button id="tosuggestion1" onClick={this.onSubmitSunny}>
              Select this date
        </Button>

        <br></br>

        <Button id="tosuggestion2" onClick={this.onSubmitSunny}>
              Select this date
        </Button>

        <br></br>

        <Button id="tosuggestion3" onClick={this.onSubmitCloudy}>
              Select this date
        </Button>

        <br></br>

        <Button id="tosuggestion4" onClick={this.onSubmitCloudy}>
              Select this date
        </Button>

        <br></br>

        <Button id="tosuggestion5" onClick={this.onSubmitRainy}>
              Select this date
        </Button>

      </div>
      <div className="row">
          {this.formatDayCards()}
      </div>
      </div>
      <div class = "logo">
        <img src = {logo} alt="Logo"/>
      </div>
      </div>
    )
  }
}

export default WeekContainer;

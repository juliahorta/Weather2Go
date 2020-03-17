import React from 'react';
import './daycard.css';
var moment = require('moment');


const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const kelvin = Math.round(reading.main.temp)
  const celsius = Math.round(kelvin - 273.15)

  const imgURL = `owf owf-${reading.weather[0].id} owf-4x`

  return (
  <div class="mainn">
    <div className="col">
      <div className="card">
        <p id="day">{moment(newDate).format('dddd')}</p>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        <p id="day">{degreeType === "celsius" ? celsius + "°C" : celsius + "°C"}</p>
        <p>{reading.weather[0].description}</p>
    </div>
    </div>
    </div>
  )
}

export default DayCard;

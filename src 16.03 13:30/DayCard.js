import React from 'react';
var moment = require('moment');

const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const kelvin = Math.round(reading.main.temp)
  const celsius = Math.round(kelvin - 273.15)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div class="out">
      <div class="box">
        <h3>{moment(newDate).format('dddd')}</h3>
        <p>{moment(newDate).format(' Do')}</p>
        <i className={imgURL}></i>
        <h2>{degreeType === "celsius" ? celsius + "°C" : celsius + "°C"}</h2>
      </div>
    </div>
  )
}

export default DayCard;

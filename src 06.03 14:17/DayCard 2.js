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
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        <h2>{degreeType === "celsius" ? celsius + "°C" : celsius + "°C"}</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;

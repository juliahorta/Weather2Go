import React from 'react';


class CurrentWeather extends React.Component {
  render() {
    return (
      <div>
        <div class = "upper-center">
          <h4>Cloudy</h4>
          <h1>15°</h1>
        </div>

        <div class = "main-center">
          <div class = "temp">
            <i class="wi wi-cloudy"></i>
            <h6>15°</h6>
            <h6>Now</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-cloudy"></i>
            <h6>15°</h6>
            <h6>9am</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-day-cloudy"></i>
            <h6>17°</h6>
            <h6>10am</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-day-cloudy"></i>
            <h6>17°</h6>
            <h6>11am</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-day-cloudy"></i>
            <h6>18°</h6>
            <h6>12pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-day-cloudy"></i>
            <h6>16°</h6>
            <h6>1pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-day-cloudy"></i>
            <h6>16°</h6>
            <h6>2pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-cloudy"></i>
            <h6>16°</h6>
            <h6>3pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-cloudy"></i>
            <h6>15°</h6>
            <h6>4pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-cloud"></i>
            <h6>13°</h6>
            <h6>5pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-cloud"></i>
            <h6>12°</h6>
            <h6>6pm</h6>
          </div>

          <div class = "temp">
            <i class="wi wi-night-alt-cloudy"></i>
            <h6>10°</h6>
            <h6>7pm</h6>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default CurrentWeather;

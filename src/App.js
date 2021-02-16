import React, { useState } from 'react';
import CardList from './CardList.js'
import './App.css'

function App() {
  const [data, setData] = useState({
    "lat":33.4418,
    "lon":-94.0377,
    "timezone":"America/Chicago",
    "timezone_offset":-21600,
    "daily":[{
      "dt":1613412000,
      "sunrise":1613394000,
      "sunset":1613433648,
      "temp":{
              "day":-7.62,
              "min":-16.31,
              "max":-6.77,
              "night":-16.31,
              "eve":-9.86,
              "morn":-10},
      "feels_like":{
                  "day":-13.34,
                  "night":-22.28,
                  "eve":-16.14,
                  "morn":-15.77},
      "pressure":1024,
      "humidity":94,
      "dew_point":-10.12,
      "wind_speed":3.98,
      "wind_deg":330,
      "weather":[{
        "id":601,
        "main":"Snow",
        "description":"snow",
        "icon":"13d"}],
      "clouds":100,
      "pop":1,"snow":11.26,"uvi":4.21},{
        "dt":1613498400,"sunrise":1613480339,"sunset":1613520102,"temp":{"day":-9,"min":-20.33,"max":-5.68,"night":-6.35,"eve":-6.57,"morn":-19.95},"feels_like":{"day":-13.84,"night":-11.68,"eve":-10.38,"morn":-25.11},"pressure":1025,"humidity":92,"dew_point":-12.46,"wind_speed":2.54,"wind_deg":142,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":17,"pop":0.07,"uvi":4.75},{"dt":1613584800,"sunrise":1613566677,"sunset":1613606556,"temp":{"day":-7.42,"min":-9.19,"max":-3.32,"night":-3.32,"eve":-4.72,"morn":-9.13},"feels_like":{"day":-13.03,"night":-9.36,"eve":-10.28,"morn":-15.45},"pressure":1020,"humidity":98,"dew_point":-8.23,"wind_speed":3.91,"wind_deg":42,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":100,"pop":1,"snow":4.51,"uvi":1.03},{"dt":1613671200,"sunrise":1613653014,"sunset":1613693010,"temp":{"day":-0.6,"min":-5.61,"max":0.07,"night":-5.61,"eve":-1.09,"morn":-3.77},"feels_like":{"day":-5.63,"night":-10.81,"eve":-6.04,"morn":-9.01},"pressure":1023,"humidity":99,"dew_point":-0.88,"wind_speed":4.2,"wind_deg":331,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":95,"pop":0.8,"snow":1.25,"uvi":3.55},{"dt":1613757600,"sunrise":1613739350,"sunset":1613779464,"temp":{"day":-1.94,"min":-12.68,"max":-0.16,"night":-4.56,"eve":-0.44,"morn":-12.68},"feels_like":{"day":-5.17,"night":-8.89,"eve":-3.93,"morn":-17.1},"pressure":1032,"humidity":98,"dew_point":-2.68,"wind_speed":1.34,"wind_deg":206,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":0,"pop":0,"uvi":6.52}]}
)
  
  return (
    <div className="App">
      <p className="title center">Weather App</p>
      
      <CardList weathers={data.daily} />
    </div>);
}

export default App;
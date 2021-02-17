import React, { useState, useEffect } from 'react';
import CardList from './CardList.js'
import './App.css'
import {API_KEY, BASE_URL} from './api/config.js';
import {usePosition} from 'use-position';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [metric, setMetric] = useState(true);
  const { latitude, longitude, error } = usePosition(true, {enableHighAccuracy: true});


  useEffect(() => {
    if(!data && latitude && longitude && !error){
      setLoading(true);
      fetch(BASE_URL + `&lat=${latitude}&lon=${longitude}` + API_KEY)
      .then(response => response.json())
      .then( resp => {
                      resp.daily.pop();
                      setData(resp);
                      setLoading(false)});
    };
  }, [metric, latitude, longitude, error]);

  const renderContent = () =>{
    if(error)
      return (<h2 className="center">{error}</h2>);
    if(!data && loading)
      return (<h2 className="center">LOADING...</h2>);
    return (<CardList metric={metric} weathers={data.daily} />);
  }

  const renderUnit = () => {
    if(metric){
      return (<button onClick={()=>setMetric(false)} className="unitButton"><strong>°C</strong>|°F</button>)
    }
    else{
      return (<button onClick={()=>setMetric(true)} className="unitButton">°C|<strong>°F</strong></button>)
    }

  }
  return (
    <div className="App">
      <div className="flexCont">
        <p className="title center">Weather App</p>
              {renderUnit()}
      </div>
      {renderContent()}
    </div>);
}

export default App;
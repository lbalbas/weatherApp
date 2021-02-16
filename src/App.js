import React, { useState, useEffect } from 'react';
import CardList from './CardList.js'
import './App.css'
import {API_KEY, BASE_URL} from './api/config.js';
import {usePosition} from 'use-position';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { latitude, longitude, error } = usePosition(true, {enableHighAccuracy: true});


  useEffect(() => {
    if(latitude && longitude && !error){
      setLoading(true);
      fetch(BASE_URL + `&lat=${latitude}&lon=${longitude}` + API_KEY)
      .then(response => response.json())
      .then( resp => {
                      resp.daily.pop();
                      setData(resp);
                      setLoading(false)});
    };
  }, [latitude, longitude, error]);

  const renderContent = () =>{
    if(error)
      return (<h2 className="center">{error}</h2>);
    if(!data && loading)
      return (<h2 className="center">LOADING...</h2>);
    return (<CardList weathers={data.daily} />);
  }

  return (
    <div className="App">
      <p className="title center">Weather App</p>
  
      {renderContent()}
    </div>);
}

export default App;
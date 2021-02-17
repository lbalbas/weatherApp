import React from 'react';
import WeatherCard from './WeatherCard.js'

const CardList = ({weathers, metric}) => {
	const convertMetric = (temp) =>{
		if(metric){
			return temp + "°C";
		}
		temp = (temp * 1.8) + 32;
		let t = temp.toString();
		return t.substring(0,5) + "°F";
	}
	return(
		<div className="cardContainer">
			{weathers.map(({dt,temp, weather}) =>(
				<WeatherCard 
		          day={dt * 1000}
		          mnTemp={convertMetric(temp.min)} 
		          mxTemp={convertMetric(temp.max)} 
		          weather={weather[0].main} 
		          icon={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
		          key={dt}
		        />
			))}
		</div>
	)
}

export default CardList;
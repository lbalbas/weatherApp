import React from 'react';
import WeatherCard from './WeatherCard.js'

const CardList = ({weathers}) => {
	
	return(
		<div className="cardContainer">
			{weathers.map(({dt,temp, weather}) =>(
				<WeatherCard 
		          day={dt * 1000}
		          mnTemp={temp.min} 
		          mxTemp={temp.max} 
		          weather={weather[0].main} 
		          icon={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
		          key={dt}
		        />
			))}
		</div>
	)
}

export default CardList;
import React from 'react';

const WeatherCard = ({day, mnTemp, mxTemp, weather, icon}) => {
	var date = new Date(day);
	var weekDay;
	switch (date.getDay()) {
		case 1:
			weekDay = "Mon";
			break;
		case 2:
			weekDay = "Tue";
			break;
		case 3:
			weekDay = "Wed";
			break;
		case 4:
			weekDay = "Thu";
			break;
		case 5:
			weekDay = "Fri";
			break;
		case 6:
			weekDay = "Sat";
			break;
		case 7:
			weekDay = "Sun";
			break;
	};
	return (
			<div className="card">
				<p className="center">{weekDay}</p>
				<img src={icon} title={weather} alt={weather}/>
				<p className="center mx">{mxTemp}<ion-icon name="chevron-up-outline"></ion-icon></p>
				<p className="center mn">{mnTemp}<ion-icon name="chevron-down-outline"></ion-icon></p>	 
			</div>
			);
};

export default WeatherCard;
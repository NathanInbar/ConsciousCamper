import React, { useState, useEffect } from 'react';
import Juicer from './Juicer';

import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';

import '../Styles/Juicebox.css';
import SelectInput from '@material-ui/core/Select/SelectInput';
import { wait } from '@testing-library/dom';

function JuiceBox({options, setOptions}) {
    
    const [apiWeatherData, setApiWeatherData] = useState({});
    const [aqiData, setAQIData] = useState({});
    const [handpicked, setHandpicked] = useState({});


    const WEATHER_API_KEY = "27b47fdc58d927867be7869529c0811a";
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${options.position.lat}&lon=${options.position.lng}&units=imperial&appid=${WEATHER_API_KEY}`;
    const WEATHER_API_AQI_URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${options.position.lat}&lon=${options.position.lng}&appid=${WEATHER_API_KEY}`
    
    useEffect(() => {
        console.log("entered useeffect");
        fetchData();
    }, [WEATHER_API_URL]);

    function fetchData(){
        fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => setApiWeatherData(data));
        fetch(WEATHER_API_AQI_URL)
            .then(res => res.json())
            .then(data => setAQIData(data));
    }

    useEffect(() =>{getHandpickedWeatherData()},[apiWeatherData]);

    useEffect(() =>{fetchData()},[options]);


    function getHandpickedWeatherData(){
        if(!apiWeatherData.daily) return;

        let handpicked = {};
        let data = apiWeatherData.daily[7];
        handpicked.description = data.weather[0].description; // Clear Skies, Sunny Day... etc.
        handpicked.low_temperature =  data.temp.min;
        handpicked.high_temperature = data.temp.max;
        handpicked.humidity = data.humidity;
        handpicked.windvelocity = data.wind_speed;
        handpicked.sunrise = String(new Date(data.sunrise * 1000)).substr(16, 8);
        handpicked.sunset = String(new Date(data.sunset * 1000)).substr(16, 8);
        handpicked.UV = data.uvi;
        handpicked.AQI = getAQIData();
        handpicked.precipitation = data.pop;
        console.log('handpicked: ', handpicked);
        setHandpicked(handpicked);
    }
      
    function getApiWeatherData(){
        console.log('weather data: ', apiWeatherData);
        return apiWeatherData;
    }

    function getAQIData(){
        let aqi = aqiData.list[0].main.aqi;
        return aqi;
    }
    // 
    
    return (
        <div className="juicebox">
            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Weather"
            data={handpicked.description}
            />

            <Juicer
            metric_icon={<OpacityRoundedIcon className="juicer__image"/>}
            metric_name="Chance of Rain"
            data={handpicked.precipitation + '%'}
            />

            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Low Temperature"
            data={parseInt(handpicked.low_temperature) + "°F"}
            />

            <Juicer
            metric_icon={<OpacityRoundedIcon className="juicer__image"/>}
            metric_name="High Temperature"
            data={parseInt(handpicked.high_temperature) + "°F"}
            />

            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Humidity"
            data={handpicked.humidity + '%'}
            />
            
        </div>
    );
}
 
export default JuiceBox;
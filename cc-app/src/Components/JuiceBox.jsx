import React, { useState, useEffect } from 'react';
import Juicer from './Juicer';
import DoubleJuicer from './DoubleJuicer';

import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import '../Styles/Juicebox.css';
import SelectInput from '@material-ui/core/Select/SelectInput';
import { wait } from '@testing-library/dom';

function JuiceBox({options, setOptions, handpicked, setHandpicked}) {
    
    const [apiWeatherData, setApiWeatherData] = useState({});
    const [aqiData, setAQIData] = useState({});
    


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
        console.log('aqi: ', aqi);
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

            <DoubleJuicer 
            metric_icon1={<AcUnitIcon className="juicer__image"/>}
            metric_name1="Low Temp."
            data1={parseInt(handpicked.low_temperature) + "°F"}
            metric_icon2={<WhatshotIcon className="juicer__image"/>}
            metric_name2="High Temp."
            data2={parseInt(handpicked.high_temperature) + "°F"}
            />        

            <DoubleJuicer 
            metric_icon1={<AcUnitIcon className="juicer__image"/>}
            metric_name1="Chance of Rain"
            data1={parseInt(handpicked.precipitation*100) + "%"}
            metric_icon2={<WhatshotIcon className="juicer__image"/>}
            metric_name2="Humidity"
            data2={handpicked.humidity + "%"}
            />    

            <DoubleJuicer 
            metric_icon1={<AcUnitIcon className="juicer__image"/>}
            metric_name1="Air Quality"
            data1={handpicked.AQI * 10}
            metric_icon2={<WhatshotIcon className="juicer__image"/>}
            metric_name2="UV"
            data2={handpicked.UV}
            />

            <Juicer
            metric_icon={<OpacityRoundedIcon className="juicer__image"/>}
            metric_name="Wind Speed"
            data={handpicked.windvelocity + " m/s"}
            />

            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Sunrise / Sunset"
            data={handpicked.sunrise}
            vertJuicer={true}
            vertJuicerText={handpicked.sunset}
            />


        </div>
    );
}
 
export default JuiceBox;
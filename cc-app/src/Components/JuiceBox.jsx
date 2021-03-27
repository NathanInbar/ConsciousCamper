import React, { useState } from 'react';
import Juicer from './Juicer';

import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';

import '../Styles/Juicebox.css';

function JuiceBox() {
    
    return (
        <div className="juicebox">
            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Weather"
            metric_text="Cloudy"
            />

            <Juicer
            metric_icon={<OpacityRoundedIcon className="juicer__image"/>}
            metric_name="Precipitation"
            metric_text="70%"
            />

            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Weather"
            metric_text="Cloudy"
            />

            <Juicer
            metric_icon={<OpacityRoundedIcon className="juicer__image"/>}
            metric_name="Precipitation"
            metric_text="70%"
            />

            <Juicer
            metric_icon={<FilterDramaIcon className="juicer__image"/>}
            metric_name="Weather"
            metric_text="Cloudy"
            />

        </div>
    );
}
 
export default JuiceBox;
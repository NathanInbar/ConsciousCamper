import React from 'react';
import '../Styles/DoubleJuicer.css';

function DoubleJuicer({metric_icon, metric_name, data}) {
    
    return (
        <div className="juicer__container">
            <div className="juicer__image__container">
                {metric_icon}
            </div>

            <div className="juicer__text">
                <p>{metric_name}</p>
                <p>{data}</p>
            </div>
        </div>
    );
}
 
export default DoubleJuicer;
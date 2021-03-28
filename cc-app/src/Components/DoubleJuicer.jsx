import React from 'react';
import '../Styles/Juicer.css';

function DoubleJuicer({metric_icon1, metric_name1, data1, metric_icon2, metric_name2, data2}) {
    
    return (
        <div className="djuicer__container">

            <div>
                <div className="juicer__image__container">
                    {metric_icon1}
                </div>

                <div className="djuicer__text">
                    <p>{metric_name1}</p>
                    <p>{data1}</p>
                </div>
            </div>

            <div className="divisor_vr"></div>

            <div>
                <div className="juicer__image__container">
                    {metric_icon2}
                </div>

                <div className="djuicer__text">
                    <p>{metric_name2}</p>
                    <p>{data2}</p>
                </div>
            </div>

        </div>
    );
}
 
export default DoubleJuicer;
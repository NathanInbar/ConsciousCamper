import React from 'react';
import '../Styles/Juicer.css';

function Juicer({metric_icon, metric_name, data, vertJuicer, vertJuicerText}) {
    
    return (
        <div className="juicer__container">
            <div className="juicer__image__container">
                {metric_icon}
            </div>

            <div className="juicer__text">
                <p>{metric_name}</p>
                <p>{data}</p>
            </div>

            {
                vertJuicer ? 
                (
                    <>
                    <div className="juicer__text__vert">
                        <p>{vertJuicerText}</p>
                    </div> 
                    </>
                ) : 
                (<></>)
            }

        </div>

    );
}
 
export default Juicer;
import React from 'react';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';

function Juicer() {
    
    return (
        <div className="juicer__container">
            <div className="juicer__image">
                <FilterDramaIcon/>
            </div>

            <div className="juicer__text">
                <p>Precipitation</p>
                <p>70</p>
            </div>
        </div>
    );
}
 
export default Juicer;
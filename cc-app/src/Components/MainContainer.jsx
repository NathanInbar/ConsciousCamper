import React, { useState } from 'react';
import FireplaceRoundedIcon from '@material-ui/icons/FireplaceRounded';
import Streetview from 'react-google-streetview';
import Autocomplete from 'react-google-autocomplete';
import '../Styles/mainContainer.css';

function MainContainer() {
    
    return (

        <div className="mainContainer">
            <div className="nav__container">
                <div className="logo__container">
                    <FireplaceRoundedIcon className="fireplace__icon" fontSize="large"/>
                    <h1 className="logo__text">&lt;Conscious Camper&gt;</h1>
                </div>
            </div>

            <div className="search__container">
                {/*<input placeholder="Search" id="searchTextField" />*/}
                <Autocomplete
                    apiKey="AIzaSyDOPCiF4znZiSiBibkiD70UfVa41OHgojQ"
                />
            </div>

            <div className="streetView__container">
                <div className="streetView__container__content">
                    <Streetview
                        apiKey="AIzaSyDOPCiF4znZiSiBibkiD70UfVa41OHgojQ" 
                    />
                </div>
            </div>

        </div>
    );
}
 
export default MainContainer;
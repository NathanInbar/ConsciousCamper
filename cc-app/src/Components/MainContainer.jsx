import React, { useEffect, useState } from 'react';
import FireplaceRoundedIcon from '@material-ui/icons/FireplaceRounded';
import Streetview from 'react-google-streetview';
import Autocomplete from 'react-google-autocomplete';
import '../Styles/mainContainer.css';

import logo from '../assets/cc_logo.png';

function MainContainer() {
    const[options, setOptions] = useState({position:{ lat: 34.3260653, lng: -117.8325833 }});

    function clicked(place)
    {
        let pos = place.geometry.location;

        setOptions({position:{ lat: pos.lat(), lng: pos.lng() }});
    }

    useState(() => {
    }, [options]);


    return (
        //need a way to get the lat/lng out of the search box object
        <div className="mainContainer">
            <div className="nav__container">
                <div className="logo__container">
                    {/*<FireplaceRoundedIcon className="fireplace__icon" fontSize="large"/>*/}
                    <img src={logo} alt="cc logo" className="fireplace__icon"/>
                        
                    <h1 className="logo__text">&lt;Conscious Camper&gt;</h1>
                </div>
            </div>

            <div className="search__container">
                <Autocomplete
                    style={{width: '500px', height: '30px', outline: 'none'}}
                    className="search__container__search"
                    apiKey="AIzaSyDOPCiF4znZiSiBibkiD70UfVa41OHgojQ"
                    placeholder="Where do you want to camp?"
                    onPlaceSelected={(place) => {
                        clicked(place);
                      }}
                />
            </div>

            <div className="streetView__container">
                <div className="streetView__container__content">
                    <Streetview
                        apiKey="AIzaSyDOPCiF4znZiSiBibkiD70UfVa41OHgojQ"
                        streetViewPanoramaOptions={options} 
                    />
                </div>
            </div>

        </div>
    );
}
 
export default MainContainer;
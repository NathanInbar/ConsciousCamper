import React, { useEffect, useState } from 'react';
import FireplaceRoundedIcon from '@material-ui/icons/FireplaceRounded';
import Streetview from 'react-google-streetview';
import Autocomplete from 'react-google-autocomplete';
import '../Styles/mainContainer.css';
import logo from '../assets/cc_logo.png';
function MainContainer({options, setOptions, handpicked, setHandpicked}) {

    const [campScore, setCampScore] = useState(50);

    function clicked(place)
    {
        let pos = place.geometry.location;
        setOptions({position:{ lat: pos.lat(), lng: pos.lng() }});
    }

    useEffect(() => {
    }, [options]);

    useEffect(() =>{
        getScore();
    }, [handpicked])



    async function getScore(){
        console.log("getting score");
        const location_data = handpicked;
        const response = await fetch('/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(location_data)
        });
        if(response.ok){
            response.json().then(data => setCampScore(parseInt(data['camp-score'])));
        }
    }


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
                <div className="campfire__container">
                    <h3>Camp Score</h3>
                    <img src={logo} alt=""/>
                    <h3>{campScore}</h3>
                </div>
            </div>

        </div>
    );
}
 
export default MainContainer;
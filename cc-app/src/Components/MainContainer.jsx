import React, { useState } from 'react';
import FireplaceRoundedIcon from '@material-ui/icons/FireplaceRounded';
import logo from '../assets/cc.png';
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
                <input placeholder="Search" id="searchTextField" />
            </div>

            <div className="streetView__container">
                <div className="streetView__container__content">
                    
                </div>
            </div>

        </div>
    );
}
 
export default MainContainer;
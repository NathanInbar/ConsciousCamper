import React, { useState } from 'react';
import '../Styles/FeedPost.css';

function FeedPost ({image, setOptions, text, location, latitude, longitude}){
    const geo = {position: {lat:latitude, lng:longitude}, pov: {heading: 195, pitch:-3}};
    function goStreet(){
        console.log('go street');
        setOptions(geo);
    }
    
    return(
        <a>
            <div className="post__box">
                <div className="post__content">
                    <img onClick={goStreet} src={image} alt=""/>
                    <div>
                        <p>{text}</p>
                        <h4 className="post__location">{location}</h4>
                    </div>
                </div>
            </div>
        </a>
    );

}
 
export default FeedPost;
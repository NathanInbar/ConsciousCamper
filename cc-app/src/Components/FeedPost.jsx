import React, { useState } from 'react';
import '../Styles/FeedPost.css';

function FeedPost ({image, link, text, location}){
    
    return(
        <a href={link} target="_blank">
            <div className="post__box">
                <div className="post__content">
                    <img src={image} alt=""/>
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
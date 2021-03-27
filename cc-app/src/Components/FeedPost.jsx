import React, { useState } from 'react';
import '../Styles/FeedPost.css';

function FeedPost ({text}){
    
    return(
        <div className="post__box">
            <div className="post__content">
                <h3>{text}</h3>
            </div>
        </div>
    );

}
 
export default FeedPost;
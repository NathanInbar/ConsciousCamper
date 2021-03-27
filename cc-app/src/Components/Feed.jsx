import React, { useState } from 'react';
import FeedPost from './FeedPost';
import '../Styles/Feed.css'

function Feed (){
    
    return(
        <div className="feed__container">
            
            <div className="feed__header">
                <h2>Feed</h2>    
            </div>

            <FeedPost
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <FeedPost
                text="Mattis pellentesque id nibh tortor id aliquet. Diam sit amet nisl suscipit adipiscing."
            />
            <FeedPost
                text="Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ipsum dolor sit amet consectetur."
            />
            <FeedPost
                text="Id semper risus in hendrerit gravida rutrum. Egestas erat imperdiet sed euismod nisi porta lorem mollis."
            />
            <FeedPost
                text="Purus semper eget duis at tellus at urna condimentum mattis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum."
            />
        </div>
    );

}
 
export default Feed;
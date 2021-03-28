import React, { useState } from 'react';
import FeedPost from './FeedPost';
import '../Styles/Feed.css';

function Feed (){
    
    return(
        <div className="feed__container">
            
            <div className="feed__header">
                <h2>@conscious_camper Instagram Feed</h2>   
            </div>

            <FeedPost
                image="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/165076942_518963805774301_1236151567132559633_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=WJFYJqc7RNwAX8MmaQt&ccb=7-4&oh=09fc3b4d18dbddd6d4d0f4f04c7e243e&oe=6089962B&_nc_sid=4f375e"
                link = "https://www.instagram.com/p/CM8Tvb7BKl6/"
                text = "There are 46,000 pieces of plastic in every square mile of ocean. Limit your plastic usage to save the waves."
                location = "Big Sur, California"
            />
            <FeedPost
                image="https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/164893570_151576540194134_2929834969948204965_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=FkAvJPfS5r4AX-cTXLD&ccb=7-4&oh=8b7bc8d7a378edcaf9c428cff18abbac&oe=6089BAA5&_nc_sid=4f375e"
                link = "https://www.instagram.com/p/CM8qpSAhaBz/"
                text = "We consume 1.7x Earth's natural resources yearly. Be conscious of how you can help reduce resource consumption."
                location="Zion National Park, Utah"
            />
            
            <FeedPost
                image = "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/165727979_286585002823545_7648129464817822786_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Iug1We7-R68AX-CxkTn&ccb=7-4&oh=ae84ddfafe8c6efbf5f6a0ac8a6ceed5&oe=6087D122&_nc_sid=4f375e"
                link = "https://www.instagram.com/p/CM8q5sChJ68/"
                text = "Even under a two degrees Celsius warming scenario, five percent of animal and plant species will be at risk from extinction."
                location = "Vancouver, British Columbia"
            />

            <FeedPost
                image = "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/166051864_1192498467848401_2173716274161860231_n.jpg?tp=1&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=qY1PwaYYxecAX_E1xiY&ccb=7-4&oh=c6eb9918469fa729cf84ad22e5703908&oe=608AFBE7&_nc_sid=4f375e"
                link = "https://www.instagram.com/p/CM8sRZcBaGs/"
                text = "Over nine million people die every year as a direct or indirect result of the pollution. Helping the Earth also helps us!"
                location = "Moab, Utah"
            />

        </div>
    );

}
 
export default Feed;
import React from 'react'
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search'
import { 
   
   TwitterShareButton, 
   TwitterTweetEmbed } from "react-twitter-embed"

function Widgets() {
   return (
      <div className="widgets">
         <div className="widgets">
            <div className="widgets__input">
               <SearchIcon className="widgets__SearchIcon"/>
               <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
               <h2>What's happening</h2>

               <TwitterTweetEmbed tweetId={"858551177860055040"} />

               {/* <TwitterTimelineEmbed
               sourceType="profile" screenName="cleverqazi" options={{height:400}}
               /> */}

               <TwitterShareButton
               url={"https://rpangarego.netlify.app"}
               options={{text:"#reactjs is awesome", via: "Twitter Clone"}}
               />
            </div>
         </div>
      </div>
   )
}

export default Widgets
import React, { useState } from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core"
import db from "../../firebase"

function TweetBox() {
   const [tweetMessage, setTweetMessage] = useState("");
   const [tweetImage, setTweetImage] = useState("");
   
   const sendTweet = e =>{
      e.preventDefault();

      db.collection('posts').add({
         displayName: 'Popcorn',
         username:'popcorn_official',
         verified: true,
         text: tweetMessage,
         image: tweetImage,
         avatar: "person.jpg"
      })

      setTweetMessage("");
      setTweetImage("");
   }


   return (
      <div className="tweetBox">
         <form>
            <div className="tweetBox__input">
               <Avatar src="person.jpg" />
               <input type="text" value={tweetMessage} placeholder="What's happening?" onChange={(e)=>setTweetMessage(e.target.value)}/>
               
            </div>
               <input type="text" className="tweetBox__imageInput" placeholder="Enter image URL (opsional)"
                  onChange={(e)=>setTweetImage(e.target.value)}
               />
            <Button type="submit" className="tweetBox__tweetButton" onClick={sendTweet}>Tweet</Button>
         </form>   
      </div>
   )
}

export default TweetBox;
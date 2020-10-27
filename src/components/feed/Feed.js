import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [postsId, setPostsId] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
        setPostsId(snapshot.docs.map((doc) => doc.id));
      });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.length ? (
        <FlipMove>
          {posts.map((post, index) => (
            <Post
              key={index}
              id={postsId[index]}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>
      ) : (
        <div className="tweet_empty">
          <h3>No tweets so far.</h3>
        </div>
      )}
    </div>
  );
}

export default Feed;

import React, { useState } from 'react';
import PostForm from '../../components/PostForm';
import Post from '../../components/Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  const handlePost = (text) => {
    setPosts([...posts, text]);
  }

  return (
    <div className="feed">
        <h1>Publications</h1>
        <PostForm onPost={handlePost} />
          {posts.map((text, index) => (
              <Post key={index} text={text} />
          ))}
          
    </div>
  );
}

export default Feed;
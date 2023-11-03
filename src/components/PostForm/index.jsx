import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { postsAtom } from '../../jotai/store.js';

function PostForm() {
  const [content, setContent] = useState('');
  const [posts, setPosts] = useAtom(postsAtom);

  const handlePost = () => {
    if (content.trim() !== '') {
      setPosts([...posts, content]);
      setContent('');
    }
  }

  return (
    <div className="post-form">
      <textarea
        rows="4"
        placeholder="Écris ta publi mon loulou"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handlePost}>Publier</button>
    </div>
  );
}

export default PostForm;
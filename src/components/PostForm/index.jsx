import React, { useState } from 'react';

function PostForm({ onPost }) {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (content.trim() !== '') {
      onPost(content);
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
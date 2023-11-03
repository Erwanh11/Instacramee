import PostForm from '../../components/PostForm';
import Post from '../../components/Post';
import { useAtom } from 'jotai';
import { postsAtom } from '../../jotai/store.js'; 


function Feed() {
  const [posts] = useAtom(postsAtom);

  return (
    <div className="feed">
        <h1>Publications</h1>
        <PostForm />
          {posts.map((text, index) => (
              <Post key={index} text={text} />
          ))}
          
    </div>
  );
}

export default Feed;
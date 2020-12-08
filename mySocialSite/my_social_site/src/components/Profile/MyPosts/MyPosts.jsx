import React from 'react';
import Post from './Post/Post';


const MyPosts = () => {
  return <div className='posts' >
    My post
      <div>
      <textarea></textarea>
      <button>add Post</button>
      </div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
  </div>

}
export default MyPosts; 
import React from 'react';
import Post from './Post/Post';


const MyPosts = () => {
  return <div className='posts' >
    My post
      <div>
      <textarea></textarea>
      <button>add Post</button>
      </div>
      <Post message ='Hi, how are you?' like='10'/>
      <Post message = "It'is my first post!!!" like ='15'/>
      
  </div>

}
export default MyPosts; 
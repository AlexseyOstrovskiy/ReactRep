import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return <div className={s.item}>
    <img src='https://e7.pngegg.com/pngimages/744/592/png-clipart-first-explosion-red-nose-blue-face-male-avatar-nose-explosion.png'></img>
    {props.message}
    <div>
      <span>like {props.like}</span>
    </div>
    <br></br>
  </div>
}
export default Post; 
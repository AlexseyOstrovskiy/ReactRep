import React from 'react';
import  s from './Profile.module.css';


const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg'></img>
    </div>
    <div>
      ava+description
    </div>
    <div className='posts' >
      My post
      <div>
        new post
      </div>
      <div className={s.item}>
        Post1
      </div>
      <div className={s.item}>
        Post2
      </div>
    </div>
  </div>
}
export default Profile; 
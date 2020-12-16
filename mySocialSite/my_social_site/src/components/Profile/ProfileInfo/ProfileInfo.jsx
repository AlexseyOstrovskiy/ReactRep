import React from 'react';
import  s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return <div >
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVO2677vvizG95-Tv3T8UnoJAeItLtu8h8hQ&usqp=CAU' className={s.img}></img>
    </div>
    <div className={s.descriptionBloc}>
      ava+description
    </div>
  </div>
}
export default ProfileInfo; 
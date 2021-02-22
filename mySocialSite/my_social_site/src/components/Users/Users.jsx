import React from 'react';
import s from './users.module.css'

let Users =(props) =>{

    if(props.users.length === 0){
    props.setUsers([
    { id: 1, fotoUrl:'https://yt3.ggpht.com/a/AATXAJwFh4ooyh5RaBCdE-ozqqgbR2jb0V_Sk4nNaw=s900-c-k-c0xffffffff-no-rj-mo',
    followed:false, fullName: 'Alex', status: 'i am a boss', location :{city:'Mogilev', country:'Belarus'} },
   { id: 2, fotoUrl:'http://pl.pollipartner.com/wp-content/uploads/2017/11/mezczyzni-850x750.jpg',
    followed:true, fullName: 'Billy', status: 'i am a not boss', location :{city:'Moscow', country:'Russia'} },
   { id: 3, fotoUrl:'http://pl.pollipartner.com/wp-content/uploads/2017/11/mezczyzni-850x750.jpg',
   followed:false, fullName: 'Willy', status: 'i am drink beer now', location :{city:'Kiev', country:'Ukraine'} },]
   );
}

    return <div>
       {
           props.users.map(
               u=>
                <div key ={u.id}>
                    <span>
                        <div>
                            <img src={u.fotoUrl} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ?
                            <button onClick={()=> {props.unfollow(u.id)}}  >Unfollow</button>:
                            <button onClick={()=> {props.follow(u.id)}} >Follow</button> }
                            
                        </div>
                    </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                    </span>

                </div>
           )
       }
    </div>
}

export default Users;
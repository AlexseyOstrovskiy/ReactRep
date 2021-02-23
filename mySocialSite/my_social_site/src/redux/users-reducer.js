const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const  SET_USERS = 'SET_USERS';
let initialState = {
   users: [
      // { id: 1, fotoUrl:'https://yt3.ggpht.com/a/AATXAJwFh4ooyh5RaBCdE-ozqqgbR2jb0V_Sk4nNaw=s900-c-k-c0xffffffff-no-rj-mo',
      //  followed:false, fullName: 'Alex', status: 'i am a boss', location :{city:'Mogilev', country:'Belarus'} },
      // { id: 2, fotoUrl:'http://pl.pollipartner.com/wp-content/uploads/2017/11/mezczyzni-850x750.jpg',
      //  followed:true, fullName: 'Billy', status: 'i am a not boss', location :{city:'Moscow', country:'Russia'} },
      // { id: 3, fotoUrl:'http://pl.pollipartner.com/wp-content/uploads/2017/11/mezczyzni-850x750.jpg',
      // followed:false, fullName: 'Willy', status: 'i am drink beer now', location :{city:'Kiev', country:'Ukraine'} },
    ],  
    newPostText: 'it-Kamasutra'
  };

const usersReducer =(state = initialState, action) =>{
    switch(action.type ){
      case FOLLOW:
        return { ...state,
        // users:[...state.users]
        users: state.users.map(u =>{
          if(u.id===action.userId){
            return{...u, followed:true}
          }
          return u;
        })
      }
      case UNFOLLOW:
        return { ...state,
          // users:[...state.users]
          users: state.users.map(u =>{
            if(u.id===action.userId){
              return{...u, followed:false}
            }
            return u;
          })
        }
        case SET_USERS:{
          return{...state, users:[...state.users, ...action.users]}
        }
        default:
            return state;
            }
    }


export const followAC =(userId)=>({type:FOLLOW, userId})
export const unfollowAC =(userId)=>({type:UNFOLLOW, userId})
export const setUsersAC =(users)=>({type:SET_USERS, users})
export default usersReducer;
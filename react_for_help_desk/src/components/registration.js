import React from "react";

class Registration extends React.Component{
    render(){
        return(
        <div>
        <p>User name :</p>
        <input type="text" size="50"></input>

        <p>Password :</p>
        <input type="text" size="50"></input>
        <button >Enter</button>

        </div>
        );
    }
}

export default Registration;
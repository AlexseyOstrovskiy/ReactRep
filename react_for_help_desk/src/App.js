import React from "react";
import Header from "./components/header";
import Registration from "./components/registration";
import AllTickets from "./components/allTickets";

class App extends React.Component{


  render(){
    return(
      <div>
        <Header/>
        <Registration/>
      </div>
    )
  }
}
export default App;

import React from "react";

class AllTickets extends React.Component{
    render(){
        return(
            <div>
       <button>Create New Ticket</button>
       
       <br/>
       <button>All Tickets</button>
       <button>My Tickets</button>
       <br/>
       <br/>
       <table border="1">
        <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Desired Date</td>
        <td>Urgency</td>
        <td>Status</td>
        <td>Action</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </table>
       
   </div>
        );
    }
}

export default AllTickets;
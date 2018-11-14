import React, { Component } from 'react';
import Toggler from './toggler';
import axios from 'axios';
class Modal extends Component {
    state = { 
        isTogglerClicked: false,
        isOn:false
     }

     handleToggler=(data,isOn)=>{
         console.log(isOn);
         
        this.setState({isTogglerClicked:data, isOn});

     }

     onSave=async (id)=>{
        this.props.updateData(id,this.state.isOn);
        const {data:updated}=await axios.put(`http://localhost:9090/update/${id}`,
        {availability:this.state.isOn},
        {
            headers: {
                "Content-Type": "application/json", 
            }});
        console.log("updated");
       this.props.onClick();
     }
    render() { 
        const {data}=this.props;
        const {availability}=data;
        const saveClassName=this.state.isTogglerClicked ? "" :"disabled";
        return ( 
            <div id="modal">
               <div id="modalContent">
                     
                  <div> 
                      <span id="heading">{data.workspacename}</span>
                  
                   </div>
                   <hr></hr>
                   
                  
               <div style={{"text-align":"right"}}><Toggler isOn={availability}
               onClick={this.handleToggler}
               />
               </div>
            
               
               <table className="table" style={{"width":"80%"}}>
               
               <thead>
                   <th > Plan</th>
                   <th>Price</th>
               </thead>
               <tbody>
               {data.rates.map((rate,index)=>{
                   return(
                   <tr key={index}>
                   <td>{rate.planName} </td>
                   <td>{rate.price}</td></tr> 
                   );
               })}
               </tbody>
               </table>
               <hr></hr>
              <div id="buttons">
               <button className={`btn btn-primary ${saveClassName}`} onClick={()=>{this.onSave(data.workspaceid)}}>Save</button>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button className="btn btn-danger" onClick={()=>{this.props.onClick()}}>Close</button>
</div></div>
            </div>
         );
    }
}
 
export default Modal;
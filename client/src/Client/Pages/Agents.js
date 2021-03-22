import React,{useState,useEffect} from "react";
import Nav from "../../components/NavBar/Nav";
import { useDispatch, useSelector } from "react-redux";
import{getAgents} from "../../JS/actions"

const Agents = () => {
    const dispatch=useDispatch()
    const agents = useSelector((state) => state.userReducer.agents);
 useEffect(
  () => {
   dispatch(getAgents())
  },
  [],
);

  return (
    <div style={{ 
      backgroundImage: `url("https://i.stack.imgur.com/pMAiU.jpg")`, backgroundRepeat: "no-repeat",
        backgroundSize: "100%",height:"100%"
      }}>
       <Nav/>
      <div style={{paddingTop:'150px'}}>
      {agents.map((obj,i)=>{
        return(
        <div style={{marginLeft:"150px",color:"white",marginTop:"20px"}}  key={i}>
         <h1>Name : {obj.fullname}</h1>
         <h1>Email : {obj.email}</h1>    
         <h1>Post : {obj.post}</h1>
         </div>
         )
       })
      }
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      
    </div>
  );
};
export default Agents;

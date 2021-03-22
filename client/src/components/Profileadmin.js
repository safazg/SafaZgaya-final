import React,{useState}from 'react'
import Agents from "./Agents"
import {  useSelector } from "react-redux";

import Collaborators from "./Collaborators"
import { Redirect } from "react-router-dom";
const Profileadmin = () => {
 const adminAuth = useSelector((state) => state.userReducer.adminAuth);
  const [agents, setAgents] = useState(false);
  const [collaborators, setCollaborators] = useState(false);
 return (!adminAuth ? (
    <Redirect to="/admin" />):(
      <div style={{marginLeft: "20px",marginRight:"20px"}}>
   <h1 style={{color:"blue",marginLeft:"40%",marginTop:"20px"}}>Admin profile</h1>
   <button className="adminbuttons" style={{marginLeft:"5%"}} onClick={()=>{setAgents(true);setCollaborators(false)}}>Agents</button>
   <button className="adminbuttons" onClick={()=>{setAgents(false);setCollaborators(true)}}>Collaborators</button>
   {agents?<Agents />:<Collaborators />}
   </div>
 ))
}

export default Profileadmin

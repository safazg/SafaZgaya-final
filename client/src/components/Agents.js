import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import{getAgents,deleteAgent,agentAdd,putAgent} from "../JS/actions"
import {  Table,Button,Form,Alert } from "react-bootstrap";
import Agentmodel from './models/Agentmodel'
const validator = require("email-validator")

const Agents = () => {
  const dispatch=useDispatch()
  const agentErr=useSelector((state) => state.userReducer.agentErr);
  const [agentErrInput, setAgentErrInput] = useState("");

  const agents = useSelector((state) => state.userReducer.agents);

  const [agentName, setName] = useState("");
 const [agentEmail, setEmail] = useState("");
 const [agentPost, setPost] = useState("");
 
 const chec=(name,email,post)=>{
  if(!name || !post || !email){setAgentErrInput("Complete all the fields")}
  else if(!validator.validate(email)){setAgentErrInput("Email not valid")}
  else return(true)
 }

  const add=()=>{
    dispatch({type:"clear errors"})
    setAgentErrInput('')
   const check=chec(agentName,agentEmail,agentPost);
  if(check===true){dispatch(agentAdd({fullname:agentName,email:agentEmail,post:agentPost}))}
  }
 
  useEffect(
  () => {
   dispatch(getAgents())
  },
  [],
);
 return (
  <div style={{marginLeft: "20px",marginRight:"20px"}}>
  {/* */}
  
  <Form.Label htmlFor="inlineFormInputName2" >
    Name
  </Form.Label>
  <Form.Control
  onChange={(e) => setName(e.target.value)}
    className="mb-2 mr-sm-2"
    id="inlineFormInputName2"
    placeholder="Name"
  />
  <Form.Label htmlFor="inlineFormInputName3" >
    Email
  </Form.Label>
  <Form.Control
    onChange={(e) => setEmail(e.target.value)}
    className="mb-2 mr-sm-2"
    id="inlineFormInputName3"
    placeholder="Email"
    
  />
  <Form.Label htmlFor="inlineFormInputName4" >
    Post
  </Form.Label>
  <Form.Control
    onChange={(e) => setPost(e.target.value)}
    className="mb-2 mr-sm-2"
    id="inlineFormInputName4"
    placeholder="Post"
    
  />

  <Button type="submit" className="mb-2" onClick={add}>
    Add
  </Button>

   {/* */}
   <p></p>
  <Alert show={agentErrInput} variant="warning">{agentErrInput}</Alert>
  <Alert show={agentErr} variant="warning">{agentErr}</Alert>

  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Post</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
    
     {agents.map((obj,i)=>{
        return(
        <tr  key={i}>
          <td>{i}</td>
         <td>{obj.fullname}</td>
         <td>{obj.email}</td>    
         <td>{obj.post}</td>
         <td><Button variant="danger"  onClick={()=>{dispatch(deleteAgent({email:obj.email}))}}>delete</Button></td>
         <td><Agentmodel email={obj.email} post={obj.post} putAgents={putAgent}></Agentmodel></td>
         </tr>
         )
       })
      }
  </tbody>
</Table>
  </div>
 )
}

export default Agents

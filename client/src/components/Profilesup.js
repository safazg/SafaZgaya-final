import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAdmins,adminAdd,deleteAdmin } from "../JS/actions";
import { Redirect } from "react-router-dom";
import {  Table,Button,Form,Alert } from "react-bootstrap";

import "./css/profilesup.css"
const validator = require("email-validator")
const Profile = () => {
  const supisAuth = useSelector((state) => state.userReducer.supisAuth);

 const [adminName, setName] = useState("");
 const [adminEmail, setEmail] = useState("");
 const [adminPassword, setPassword] = useState("");
const [AdminErrInput, setAdminErrInput] = useState("");

   const admins = useSelector((state) => state.userReducer.admins);
  const addAdminErr=useSelector((state) => state.userReducer.addAdminErr);
 const dispatch = useDispatch();
 const chec=(name,email,password)=>{
  if(!name || !password || !email){setAdminErrInput("Complete all the fields")}
  else if(password.length<4){setAdminErrInput('Password length must be >4')}
  else if(!validator.validate(email)){setAdminErrInput("email not valid")}
  else {return(true)}
 }

 const add=()=>{
   dispatch({type:"clear errors"})
   setAdminErrInput('')
   const check=chec(adminName,adminEmail,adminPassword);
  if(check===true){dispatch(adminAdd({fullname:adminName,email:adminEmail,password:adminPassword}))}
 }

 useEffect(
  () => {
   dispatch(getAdmins())
  },
  [],
);

 return (!supisAuth ? (
    <Redirect to="/superadmin" />
  ) :(
  <div style={{marginLeft: "20px",marginRight:"20px"}}>
   <h1 style={{color:"blue",marginLeft:"40%",marginTop:"20px"}} >Super admin page</h1>
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
    onChange={(e) => setPassword(e.target.value)}
    className="mb-2 mr-sm-2"
    id="inlineFormInputName4"
    placeholder="Password"
    
  />

  <Button type="submit" className="mb-2" onClick={add}>
    Add
  </Button>
  <Alert show={AdminErrInput} variant="warning">{AdminErrInput}</Alert>
  <Alert show={addAdminErr} variant="warning">{addAdminErr}</Alert>

   {/* */}

      {/* {
       admins.map((obj,i)=>{
        return(
        <div className="admin-data" key={i}>
         <span>Name : {obj.fullname}</span>
         <span>Email : {obj.email}</span>    
         <span>Password : {obj.password}</span>
         <button onClick={()=>{dispatch(deleteAdmin({email:obj.email}))}}>delete</button>
         </div>
         )
       })
      } */}
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    
     {admins.map((obj,i)=>{
        return(
        <tr  key={i}>
          <td>{i}</td>
         <td>{obj.fullname}</td>
         <td>{obj.email}</td>    
         <td>{obj.password}</td>
         <td><Button variant="danger" style={{width:"100px"}} onClick={()=>{dispatch(deleteAdmin({email:obj.email}))}}>delete</Button></td>
         </tr>
         )
       })
      }
  </tbody>
</Table>
        
  </div>
 ))
}

export default Profile

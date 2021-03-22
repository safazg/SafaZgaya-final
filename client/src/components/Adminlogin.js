import React,{ useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { adminLogin } from "../JS/actions";
import {  Form, Button,Alert } from "react-bootstrap";

const Adminlogin = () => {
const dispatch = useDispatch();
const adminAuth = useSelector((state) => state.userReducer.adminAuth);
const adminErr = useSelector((state) => state.userReducer.adminErr);

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const login = () => {
    dispatch({type:"clear errors"})
    dispatch(
      adminLogin({
        email,
        password,
      })
    );
  };
 return adminAuth ? (
    <Redirect to="/admin/profile" />): (
  <div >
         {/* bootstrap */}
         <h1 style={{color:"blue"}}>Log in</h1>
  <Form.Group >
    <Form.Label>Admin email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={login}>
    Submit
  </Button>
  <Alert show={adminErr} variant="warning">{adminErr}</Alert>

   
  </div>
 )
}


export default Adminlogin


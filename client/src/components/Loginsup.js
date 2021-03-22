import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { supadminLogin } from "../JS/actions";
import {  Form, Button, Alert  } from "react-bootstrap";

const Login = () => {
  const [supAdminName, setName] = useState("");
  const [supAdminPassword, setPassword] = useState("");

  const supisAuth = useSelector((state) => state.userReducer.supisAuth);
  const supErr = useSelector((state) => state.userReducer.supErr);
   
  const supErrorMessageServer = useSelector((state) => state.userReducer.supErrorMessageServer);
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type:"clear errors"})
    dispatch(
      supadminLogin({
        supAdminName,
        supAdminPassword,
      })
    );
  };
  return supisAuth ? (
    <Redirect to="/superadmin/profile" />
  ) : (
    <div style={{marginLeft: "20px",marginRight:"20px"}}>
      {/* bootstrap */}
  <h1 >Super admin Log in</h1>

  <Form.Group controlId="formBasicName">
    <Form.Label >Name</Form.Label>
    <Form.Control type="name" placeholder="Enter email" onChange={(e) => {setName(e.target.value)}} />
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
  <Alert show={supErr} variant="warning">{supErr}</Alert>

    </div>
  );
};

export default Login;

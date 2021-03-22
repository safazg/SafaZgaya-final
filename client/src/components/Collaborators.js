import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import{getCollaborators,deleteCollaborators,collaboratorAdd} from "../JS/actions"
import {Card,Button,Form,Alert} from "react-bootstrap"
import Model from "./models/Collaborator"
const Collaborators = () => {
   const dispatch=useDispatch()
   const collaborators = useSelector((state) => state.userReducer.collaborators);
   const collaboratorErr = useSelector((state) => state.userReducer.collaboratorErr);

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [logo, setLogo] = useState("");
   
  const [checkErr, setCheckErr] = useState("");


   const chec=(name,description,logo)=>{
  if(!name || !description || !logo){setCheckErr("Complete all the fields")}
  else{return(true)}
 }
 const add=()=>{
   setCheckErr('')
   dispatch({type:"clear errors"})
   const check=chec(name,description,logo);
  if(check===true){dispatch(collaboratorAdd({companyName:name,description:description,imageUrl:logo}))}
 }

     useEffect(
  () => {
   dispatch(getCollaborators())
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
    Description
  </Form.Label>
  <Form.Control
    onChange={(e) => setDescription(e.target.value)}
    className="mb-2 mr-sm-2"
    id="inlineFormInputName3"
    placeholder="Description"
    
  />
  <Form.Label htmlFor="inlineFormInputName4" >
    URL Logo
  </Form.Label>
  <Form.Control
    onChange={(e) => setLogo(e.target.value)}
    className="mb-2 mr-sm-2"
    id="inlineFormInputName4"
    placeholder="URL Logo"
    
  />

  <Button type="submit" className="mb-2" onClick={add}>
    Add
  </Button>
  <Alert show={checkErr} variant="warning">{checkErr}</Alert>
  <Alert show={collaboratorErr} variant="warning">{collaboratorErr}</Alert>

   {/* */}
  
      <div style={{display:"flex"}}>
      {
       collaborators.map((obj,i)=>{
        return(
          
        <Card className="card" style={{ width: '18rem',margin:"20px"}} key={i} >
        <Card.Img variant="top" src={obj.imageUrl} style={{ width: '100%',height:"120px" }}  />
        <Card.Body>
        <Card.Title>{obj.companyName}</Card.Title>
        <Card.Text>
        {obj.description}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Button   variant="danger" onClick={()=>{dispatch(deleteCollaborators({companyName:obj.companyName}))}}>Delete</Button>
        <Model companyName={obj.companyName} imageUrl={obj.imageUrl} description={obj.description}></Model>
        </div>
        </Card.Body>
      </Card>
     
         )
       })
      }
      </div>
      
  </div>
 )
}
export default Collaborators

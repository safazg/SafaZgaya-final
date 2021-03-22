import React,{useState} from 'react'
import {Button,Modal,Form,Alert} from 'react-bootstrap'
 import { useDispatch } from "react-redux";

const Agentmodel = (props) => {
  const [err, setErr] = useState('');
 const email=props.email
 const dispatch=useDispatch()
 const putAgents=props.putAgents
  const [post, setPost] = useState(props.post);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changefunc=()=>{
    if(!post){
      setErr(true);
    }else{
    dispatch(putAgents({email,post}));
    setShow(false)
  }};
 return (
  <div>
   <Button variant="primary" onClick={handleShow}>
        Update
        
   </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Label htmlFor="inlineFormInputName2" >
         Post
         </Form.Label>
         <Form.Control
         onChange={(e) => setPost(e.target.value)}
           className="mb-2 mr-sm-2"
           id="inlineFormInputName2"
           placeholder="Post"
           value={post}
         />
           
        </Modal.Body>
          <Alert show={err} variant="warning">complete the field</Alert>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={changefunc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
 )
}

export default Agentmodel

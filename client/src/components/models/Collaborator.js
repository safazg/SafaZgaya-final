import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button,Form,Alert} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {putCollaborators} from '../../JS/actions'
const Collaborator = (props) => { 
  const dispatch=useDispatch()
  const {companyName,imageUrl:im,description:ds} =props
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const [imageUrl, setUrl] = useState(im);
  const [description, setDes] = useState(ds);
  const handleClose = () =>{setUrl(im);setDes(ds);setErr(false);setShow(false)} ;
  const handleShow = () => setShow(true);
  const changefunc=()=>{
    if(!imageUrl || !description){
      setUrl(im);setDes(ds);setErr(false)
      setErr(true);
    }else{
    dispatch(putCollaborators({imageUrl,companyName,description}));
    setShow(false)
  }};
 return (
  <div>
   <Button variant="primary" onClick={handleShow}>
        Update
   </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{companyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inlineFormInputName2" >
         ImageUrl
         </Form.Label>
         <Form.Control
         onChange={(e) => setUrl(e.target.value)}
           className="mb-2 mr-sm-2"
           id="inlineFormInputName2"
           placeholder="ImageUrl"
           value={imageUrl}
         />
         <Form.Label htmlFor="inlineFormInputName1" >
         Description
         </Form.Label>
         <Form.Control
         onChange={(e) => setDes(e.target.value)}
           className="mb-2 mr-sm-2"
           id="inlineFormInputName1"
           placeholder="Description"
           value={description} 
         />
         <Alert show={err} variant="warning">complete all the fields</Alert>
        </Modal.Body>
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

export default Collaborator

import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/NavBar/Nav";
import{getCollaborators} from "../../JS/actions"

const Partners = () => {
  const dispatch=useDispatch()
    const collaborators = useSelector((state) => state.userReducer.collaborators);
     useEffect(
  () => {
   dispatch(getCollaborators())
  },
  [],
);
  return(
    <div style={{ 
      backgroundImage: `url("https://i.stack.imgur.com/pMAiU.jpg")`, backgroundRepeat: "no-repeat",
        backgroundSize: "100%",height:"100%"
      }}>
       <Nav/>
      <div style={{paddingTop:'150px'}}>
      {collaborators.map((obj,i)=>{
        return(
        <div style={{marginLeft:"150px",color:"white",marginTop:"40px"}}  key={i}>
          <div style={{display:"flex",alignItems: "center"}}>
         <img style={{width:"150px",height:"100px"}} src={obj.imageUrl} alt=""/>
         <div style={{marginLeft:"30px"}}>
         <h1>CompanyName : {obj.companyName}</h1>
         <h1>description : {obj.description}</h1>
         </div>
         </div>
         </div>
         )
       })
      }
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      
    </div>
    )
     }
  
    
  


export default Partners
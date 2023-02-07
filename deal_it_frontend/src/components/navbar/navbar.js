import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NewComplaint from '../form_modal/NewComplaint';
import ProfileModal from "../complaints/profileModal"

import {CgProfile} from 'react-icons/cg'
import {TbLogout} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
function NavbarHeader(props) {
  const [showModal,setShowModal]=useState(false);
  const navigate=useNavigate();
  const logoutHandler=()=>{
    sessionStorage.removeItem("Email");
    sessionStorage.removeItem("Name");
    navigate("/authentication")
  }
  
  return (
    <Navbar>
      <Container fluid className='navbar-header'>
        <Navbar.Brand href="#home" style={{fontSize:"1.8rem" , fontFamily : "sans-serif",color:"rgb(58,177,155)"}} className='font-bold'>Deal It</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className='flex justify-between'>
              <NewComplaint show={props.display}/><span style={{fontSize:"2rem"}}>
                <CgProfile onClick={()=>setShowModal(true)}/>
              <ProfileModal show={showModal} onHide={()=>setShowModal(false)}/>
              </span>
              <span style={{fontSize:"2rem"}} className="mr-2 ml-2">

              <TbLogout onClick={logoutHandler}/>
              </span>
              </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
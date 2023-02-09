import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NewComplaint from "../form_modal/NewComplaint";
import ProfileModal from "../complaints/profileModal";

import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const ENDPOINT = "http://localhost:4000";
function NavbarHeader(props) {
  const [showModal, setShowModal] = useState(false);
  const [details,setDetails]=useState({
    name:"",
    email:"",
    rollno:"",
    mobileno:"",
    hallname:""
  })
  const navigate = useNavigate();
  const [data, setData] = useState();
  const person = sessionStorage.getItem("Person");
  const getDetails = async (e) => {
    // e.preventDefault();
    try {
      let res = await axios.post(
        `${ENDPOINT}/${
          person === "student" ? "getOneStudent" : "getOneCaretaker"
        }`,
        JSON.stringify({ email: sessionStorage.getItem("Email") })
      );
      setData(res.data);
        // console.log(res)
      setData((det)=>{
        setDetails({
          name:det.name,
          email:det.email,
          mobileno:det.mobileno,
          rollno:det.rollno,
          hallname:det.hallname
        })
        return det
      })
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("Email");
    sessionStorage.removeItem("Name");
    sessionStorage.removeItem("Person")
    if(person==="caretaker"){
      sessionStorage.removeItem("Hallname");
    }
    navigate("/authentication");
  };

  return (
    <Navbar>
      <Container fluid className="navbar-header">
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "1.8rem",
            fontFamily: "sans-serif",
            color: "rgb(58,177,155)",
          }}
          className="font-bold"
        >
          Deal It
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="flex justify-between">
              <NewComplaint show={props.display} />
              <button style={{ fontSize: "2rem" }}>
                <CgProfile
                  onClick={() => {
                    setShowModal(true);
                    getDetails()
                    
                  }}
                />
                <ProfileModal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                  data={details}
                />
              </button>
              <button style={{ fontSize: "2rem" }} className="mr-2 ml-2">
                <TbLogout onClick={logoutHandler} />
              </button>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;

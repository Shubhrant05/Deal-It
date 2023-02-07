import React from 'react'


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import NewComplaint from '../form_modal/NewComplaint';
import {CgProfile} from 'react-icons/cg'
import NavbarHeader from '../navbar/navbar';
import ComplaintsCategory from './tabs';

function CaretakerDashboard() {
  return (
    // <div>CaretakerDashboard</div>
    <>
    <NavbarHeader diaplay={false}/>
    <ComplaintsCategory/>
    </>
  )
}

export default CaretakerDashboard
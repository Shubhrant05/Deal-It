import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./login";
import Signup from "./signup";

function Authentication_Page() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const myStyle = {
    backgroundImage:
      "url('https://cache.careers360.mobi/media/colleges/reviews/2020/10/3/142538/iiit.jpg')",
    height: "100vh",
    // marginTop:'-50px',
    // fontSize:'50px',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Deal-It</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="md:flex gap-3">
            <button className=" bg-red-500 p-1 rounded-md" onClick={()=>setIsLoginOpen(true)}>Login</button>
            <button className="bg-red-500 p-1 rounded-md" onClick={()=>setIsLoginOpen(false)}>Signup</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <div className='flex gap-2 mt-2 justify-center w-3/4'>
    
    </div> */}
    <div className="flex justify-center  mt-10 container">
    <div className='w-full lg:w-1/2 border-2 border-red-200 p-10'>
    {isLoginOpen?<Login/>:<Signup/>}
</div>
    </div>
    </>
  );
}

export default Authentication_Page;

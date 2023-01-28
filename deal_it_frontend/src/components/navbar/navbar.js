import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NewComplaint from '../form_modal/NewComplaint';

function NavbarHeader() {
  return (
    <Navbar>
      <Container fluid className='navbar-header'>
        <Navbar.Brand href="#home" style={{fontSize:"1.8rem" , fontFamily : "sans-serif",color:"rgb(58,177,155)"}} className='font-bold'>Deal It</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NewComplaint/>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
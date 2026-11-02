import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UNIFA from '../assets/UNIFA.jpg'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Bar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='ms-auto ' fixed='top'>
        <Container>
         <div >
           <Navbar.Brand href="#home" className='d-flex gap-3'><img src={UNIFA} alt=""width={'70px'}  style={{
            borderRadius:'10px'
          }}/> 
          
          <Typography variant='h3'>UNIFA <br /></Typography> 
         
          </Navbar.Brand>
         </div>
          <Nav id='navlink'
          style={{
            marginRight:'4em'
          }}
          >
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/departements"}>Departements</Nav.Link>
            <Nav.Link as={Link} to={"/teacher"}>Enseignants</Nav.Link>
            <Nav.Link as={Link} to={"/propos"}>A propos de nous</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      )

}
import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import img from '../asset/logo.svg';
import { useNavigate } from 'react-router-dom';

const Navigation = (props) => {
  const navigate = useNavigate();
  return (
    <div>
         <Navbar bg="dark" expand="lg" variant="dark">
           <Container>
           <Navbar.Brand onClick={() => navigate('/')}>
             <img alt="" src={img} width="30" height="30" className="d-inline-block align-top"/>{' '} React Bootstrap CRUD APP
           </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="ms-auto">
                    <Nav.Link><Button variant="primary" onClick={() => navigate('/login')}>Admin Login</Button></Nav.Link>
                </Nav>

                <Nav className="ms-auto">
                    <Nav.Link><Button variant="primary" onClick={props.handleLogout}>Logout</Button></Nav.Link>4
                </Nav>
                
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navigation
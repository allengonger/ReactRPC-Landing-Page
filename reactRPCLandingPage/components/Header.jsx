import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Getstarted from './Getstarted.jsx';
import Examples from './Examples.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Header extends Component {
    render(){
        return(
          <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <LinkContainer to="/">
          <Navbar.Brand >ReactRPC</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="/gettingStarted">
            <Nav.Link>Getting Started</Nav.Link>
          </LinkContainer>
           <LinkContainer to="examples">
            <Nav.Link>Examples</Nav.Link>
            </LinkContainer>
         </Nav>
         <Nav>
          <Nav.Link href="#deets">Github</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          NPM Package
          </Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
            <Switch>
            <Route exact path="/gettingStarted">
              <Getstarted />
            </Route>
            <Route exact path="/examples">
              <Examples />
            </Route>           
          </Switch> 
          
          <Row>
           <Col md={6}>
            
              
      </Router>
         </Col>
           <Col md={6}>
             <img src="images/icon.png" />
           </Col>

         </Row>   
         
        )
    }
}

export default Header;
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Getstarted from './Getstarted.jsx';
import Examples from './Examples.jsx';
import Home from './Home.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Header extends Component {
    render(){
        return(
          <Router>
            <Navbar id="navbar" collapseOnSelect expand="lg"  variant="dark">
         <LinkContainer to="/">
          <Navbar.Brand ><img src="images/icon.png" /></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to="/gettingStarted">
            <Nav.Link>Getting Started</Nav.Link>
          </LinkContainer>
         </Nav>
         <Nav>
          <Nav.Link href="https://github.com/oslabs-beta/ReactRPC">Github</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          reactrpc v1.0.5
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
            <Route exact path="/">
              <Home />
            </Route>           
          </Switch>         
      </Router>

       
 
         
        )
    }
}

export default Header;
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Home extends Component {
    render(){
        return(
      <Row>
        <div className="spacer"></div>
        <br/>
        <br/>
        <br/>
       <Col md={6} id="buttonContainer">
          <h1>ReactRPC</h1>
           <p>A React Library that abstracts the complex setup of gRPC-web on the front end 
             and attaches gRPC-web calls directly to React components via higher order functions. 
             ReactRPC makes it incredibly easy for developers to get the power and speed of sending 
             data with gRPC-web without having to deal with the hassle and cumbersomeness of the usual 
             front-end setup. 
             </p>
             <br/>
         <Row id="buttonContainerChild" >
           <Col sm={3}>
             <Button id="leftB" className="frontPageButtons" variant="outline-dark" onclick="window.location.href = 'https://github.com/oslabs-beta/ReactRPC';">Github</Button>
           </Col>
           <Col sm={3}>
             <Button id="rightB" className="frontPageButtons" variant="dark" onclick="window.location.href = 'https://www.npmjs.com/package/reactrpc';">Download</Button>
          </Col>
         </Row>
        
         </Col>
           <Col id="mobileHome">
              <br/>
              <h1>Please use an adaquete device to download this library</h1>
           </Col>
           <Col md={6}>
             <img src="images/icon.png" />
           </Col>

         </Row>  
        )
    }
}

export default Home;
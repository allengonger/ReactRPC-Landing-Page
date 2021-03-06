import React, { Component } from 'react';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
//import Sonnet from 'react-bootstrap/Sonnet';
//import { LinkContainer } from 'react-router-bootstrap';
//import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
//import Containe r from 'react-bootstrap/Container';



class Getstarted extends Component {
    render() {
      function switchClasses(){
        const docSection = document.getElementsByClassName('list-group-item');
       const anchorTags = document.getElementsByClassName('listlinks');  
       console.log(anchorTags);    
        for(let i = 0; i < anchorTags.length; i++) {
         console.log(anchorTags[i]);
         anchorTags[i].addEventListener("click", function() {
           let currentTag = document.getElementsByClassName("activated");
           
           currentTag[0].className = currentTag[0].className.replace(" activated", "");
           this.className += " activated";
           console.log('hello');
         });
        }  
      };
    return (
       <div>
         {switchClasses()}
        <Tab.Container  defaultActiveKey="#link1">
    <Row className="docRow">
     <Col md={4} id="lst">
      <ListGroup className="listGroup">
      <Link to="gettingStarted#start" className="listlinks">
        <ListGroup.Item className=" activated">
          Getting Started
        </ListGroup.Item>
        </Link>
        <Link to="gettingStarted#define" className="listlinks" >
        <ListGroup.Item className="activated" >
          Defining The Services
        </ListGroup.Item>
        </Link>
        <Link to="gettingStarted#protobuf" className="listlinks"> 
        <ListGroup.Item className="activated" >
          Generating Protobuf Messages and Client
          Service Stub
        </ListGroup.Item >
        </Link>   
        <Link to="gettingStarted#proxy" className="listlinks" >
        <ListGroup.Item className="activated" >
          Creating Proxy Server
        </ListGroup.Item>
        </Link>
        <Link to="gettingStarted#googlegrpc" className="listlinks">
        <ListGroup.Item className="activated">
           Googles gRPC Implementation
        </ListGroup.Item>
        </Link>
        <Link to="gettingStarted#improbablegrpc" className="listlinks">
        <ListGroup.Item className="activated" >
           Improbable's gRPC Implementation (Including Bi-Directional Streaming)
        </ListGroup.Item>
        </Link>
        <Link to="gettingStarted#defineM" className="listlinks">
        <ListGroup.Item  className="activated">
          Define Message
        </ListGroup.Item>
        </Link>
        <Link  to="gettingStarted#function" className="listlinks"> 
        <ListGroup.Item className="activated">
          Creating the function
        </ListGroup.Item>
        </Link>
      </ListGroup>
       <br/>
       <br/>
       <br/>

    </Col>
    <Col md={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">         
          <div id="hello">
            <br/>
            <br/>
          
            <p className="headerN">ReactRPC</p>
             <hr/>
             <p >Full featured integration library for React and gRPC-Web. Core functions include: packaging the generated proto messages and client stubs, 
               a unified API of gRPC call methods that support 
               Google's and Improbable's gRPC-web specs for unary, 
               client streaming, server streaming and bi-directional streaming.</p>
              <p className="headerN" id="start">Getting Started</p>
               <p className="titles">Install</p>
                <div className="container">
                <img src="images/image1.png"/>
                </div>
                <br/>
                <br/>
                <p className="titles" id="define">1. Define the Services</p>
                <p>Create proto files as the schema for your Server and Client Stubs. 
                  It should define the gRPC call methods needed to communicate between 
                  the Server and Browser. These files will be used to give your components 
                  superpowers -- Remote Procedure Call (RPC) methods.</p>
                  <br/>
                  <p>helloworld.proto</p> 
                  <img src="images/image2.png"/>  
                  <br/>
                 <br/>
                  <p className="titles" id="protobuf">2. Generate a Protobuf Messages and Client Service Stub</p>
                  <p>In order to pass superpowers to our Browser, we first need to package our .proto file.</p>
                  <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                  <p className="headerN" id="googlegrpc">For Google's implementation:</p>
                  <p>To generate the protobuf messages and client service stub class 
                    from your .proto definitions, we need the protoc binary and the 
                    protoc-gen-grpc-web plugin.</p>
                  <p>You can download the protoc-gen-grpc-web protoc plugin from Google's release page:</p>
                  <p>If you don't already have protoc installed, you will have to download it first from here.</p>
                  <p>Make sure they are both executable and are discoverable from your PATH.</p>
                  <p>For example, in MacOS, you can do:</p>
                  <img src="images/image3.png" />
                  <p>When you have both protoc and protoc-gen-grpc-web installed, you can now run this command:</p>
                  <img src="images/image4.png" />
                  <p>After the command runs successfully on your [name of proto].proto you should 
                    see two generated files [name of proto]_pb.js which contains the messages and 
                    [name of proto]_grpc_web_pb.js that contains the services:</p>
                    <p>For instance the helloworld.proto file will generate to:</p>
                    <ul>
                      <li>
                      messages : helloworld_pb.js
                      </li>
                      <li>
                      services : helloworld_grpc_web_pb.js 
                      </li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                  
                    <p className="headerN" id="improbablegrpc">
                    For Improbable's implementation:
                    </p>
                    <img src="images/image5.png" />
                    <p>For the latest stable version of the ts-protoc-gen plugin:</p>
                    <p>Download or install protoc (the protocol buffer compiler) for your platform 
                      from the github releases page or via a package manager (ie: brew, apt).</p>
                      <p>Download protoc from <a href="https://github.com/protocolbuffers/protobuf/releases">here</a></p>
                      <p>When you have both protoc and ts-protoc-gen installed, 
                        you can now run this command:</p>
                        <img src="images/image6.png" />
                        <p>After the command runs successfully on your [insert_name].proto 
                          you should see two generated files [insert_name]_pb.js which contains 
                          the messages and [insert_name]_pb_service.js that contains the services:</p>
                          <p>For instance for the helloworld.proto you should see:</p>
                          <ul>
                            <li>
                            messages : book_service_pb.js
                           </li>
                            <li>
                             services : book_service_pb_service.js
                           </li>headerN
                          </ul>
                          <p className="titles" id="proxy">3. Create proxy server</p>
                          <p>In order for gRPC-web to communicate with other gRPC servers, 
                            it requires a proxy server as a translation layer to convert between 
                            gRPC-web protobuffers and gRPC protobuffers. Links to examples on how 
                            to set those up can be found here (Envoy proxy) and here (Improbable's proxy)*</p>
                            <p>*Note: To enable bidirectional/client-side streaming 
                              you must use Improbable's spec and its proxy with websockets enabled</p>
                            <p className="titles">4. Set up React component</p>
                            <p>Require in the reactRPC library and protobuf files in your 
                              React JSX file. Run the build method with the following params: 
                              the message, the services and the URL to the proxy server endpoint.</p>
                            <p className="titles">Google's Implementation</p>
                            <img src="images/image7.png" />
                            <p>Export the reactRPC component by passing it as an argument
                               into the reactRPC wrapper as follows:</p>
                               <img src="images/image8.png" />
                           
                                 <p className="titles">Improbable's Implementation</p>
                               <img src="images/image9.png" />
                               <p>Export the reactRPC component by passing it as an argument into the improbRPC wrapper as follows:</p>
                               <img src="images/image10.png" />
                               <p className="titles" id="defineM">5. Define a message</p>
                               <p>We define a request message by creating an object with the keys as the message field along with a msgType property specifying a message that we set in the proto file. 
                                 Here is an example of a HelloRequest message in the helloworld.proto file :</p>
                                 <img src="images/image11.png" />
                                 <p className="titles" id="function">6. Create the function</p>
                                 <p>We define a function by listing its service and procedure calls on this.props. We then pass in the message we defined above, and an object with any metadata data required (learn more about metadata here). For unary calls a third parameter of a 
                                   callback is required while streaming calls have built in event listeners.</p>
                                   <img src="images/image12.png" />
                                   <p>ReactRPC library supports unary, client-side, server-side and bi-directional streaming.</p>






          </div>
        </Tab.Pane>
      
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

       </div>
    )
}
};

export default Getstarted;
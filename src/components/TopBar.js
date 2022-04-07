import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function TopBar(data){
    if(data.logIn === true){
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src="/instacart-logo.png" alt="logo"style={{height: "50px" ,width: "auto"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#LogIn">Sign Out</Nav.Link>
                            <Button variant="success">Your Orders</Button>{''} 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div> 
        )
    }else{
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src="/instacart-logo.png" style={{height: "50px" ,width: "auto"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#LogIn">Log In</Nav.Link>
                            <Button variant="success">Sign Up</Button>{''} 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
    
}
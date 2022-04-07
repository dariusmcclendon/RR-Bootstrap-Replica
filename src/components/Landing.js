import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Landing(){
    return (
    <Container fluid style={{backgroundColor : "#deedd6", maxHeight:"250px"}}>
        <Row>
            <Col>
                <h2>Order groceries for delivery</h2>
                <h2>or pickup today</h2>
                <p>Whatever you want from local stores, brought right to your door.</p>
            </Col>
            <Col>
                <img src="/Fruit-PNG-Image.png" style={{height: "200px", width: "auto"}} className="float-end"/>
            </Col>
        </Row>
    </Container>
    )
}
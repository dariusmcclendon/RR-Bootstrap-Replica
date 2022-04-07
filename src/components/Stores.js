import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Stores(){
    return (
        <div>
            <h2 className="text-center">Choose your store in <span style={{color: "green"}}>Atlantic City</span></h2>
            <Container>
                <Row className="border-bottom pb-2 pt-2">
                    <Col>
                        <Container className="border rounded m-1 p-2">
                            <img src="/BJs-Logo.png" alt="logo" style={{width : "50px", height : "50px"}}/> BJ's Wholesale
                        </Container>
                       
                    </Col>
                    <Col>
                        <Container className="border rounded m-1 p-2">
                            <img src="/Walgreens-Logo.png" alt="logo" style={{width : "50px", height : "50px"}}/> Walgreen's
                        </Container>
                    </Col>
                    <Col>
                        <Container className="border rounded m-1 p-2">
                            <img src="/Costco-Logo.png" alt="logo" style={{width : "50px", height : "50px"}}/> Costco
                        </Container>

                    </Col>
                </Row>
                
                <Row className="border-bottom pb-2 pt-2">
                    <Col>
                        <Container className="border rounded m-1 p-2">
                            <img src="/BJs-Logo.png" alt="logo" style={{width : "50px", height : "50px"}}/> BJ's Wholesale
                        </Container>
                       
                    </Col>
                    <Col>
                        <Container className="border rounded m-1 p-2">
                            <img src="/Walgreens-Logo.png" alt="logo" style={{width : "50px", height : "50px"}}/> Walgreen's
                        </Container>
                    </Col>
                    <Col>
                        <Container className="border rounded m-1 p-2">
                            <img src="/Costco-Logo.png" alt="logo" style={{width : "50px", height : "50px"}}/> Costco
                        </Container>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import round from "../round.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CardGroup}from "react-bootstrap";
import Earth from "../Earth.png";

const Cord = () => {
    return (
        <Container className="sec, justify-content-middle">
            <CardGroup className="inside"> 
                <Card>
                <Card.Body className="m-6, p-5," width={762} height={500}>
                <Card.Title className="display-5 fw-bold">GHG Accounting Scope1, Scope2, Scope3</Card.Title>
                <Card.Text>
                Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
                </Card.Text>
                </Card.Body>
                </Card>
                <Card >
                <Card.Img variant="bottom" src={round} width={470} height={500}  />
                </Card>
                </CardGroup>
        </Container>
    )
}
export default Cord;

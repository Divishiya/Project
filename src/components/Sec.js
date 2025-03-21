import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {CardBody, CardGroup, CardText, CardTitle}from "react-bootstrap";
import Group1 from "../Group1.png";
import Group2 from "../Group2.png";
import Group3 from "../Group3.png";


const Sec = () => {
    return (
        <Container>
          <CardGroup> 
                <Card>
                <Card.Body>
                <Card.Title >Leading Sustainability with Carboncrunch</Card.Title>
                <Card.Text>
                GHG (Greenhouse Gas) Accounting is a framework used to measure and report greenhouse gas emissions.
                </Card.Text>
                </Card.Body>
                </Card>
                <Card>
                    <div>
                    <Card.Img variant="top" src={Group1} className="sec-img, justify-content-start" width={0.5} height={15}/>
                    <CardBody>
                        <CardTitle>
                        Regulatory Compliance and Reporting
                        </CardTitle>
                        <CardText>
                        Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements
                        </CardText>
                    </CardBody>
                    </div>
                    <div>
                    <Card.Img variant="top" src={Group2} width={0.5} height={15}/>
                    <CardBody>
                        <CardTitle>
                        Meeting Sustainability Goals and Net-Zero Targets
                        </CardTitle>
                        <CardText>
                        Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements
                        </CardText>
                    </CardBody>
                    </div>
                    <div>
                    <Card.Img variant="top" src={Group3} width={0.5} height={15}/>
                    <CardBody>
                        <CardTitle>
                        Cost Savings and Operational Efficiency
                        </CardTitle>
                        <CardText>
                        Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements
                        </CardText>
                    </CardBody>
                    </div>
                </Card>
            </CardGroup>
        </Container>

    )
}
export default Sec;

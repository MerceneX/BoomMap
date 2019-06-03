import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import person from "../components/design/person.png";
import "../components/design/App.css";

function About() {
    return (
        <React.Fragment>
            <div class="container">
                <h3> Ekipa </h3>
                <Container>
                    <Row className="theteam">
                        <Col><h1>Marko Gluhak</h1>
                            <img className="person" src={person} alt="person"/>
                        <p>Nekaj nekaj nekaj </p></Col>
                        <Col><h1>Maruša Konečnik </h1>
                            <img className="person" src={person} alt="person"/></Col>
                        <Col><h1>Pina Gornik</h1>
                            <img className="person" src={person} alt="person"/></Col>
                        <Col><h1>Nataša Feher</h1>
                            <img className="person" src={person} alt="person"/></Col>
                    </Row>
                    <Row className="teamdescription">
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default About;
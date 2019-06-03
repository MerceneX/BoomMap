import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import person from "../components/design/person.png";
import "../components/design/App.css";

function About() {
    return (
        <React.Fragment>
            <div class="container">
                <h4> Ekipa: </h4>
                <Container>
                    <Row className="theteam">
                        <Col>
                            <img className="person" src={person} alt="person"/>
                            <p>Marko Gluhak</p></Col>
                        <Col>
                            <img className="person" src={person} alt="person"/>
                            <p>Maruša Konečnik </p></Col>
                        <Col>
                            <img className="person" src={person} alt="person"/>
                            <p>Pina Gornik</p></Col>
                        <Col>
                            <img className="person" src={person} alt="person"/>
                            <p>Nataša Feher</p></Col>
                    </Row>
                    <Row className="teamdescription">
                        <Col><p> Back-end developer </p></Col>
                        <Col><p> Machine learning master </p></Col>
                        <Col><p> Front-end developer </p></Col>
                        <Col><p> Front-end developer </p></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default About;
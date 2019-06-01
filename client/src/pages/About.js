import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import person from "../components/design/person.png";
import "../components/design/App.css";

function About() {
    return (
        <React.Fragment>
            <div class="container">
                <h2> The Team: </h2>
                <Container>
                    <Row className="theteam">
                        <Col><p>Marko Gluhak</p>
                            <img className="person" src={person} alt="person" />
                        </Col>
                        <Col><p>Maruša Konečnik </p>
                            <img className="person" src={person} alt="person" />
                        </Col>
                        <Col><p>Pina Gornik</p>
                            <img className="person" src={person} alt="person" />
                        </Col>
                        <Col><p>Nataša Feher</p>
                            <img className="person" src={person} alt="person" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default About;
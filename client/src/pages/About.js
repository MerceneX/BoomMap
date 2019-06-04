import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import markoG from "../components/design/markoG.svg";
import marusaK from "../components/design/marusaK.svg";
import pinaG from "../components/design/pinaG.svg";
import natasaF from "../components/design/natasaF.svg";
import "../components/design/App.css";

function About() {
    return (
        <React.Fragment>
            <div className="container">
                <h4 className="headers"> Vizija </h4>
                <Container>
                    <p> ...  </p></Container>
            </div>
            <div class="container">
                <h4 className="headers"> Ekipa </h4>
                <Container>
                    <Row className="theteam">
                        <Col>
                            <img className="person" src={markoG} alt="person"/>
                            <p>Marko Gluhak</p></Col>
                        <Col>
                            <img className="person" src={marusaK} alt="person"/>
                            <p>Maruša Konečnik </p></Col>
                        <Col>
                            <img className="person" src={pinaG} alt="person"/>
                            <p>Pina Gornik</p></Col>
                        <Col>
                            <img className="person" src={natasaF} alt="person"/>
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
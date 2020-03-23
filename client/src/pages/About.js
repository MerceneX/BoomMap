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
            <br></br>
            <div className="container">
                <h4 className="headers"> Vizija </h4>
                <Container>
                    <p>Namen rešitve je ozaveščanje voznikov, reševalnih služb in tistih, ki se jim mudi, kje povečati potrpljenje in zmanjšati hitrost. V službi reševanja življenj šteje vsaka sekunda, želimo biti del, ki pripomore k reševanju življenj in preprečevanju ogrožanja teh. S pomočjo naše spletne stranih, lahko reševalci preventivno pripravijo enote in proces steče hitreje.  </p></Container>
            </div>
            <div className="container">
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
                        <Col><p> Back-end razvijalec </p></Col>
                        <Col><p> Strojno učenje </p></Col>
                        <Col><p> Front-end razvijalka </p></Col>
                        <Col><p> Front-end razvijalka </p></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default About;
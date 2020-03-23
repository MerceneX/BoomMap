import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import markoG from "../components/design/markoG.svg";
import marusaK from "../components/design/marusaK.svg";
import pinaG from "../components/design/pinaG.svg";
import natasaF from "../components/design/natasaF.svg";
import "../components/design/App.css";
import predloga from "../components/design/predloga.svg";

function About() {
    return (
        <React.Fragment>
            <br></br>

            <Container className="aboutContainer">
                 <Row>
                 <Col><h4>Ideja</h4></Col>
                 <Col></Col>
                 </Row>
                 <Row>
                     <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></Col>
                     <Col><img className="imageFrontPage" src={predloga} style={{height: "100", width: "200px"}} alt="imageFrontPage"/></Col>
                 </Row>
                 <Row>
                 <Col><h4>Vizija</h4></Col>
                 </Row>
                 <Row>
                     <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></Col>
                 </Row>
                </Container>
<br></br>
                <Container className="aboutContainer">
                <h4 className="headers"> Kdo smo </h4>
                    <Row className="teamTitles">
                        <Col>
                            <p>Marko Gluhak</p>
                            <img className="person" src={markoG} alt="person"/>
                        </Col>
                        <Col>
                            <p>Maruša Konečnik </p>
                            <img className="person" src={marusaK} alt="person"/>
                        </Col>
                    </Row>
                    <Row className="teamTitles">
                        <Col>
                            <p>Pina Gornik</p>
                            <img className="person" src={pinaG} alt="person"/>
                        </Col>
                        <Col>
                            <p>Nataša Feher</p>
                            <img className="person" src={natasaF} alt="person"/>
                        </Col>
                    </Row>
                </Container>
        </React.Fragment>
    )
}

export default About;
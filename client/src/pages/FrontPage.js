import React from 'react';
import {Navbar, NavLink} from 'reactstrap';
import '../components/design/App.css';
import { Container, Row, Col } from 'reactstrap';
import NewsIcon from "../components/design/NewsIcon.svg";
import MapIcon from "../components/design/MapIcon.svg";
import GraphIcon from "../components/design/GraphIcon.svg";
import AboutIcon from "../components/design/AboutIcon.svg";
import predloga from "../components/design/predloga.svg";

function FrontPage(props){
    const { classes } = props;
    return (
        <Container className="contentCointainer">
                <h5 align="center"> Vse najnovejše preverjene prometne informacije na enem mestu. Predvidevamo kritične regije za možnost nesreče in ozaveščamo voznike, 
                reševalne službe in tiste, ki se jim mudi, kje povečati potrpljenje in zmanjšati hitrost.
                </h5>
                <br></br>
                <h4 align="center"><b>Skupaj za varno pot domov</b></h4>
            <br></br>
            <Row className="contentCointainer">
                <Col sm={3}>
                    <img className="imageFrontPage" src={MapIcon} alt="imageFrontPage"/>
                    <h5><b>Kritične točke</b></h5>
                </Col>
                <Col sm={3}> 
                    <img className="imageFrontPage" src={GraphIcon} alt="imageFrontPage"/>
                    <h5><b>Statistika</b></h5>
                </Col>
                <Col sm={3}>
                    <img className="imageFrontPage" src={NewsIcon} alt="imageFrontPage"/>
                    <h5><b>Prometne novice</b></h5>
                </Col>
                <Col sm={3}>
                    <img className="imageFrontPage" src={AboutIcon} alt="imageFrontPage"/>
                    <h5><b>O projektu</b></h5>
                </Col>
            </Row>
            
            <Container className="descriptionContainter">
            <Row>
                <Col>
                    <p>Prikaz kritičnih odsekov na slovenskih cestah, z možnostjo prilagoditve parametrov na trenutne razmere cest. </p>
                    <a href="/zemljevid">Preberi več</a>
                </Col>

                <Col> 
                    <p>Statistično predelani podatki o prometnih nesrečah od leta 1994 naprej. Prikaz števila prometnih nesreč glede na različne filtre.</p>
                        <a href="/statistika">Preberi več</a>
                </Col>

                <Col>
                    <p>Zadnje aktualne prometne novice, stanje na slovenskih mejah in še kaj. </p>
                        <a href="/novice">Preberi več</a>
                </Col>

                <Col>
                    <p> Zgodba o inspiraciji, ideji, razvoju projekta in kdo stoji za njim.</p>
                        <a href="/About">Preberi več</a>
                </Col>
            </Row>
            </Container>

<br></br>
<br></br>
           <h5> prostor za novice </h5>
           <Row>
               <Col> <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/> </Col>
               <Col> <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/> </Col>
               <Col> <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/> </Col>
               <Col> <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/> </Col>
           </Row>
           <br></br>
        </Container>
    )
}

export default FrontPage;
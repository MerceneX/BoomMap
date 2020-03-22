import React from 'react';
import {Navbar, NavLink} from 'reactstrap';
import '../components/design/App.css';
import { IoIosStats } from "react-icons/io";
import {MdPerson} from "react-icons/md";
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
            
                <h5 align="center">Predvidevamo kritične regije za možnost nesreče in ozaveščamo voznike, reševalne službe in tiste, ki se jim mudi, kje povečati potrpljenje in zmanjšati hitrost.</h5>
                <h3 align="center">Skupaj za varno pot domov</h3>
            <br></br><br></br>
            <Row>
                <Col>
                    <img className="imageFrontPage" src={MapIcon} alt="imageFrontPage"/>
                    <p>Zemljevid</p>
                </Col>

                <Col> 
                    <img className="imageFrontPage" src={GraphIcon} alt="imageFrontPage"/>
                    <p>Statistika</p>
                </Col>

                <Col>
                    <img className="imageFrontPage" src={NewsIcon} alt="imageFrontPage"/>
                    <p>Novice</p>
                </Col>

                <Col>
                    <img className="imageFrontPage" src={AboutIcon} alt="imageFrontPage"/>
                    <p>O projektu</p>
                </Col>
            </Row>
            
            <Row className="opisFunkcionalnosti">
                <Col>
                    <p>Prikaz kritičnih odsekov na slovenskih cestah, z možnostjo prilagoditve parametrov na trenutne razmere cest. </p>
                    <NavLink href="/zemljevid">Preberi več</NavLink>
                </Col>

                <Col> 
                    <p>Statistično predelani podatki o prometnih nesrečah od leta 1994 naprej. Prikaz števila prometnih nesreč glede na različne filtre.</p>
                        <NavLink href="/statistika">Preberi več</NavLink>
                </Col>

                <Col>
                    <p>Zadnje aktualne prometne novice, stanje na slovenskih mejah in še kaj. </p>
                        <NavLink href="/novice">Preberi več</NavLink>
                </Col>

                <Col>
                    <p> Zgodba o inspiraciji, ideji, razvoju projekta in kdo stoji za njim.</p>
                        <NavLink href="/About">Preberi več</NavLink>
                </Col>
            </Row>
           

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
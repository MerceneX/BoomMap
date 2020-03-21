import React from 'react';
import {Navbar, NavLink} from 'reactstrap';
import '../components/design/App.css';
import { IoIosStats } from "react-icons/io";
import {MdPerson} from "react-icons/md";
import { Container, Row, Col } from 'reactstrap';
import predloga from "../components/design/predloga.svg";


function FrontPage(props){
    const { classes } = props;
    return (
        <Container className="contentCointainer">
            
                <h5 align="center">Predvidevamo kritične regije za možnost nesreče in ozaveščamo voznike, reševalne službe in tiste, ki se jim mudi, kje povečati potrpljenje in zmanjšati hitrost.</h5>
                <h3 align="center">Moto, ki je še v razvoju</h3>
            <br></br><br></br>
            <Row>
                <Col>
                    <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/>
                    <p>Zemljevid</p>
                </Col>

                <Col> 
                    <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/>
                    <p>Statistika</p>
                </Col>

                <Col>
                    <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/>
                    <p>Novice</p>
                </Col>

                <Col>
                    <img className="imageFrontPage" src={predloga} alt="imageFrontPage"/>
                    <p>O projektu</p>
                </Col>
            </Row>
            
            <Row className="opisFunkcionalnosti">
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <NavLink href="/zemljevid">Preberi več</NavLink>
                </Col>

                <Col> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <NavLink href="/statistika">Preberi več</NavLink>
                </Col>

                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <NavLink href="/novice">Preberi več</NavLink>
                </Col>

                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <NavLink href="/About">Preberi več</NavLink>
                </Col>
            </Row>
           

<br></br>
<br></br>
           <h5> prostor za novice </h5>
           <Row>
               <Col> ena </Col>
               <Col> dva </Col>
               <Col> tri </Col>
               <Col> štiri </Col>
           </Row>
        </Container>
    )
}

export default FrontPage;
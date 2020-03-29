import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import MG from "../components/design/MG.jpg";
import MK from "../components/design/MK.jpg";
import PG from "../components/design/PG.jpg";
import NF from "../components/design/NF.jpg";
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
                     <Col><p>V Republiki Sloveniji smo od osamosvojitve zgradili mnoge državne in lokalne ceste, ki (zaradi širitve na eni in manj vzdrževanja na drugi strani) veljajo za dokaj nevarne. 
                         Najhujših prometnih nesreč s smrtnim izidom je zadnja leta res manj, a to žal ne velja za nesreče v splošnem, pa naj imajo zgolj materialne ali tudi blage oz. hujše telesne poškodbe. 
                         Eden izmed mehanizmov za povečanje varnosti je opozarjanje udeležencev na t. i. nevarne cestne odseke. Menimo, da je v smeri prepoznavanja in ozaveščanja udeležencev prometa mogoče narediti še več. 
                         Sami smo s to mislijo, skovali vizijo o spletni rešitvi, ki bi zajemala naprednejšo in učinkovitejšo klasifikacijo cestnih odsekov, ter oceno stopnje njihove nevarnosti. </p></Col>
                 </Row>
                 <Row>
                 <Col><h4>Projekt</h4></Col>
                 </Row>
                 <Row>
                     <Col><p>Na osnovi javnih podatkov o nesrečah na slovenskih cestah, smo s pomočjo metod strojnega učenja razvili osrednjo funkcionalnost naše rešitve – zemljevid z dinamičnim prikazovanjem in opozarjanjem na nevarne cestne odseke. 
                         Odseki so prikazani v odvisnosti od podanih parametrov (čas, vreme, dan, mesec, …) in kvalificirani glede na stopnjo kritičnosti. 
                         Poleg osnovne funkcionalnosti, uporabnikom omogočamo tudi integrirano brskanje po statističnih podatkih in izpostavljamo zanimive povezave, ki smo jih z ustrezno obdelavo pridobili iz oprtih podatkov. 
                         Naš portal prav tako omogoča pregled aktualnih prometnih informacij, kot so stanje na slovenskih mejah, prometna poročila, napovedi prometa in trenutni dogodki na cestah.</p></Col>
                 </Row>
                </Container>
<br></br>
                <Container className="aboutContainer">
                <h4 className="headers"> Ekipa </h4>
                    <Row>
                        <Col><p>Smo ekipa štirih ambicioznih študentov, ki idejo razvito v šolskih klopeh želijo predstaviti širši množici. 
                         </p></Col>
                    </Row>
                    <Row className="teamTitles">
                        <Col>
                            <img className="teamPhoto" src={MG} alt="person"/>
                            <p className="teamName">Marko Gluhak</p>
                            <p>Back-end razvijalec</p>
                        </Col>
                        <Col>
                            <img className="teamPhoto" src={MK} alt="person"/>
                            <p className="teamName">Maruša Konečnik</p>
                            <p>Strojno učenje</p>
                        </Col>
                        <Col>
                            <img className="teamPhoto" src={PG} alt="person"/>
                            <p className="teamName">Pina Gornik</p>
                            <p>Front-end razvijalka</p>
                        </Col>
                        <Col>
                            <img className="teamPhoto" src={NF} alt="person"/>
                            <p className="teamName">Nataša Feher</p>
                            <p>Front-end razvijalka</p>
                        </Col>
                    </Row>
                </Container>
        </React.Fragment>
    )
}

export default About;
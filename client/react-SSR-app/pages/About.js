import React from "react";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap-css-only/css/bootstrap.min.css';
import IdeaIcon from "./components/design/IdeaIcon.svg";
import MG from "./components/design/MG.jpg";
import MK from "./components/design/MK.jpg";
import PG from "./components/design/PG.jpg";
import NF from "./components/design/NF.jpg";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer2";

import "./components/design/App.css"



function About() {

    return (

        <React.Fragment>
            <Layout>

            <br></br>


            <Container className="aboutContainer">
                <Row>
                    <Col>
                        <h4>Ideja</h4>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <p>
                            V Republiki Sloveniji smo od osamosvojitve zgradili mnoge državne
                            in lokalne ceste, ki (zaradi širitve na eni in manj vzdrževanja na
                            drugi strani) veljajo za dokaj nevarne. Najhujših prometnih nesreč
                            s smrtnim izidom je zadnja leta res manj, a to žal ne velja za
                            nesreče v splošnem, pa naj imajo zgolj materialne ali tudi blage
                            oz. hujše telesne poškodbe. Eden izmed mehanizmov za povečanje
                            varnosti je opozarjanje udeležencev na t. i. nevarne cestne
                            odseke. Menimo, da je v smeri prepoznavanja in ozaveščanja
                            udeležencev prometa mogoče narediti še več. Sami smo s to mislijo,
                            skovali vizijo o spletni rešitvi, ki bi zajemala naprednejšo in
                            učinkovitejšo klasifikacijo cestnih odsekov, ter oceno stopnje
                            njihove nevarnosti.{" "}
                        </p>
                    </Col>
                    <Col sm={4}>
                        <img className="ideaImage" src={IdeaIcon} alt="imageFrontPage"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Projekt</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Na osnovi javnih podatkov o nesrečah na slovenskih cestah, smo s
                            pomočjo metod strojnega učenja razvili osrednjo funkcionalnost
                            naše rešitve – zemljevid z dinamičnim prikazovanjem in
                            opozarjanjem na nevarne cestne odseke. Odseki so prikazani v
                            odvisnosti od podanih parametrov (čas, vreme, dan, mesec, …) in
                            kvalificirani glede na stopnjo kritičnosti. Poleg osnovne
                            funkcionalnosti, uporabnikom omogočamo tudi integrirano brskanje
                            po statističnih podatkih in izpostavljamo zanimive povezave, ki
                            smo jih z ustrezno obdelavo pridobili iz oprtih podatkov. Naš
                            portal prav tako omogoča pregled aktualnih prometnih informacij,
                            kot so stanje na slovenskih mejah, prometna poročila, napovedi
                            prometa in trenutni dogodki na cestah.
                        </p>
                        <h5>Tehnološki sklad:</h5>
                        <p>
                            Za tako inovativno rešitev, smo se odločili uporabiti najbolj
                            sveže tehnologije. Razmišljali smo v smislu odzivnosti, izgleda in
                            agilnega programiranja. Na koncu smo se odločili za:
                            <ul>
                                <li>React za uporabniški vmesnik</li>
                                <li>Python za strojno učenje, s knjižnico Efficient Apriori</li>
                                <li>NodeJS in Express za zaledje</li>
                                <li>MongoDB za podatkovno bazo</li>
                                <li>Star laptop, Nginx in Docker za gostovanje</li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container className="aboutContainer">
                <h4 className="headers"> Ekipa </h4>
                <Row>
                    <Col>
                        <p>
                            Smo ekipa štirih študentov univerzitetnega programa Informatike in
                            Tehnologij Komuniciranja na Fakulteti za Elektrotehniko,
                            Računalništvo in Informatiko Univerze v Mariboru. Rešitev, ki vam
                            jo predstavljamo, smo začeli v sklopu zaključnega projektnega dela
                            ob koncu 2. letnika. Po koncu petih tednov obveznega dela smo
                            verjeli, da imamo dobro idejo, možnosti izboljšave in smisel za
                            delo, smo se odločili nadaljevati z razvojem tudi v prostem času.
                            Mi smo ekipa, za Varno Domov:
                        </p>
                    </Col>
                </Row>
                <Row className="teamTitles">
                    <Col>
                        <img className="teamPhoto" src={MG} alt="person" />
                        <p className="teamName">Marko Gluhak</p>
                        <p>Vodja in razvijalec zaledja</p>
                    </Col>
                    <Col>
                        <img className="teamPhoto" src={MK} alt="person" />
                        <p className="teamName">Maruša Konečnik</p>
                        <p>Razvijalka strojnega učenja</p>
                    </Col>
                    <Col>
                        <img className="teamPhoto" src={PG} alt="person" />
                        <p className="teamName">Pina Gornik</p>
                        <p>Razvijalka grafičnega vmesnika</p>
                    </Col>
                    <Col>
                        <img className="teamPhoto" src={NF} alt="person" />
                        <p className="teamName">Nataša Feher</p>
                        <p>Grafična oblikovalka</p>
                    </Col>
                </Row>

            </Container>
        </Layout>
</React.Fragment>



    );
}
export default About;

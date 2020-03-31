import React from "react";
import "../components/design/App.css";
import { Container, Row, Col } from "reactstrap";
import NewsIcon from "../components/design/NewsIcon.svg";
import EventsIcon from "../components/design/EventsIcon.svg";
import ForecastIcon from "../components/design/ForecastIcon.svg";
import MapIcon from "../components/design/MapIcon.svg";
import GraphIcon from "../components/design/GraphIcon.svg";
import AboutIcon from "../components/design/AboutIcon.svg";
import {FaAngleRight} from "react-icons/fa";


function FrontPage(props) {
	const { classes } = props;
	return (
		<Container className="contentCointainer">

			<h4 align="center" className="Slogan"><b>Skupaj za varno pot domov</b></h4>
			
			<section class="DescriptionClass">
				<div class="DescriptionContent">
					<p>
					{" "}
					Vse najnovejše preverjene prometne informacije na enem mestu.
					Predvidevamo <b>kritične regije</b> za možnost nesreče in ozaveščamo voznike,
					reševalne službe in tiste, ki se jim mudi, kje povečati potrpljenje in
					zmanjšati hitrost.
				</p>
				</div>
			</section>

			<div className="paragraphBelow">
					<h5> Združujemo podatke, pridobljene s <b>kredibilnih državnih ustanov</b> in
						jim dodajamo pomen. Podatki prihajajo z <b>Agencije za Varnost v prometu</b>
						Slovenije in spletnih mest <b>DARS</b>. Vam ponujamo prosto <b>brskanje</b> po teh
						<b>podatkih</b>, saj vse shranjujemo v našo bazo podatkov v namene arhiviranja.
						Podatke o samih nesrečah, zbrane z AVP, pa urejamo v podobo 
						<button type="button" className="button">Zemljevida kritičnih točk</button> , ki izvirajo vse od leta 1994.
					</h5>
				<br></br>
			</div>

			<Row className="contentCointainer">
				<Col sm={4}>
					<img className="imageFrontPage" src={MapIcon} alt="imageFrontPage" />
					<h5>
						<b>Zemljevid</b>
					</h5>
					<p>
							Prikaz kritičnih odsekov na slovenskih cestah, z možnostjo
							prilagoditve parametrov na trenutne razmere cest.{" "}
					</p>
					<a href="/zemljevid">Preberi več  <FaAngleRight/></a>
				</Col>

				<Col sm={4}>
					<img
						className="imageFrontPage" src={GraphIcon} alt="imageFrontPage"/>
					<h5>
						<b>Statistika</b>
					</h5>
					<p>
							Statistično predelani podatki o prometnih nesrečah od leta 1994
							naprej. Prikaz števila prometnih nesreč glede na različne filtre.
					</p>
					<a href="/statistika">Preberi več  <FaAngleRight/></a>
				</Col>

				<Col sm={4}>
					<img
						className="imageFrontPage" src={AboutIcon} alt="imageFrontPage"/>
					<h5>
						<b>O projektu</b>
					</h5>
					<p>
							{" "}
							Zgodba o ideji, viziji, razvoju projekta in kdo stoji za njim.
					</p>
					<a href="/onas">Preberi več  <FaAngleRight/></a>
				</Col>
			</Row>

			<Row className="contentContainer">
				<Col sm={4}>
						<img className="imageFrontPage" src={NewsIcon} alt="imageFrontPage" />
						<h5>
							<b>Novice</b>
						</h5>
						<p>
								Zadnje aktualne prometne novice. {" "}
						</p>
						<a href="/prometnenovice">Preberi več  <FaAngleRight/></a>
				</Col>

				<Col sm={4}>
						<img className="imageFrontPage" src={EventsIcon} alt="imageFrontPage" />
						<h5>
							<b>Stanje na cestah</b>
						</h5>
						<p>
								Prometna poročila, stanja na mejnihi prehodih in aktualni dogodki na cestah.{" "}
						</p>
						<a href="/stanjenacestah">Preberi več  <FaAngleRight/></a>
				</Col>

				<Col sm={4}>
						<img className="imageFrontPage" src={ForecastIcon} alt="imageFrontPage" />
						<h5>
							<b>Prometna napoved</b>
						</h5>
						<p>
								Napovedi prometa za prihajajoče dni, posebnosti na cesti, dogodki in ostale
								pomembne informacije.{" "}
						</p>
						<a href="/napovedi">Preberi več  <FaAngleRight/></a>
				</Col>
				</Row>
				<Row>

				</Row>
			</Container>
	);
}

export default FrontPage;

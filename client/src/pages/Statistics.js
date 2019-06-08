import React from "react";
import NesreceLeto from '../components/graphs/NesreceLeto'
import DneviChart from '../components/graphs/DneviChart'
import VremeChart from '../components/graphs/VremeChart'
import NesreceSpol from '../components/graphs/NesreceSpol'
import NesreceVzrok from '../components/graphs/NesreceVzrok'
import {Col, Container, Row} from "reactstrap";
import Text from "recharts/es6/component/Text";
import NesreceVozilo from "../components/graphs/NesreceVozilo";

function Statistics() {
    return (
        <React.Fragment>
            <div>
                <Container className="graphs">
                    <Row>
                        <Col>
                            <h6> Število nesreč v posameznem letu </h6>
                            <NesreceLeto/>
                        </Col>
                        <Col>
                            <h6> Število nesreč glede na posamezen dan v tednu </h6>
                            <DneviChart/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6> Število nesreč glede na vzrok </h6>
                            <NesreceVzrok/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6> Število nesreč glede na tip vozila </h6>
                            <NesreceVozilo/>
                        </Col>
                        <Col>
                            <h6> Nesreče glede na spol povzročitelja</h6>
                            <NesreceSpol/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Statistics;
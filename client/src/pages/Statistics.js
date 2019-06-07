import React from "react";
import NesreceLeto from '../components/graphs/NesreceLeto'
import DneviChart from '../components/graphs/DneviChart'
import VremeChart from '../components/graphs/VremeChart'
import NesreceVzrok from '../components/graphs/NesreceVzrok'
import {Col, Container, Row} from "reactstrap";
import Text from "recharts/es6/component/Text";

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
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Statistics;
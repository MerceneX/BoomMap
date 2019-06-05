import React from "react";
import NesreceLeto from '../components/graphs/NesreceLeto'
import DneviChart from '../components/graphs/DneviChart'
import VremeChart from '../components/graphs/VremeChart'
import NesreceVzrok from '../components/graphs/NesreceVzrok'
import {Col, Container, Row} from "reactstrap";

function Statistics() {
    return (
        <React.Fragment>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <NesreceLeto/>
                        </Col>
                        <Col>
                            <DneviChart/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <VremeChart/>
                        </Col>
                        <Col>
                            <NesreceVzrok/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Statistics;
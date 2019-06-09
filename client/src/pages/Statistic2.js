import React from 'react';
import NesreceLeto from '../components/graphs/NesreceLeto'
import DneviChart from '../components/graphs/DneviChart'
import NesreceSpol from '../components/graphs/NesreceSpol'
import NesreceVzrok from '../components/graphs/NesreceVzrok'
import NesrecePraznik from '../components/graphs/NesrecePraznik'
import NesreceStanjePrometa from '../components/graphs/NesreceStanjePrometa'
import {Col, Container, Row} from "reactstrap";
import NesreceVozilo from "../components/graphs/NesreceVozilo";
import { Button } from 'reactstrap';




class Statistic2 extends React.Component {
    constructor () {
        super()
        this.state = {
            isHidden: true
        }}

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>

                    <Button color="primary" onClick={this.toggleHidden.bind(this)} >Large Button</Button>

                    <Container className="graphs">
                        <Row>
                            <Col>
                                <h6> Število nesreč v posameznem letu </h6>
                                {!this.state.isHidden && <NesreceLeto/>}

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
                        <Row>
                            <Col>
                                <h6> Glede na praznike </h6>
                                <NesrecePraznik/>
                            </Col>
                            <Col>
                                <h6> Glede na stanje prometa </h6>
                                <NesreceStanjePrometa/>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Statistic2;

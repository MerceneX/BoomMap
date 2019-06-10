import React from "react";
import NesreceLeto from "../components/graphs/NesreceLeto";
import DneviChart from "../components/graphs/NesreceDnevi";
import NesreceSpol from "../components/graphs/NesreceSpol";
import NesreceVzrok from "../components/graphs/NesreceVzrok";
import NesrecePraznik from "../components/graphs/NesrecePraznik";
import NesreceUdelezenci from "../components/graphs/NesreceUdelezenci";
import NesreceStanjePrometa from "../components/graphs/NesreceStanjePrometa";
import { Col, Container, Row } from "reactstrap";
import NesreceVozilo from "../components/graphs/NesreceVozilo";
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class Statistics extends React.Component {
	constructor(props) {
		super(props);

        this.toggle = this.toggle.bind(this);
		this.state = {
            dropdownOpen: false,
            show: [true, true, false, false, false, false, false]

		};
	}

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    showHide(num) {
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems};
        });
    }

	render() {
		return (
			<React.Fragment>
				<div className="container">


                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret >
                            Grafi
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.showHide(0)}>Število nesreč v posameznem letu</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(1)}>Število nesreč glede na posamezen dan v tednu</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(2)}>Število nesreč glede na vzrok</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(3)}>Število nesreč glede na tip vozila</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(4)}>Nesreče glede na spol povzročitelja</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(5)}>Glede na praznike</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(6)}>Glede na stanje prometa</DropdownItem>
							<DropdownItem onClick={() => this.showHide(7)}>Glede na tip udeleženca</DropdownItem>

                        </DropdownMenu>
                    </ButtonDropdown>
                    <br/><br/><br/>



					<Container className="graphs">
						<Row>
							<div>

                                {this.state.show[0] && <h6> Število nesreč v posameznem letu </h6>}
								{this.state.show[0] && <NesreceLeto />}
							</div>
							<div>


                                {this.state.show[1] && <h6> Število nesreč glede na posamezen dan v tednu </h6>}
                                {this.state.show[1] && <DneviChart />}
							</div>
						</Row>
						<Row>
							<div>
                                {this.state.show[2] &&<h6> Število nesreč glede na vzrok </h6>}
                                {this.state.show[2] && <NesreceVzrok />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[3] && <h6> Število nesreč glede na tip vozila </h6>}
								{this.state.show[3] && <NesreceVozilo />}
							</div>
							<div>
								{this.state.show[4] && <h6> Nesreče glede na spol povzročitelja</h6>}
								{this.state.show[4] && <NesreceSpol />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[5] && <h6> Glede na praznike </h6>}
								{this.state.show[5] && <NesrecePraznik />}
							</div>
							<div>
								{this.state.show[6] && <h6> Glede na stanje prometa </h6>}
								{this.state.show[6] && <NesreceStanjePrometa />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[7] && <h6> Glede na tip udeleženca </h6>}
								{this.state.show[7] && <NesreceUdelezenci />}
							</div>
							<div>

							</div>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default Statistics;

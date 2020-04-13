import React from "react";
import 'bootstrap-css-only/css/bootstrap.min.css';
import './components/design/App.css';
import NesreceLeto from "./components/graphs/NesreceLeto";
import DneviChart from "./components/graphs/NesreceDnevi";
import NesreceSpol from "./components/graphs/NesreceSpol";
import NesreceVzrok from "./components/graphs/NesreceVzrok";
import NesrecePraznik from "./components/graphs/NesrecePraznik";
import NesreceVreme from "./components/graphs/NesreceVreme";
import NesreceCeste from "./components/graphs/NesreceCeste"
import NesreceStanjePrometa from "./components/graphs/NesreceStanjePrometa";
import { Container, Row } from "reactstrap";
import NesreceVozilo from "./components/graphs/NesreceVozilo";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Chip from '@material-ui/core/Chip';
import NesreceIntenzivnostPrazniki from "./components/graphs/NesreceIntenzivnostPrazniki";
import IntenzivnostPoskodbe from "./components/graphs/IntenzivnostPoskodbe";
import PoskodbeNedelja from "./components/graphs/PoskodbeNedelja";
import NesreceTip from "./components/graphs/NesreceTip";
import TipTrcenja from "./components/graphs/TipTrcenja";
import Layout from "./components/layout/Layout";

class Statistics extends React.Component {
	constructor(props) {
		super(props);

        this.toggle = this.toggle.bind(this);
		this.state = {
            dropdownOpen: false,
            show: [true, true, false, false, false, false, false, false, false, false, false, false, false]

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
			<Layout>
			<React.Fragment>

				<div className="container">
				<br></br>
                    <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret >
                            Izberite graf
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.showHide(0)}>Število nesreč v posameznem letu</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(1)}>Število nesreč glede na posamezen dan v tednu</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(2)}>Število nesreč glede na vzrok</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(3)}>Število nesreč glede na tip vozila</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(4)}>Nesreče glede na spol povzročitelja</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(5)}>Glede na praznike</DropdownItem>
                            <DropdownItem onClick={() => this.showHide(6)}>Glede na stanje prometa</DropdownItem>
							<DropdownItem onClick={() => this.showHide(7)}>Glede na vreme</DropdownItem>
							<DropdownItem onClick={() => this.showHide(8)}>Glede na tip ceste</DropdownItem>
							<DropdownItem onClick={() => this.showHide(9)}>Glede na intenzivnost poškodbe med prazniki</DropdownItem>
							<DropdownItem onClick={() => this.showHide(10)}>Glede intenzivnost poškodbe</DropdownItem>
							<DropdownItem onClick={() => this.showHide(11)}>Glede intenzivnost poškodbe v nedeljo</DropdownItem>
							<DropdownItem onClick={() => this.showHide(12)}>Glede tip nesreče</DropdownItem>
							<DropdownItem onClick={() => this.showHide(13)}>Glede tip trčenja (najbolj smrtonosni)</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

					<br/><br/>
					{this.state.show[0] && <Chip   label="Število nesreč v posameznem letu"  onDelete={() => this.showHide(0)} variant="outlined" />}
					{this.state.show[1] && <Chip   label="Število nesreč glede na posamezen dan v tednu"  onDelete={() => this.showHide(1)} variant="outlined" />}
					{this.state.show[2] && <Chip   label="Število nesreč glede na vzrok"  onDelete={() => this.showHide(2)} variant="outlined" />}
					{this.state.show[3] && <Chip   label="Število nesreč glede na tip vozila"  onDelete={() => this.showHide(3)} variant="outlined" />}
					{this.state.show[4] && <Chip   label="Nesreče glede na spol povzročitelja"  onDelete={() => this.showHide(4)} variant="outlined" />}
					{this.state.show[5] && <Chip   label="Glede na praznike"  onDelete={() => this.showHide(5)} variant="outlined" />}
					{this.state.show[6] && <Chip   label="Glede na stanje prometa"  onDelete={() => this.showHide(6)} variant="outlined" />}
					{this.state.show[7] && <Chip   label="Glede na vreme"  onDelete={() => this.showHide(7)} variant="outlined" />}
					{this.state.show[8] && <Chip   label="Glede na tip ceste"  onDelete={() => this.showHide(8)} variant="outlined" />}
					{this.state.show[9] && <Chip   label="Glede na intenzivnost poškodbe med prazniki"  onDelete={() => this.showHide(9)} variant="outlined" />}
					{this.state.show[10] && <Chip   label="Intenzivnost poškodbe"  onDelete={() => this.showHide(10)} variant="outlined" />}
					{this.state.show[11] && <Chip   label="Intenzivnost poškodbe v nedeljo"  onDelete={() => this.showHide(11)} variant="outlined" />}
					{this.state.show[12] && <Chip   label="Tip nesreče"  onDelete={() => this.showHide(12)} variant="outlined" />}
					{this.state.show[13] && <Chip   label="Tip trčenja"  onDelete={() => this.showHide(13)} variant="outlined" />}

					<br/><br/><br/>

					<Container className="graphs">
						<Row>
							<div>

                                {this.state.show[0] && <h6> Število nesreč v posameznem letu </h6>}
								{this.state.show[0] && <NesreceLeto />}
							</div>
						</Row>
						<br></br>
						<Row>
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
						</Row>
						<Row>
							<div>
								{this.state.show[4] && <h6> Nesreče glede na spol povzročitelja</h6>}
								{this.state.show[4] && <NesreceSpol />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[7] && <h6> Glede na vreme </h6>}
								{this.state.show[7] && <NesreceVreme />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[5] && <h6> Glede na praznike </h6>}
								{this.state.show[5] && <NesrecePraznik />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[6] && <h6> Glede na stanje prometa </h6>}
								{this.state.show[6] && <NesreceStanjePrometa />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[8] && <h6> Glede na tip ceste </h6>}
								{this.state.show[8] && <NesreceCeste />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[10] && <h6> Intenzivnost poškodb </h6>}
								{this.state.show[10] && <IntenzivnostPoskodbe />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[11] && <h6> Intenzivnost poškodb v nedeljo</h6>}
								{this.state.show[11] && <PoskodbeNedelja />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[9] && <h6> Glede na intenzivnost poškodb med prazniki </h6>}
								{this.state.show[9] && <NesreceIntenzivnostPrazniki />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[12] && <h6> Glede na tip nesreče </h6>}
								{this.state.show[12] && <NesreceTip />}
							</div>
						</Row>
						<Row>
							<div>
								{this.state.show[13] && <h6> Glede na tip trčenja (najbolj smrtonosni) </h6>}
								{this.state.show[13] && <TipTrcenja />}
							</div>
						</Row>
					</Container>
				</div>
			</React.Fragment>
			</Layout>

		);
	}
}

export default Statistics;

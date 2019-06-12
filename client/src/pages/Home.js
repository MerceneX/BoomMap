import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css'
import Select from 'react-select'
import Map from '../components/Map'
import Legend from '../components/Legend'
import { Container, Row, Col} from 'reactstrap';
import CustomFilter from '../components/CustomFilter'


const options = [
    { value: 'suho', label: 'Trenutno stanje-suho površje' },
    { value: 'ne_suho', label: 'Trenutno stanje-drugo'},
    { value: 'all', label: 'Kritični odseki' }
];


class SimpleMap extends Component {
    constructor(props){
        super(props)
        this.mapElement = React.createRef();
        this.legendElement = React.createRef();
        this.state = {
            selectedOption: 'all',
        }

        ;
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (selectedOption) => {
        this.mapElement.current.changeOption(selectedOption)
        this.setState({selectedOption: selectedOption });

        console.log(`Option selected:`, selectedOption);
    };

    handleLegendChange = (newLegend) => {
        this.mapElement.current.changeCriticalLevel(newLegend)
    }

    handleFilterSubmit = (state,surface) => {
        this.mapElement.current.changeFilterOptions(state,surface)
    }
    render() {
        const { selectedOption } = this.state;
        return (
            // Important! Always set the container height explicitly
            <Container fluid={true}>
                <Row>
                    <Col xs="2">
                        <div align={"left"}>
                            <Select
                                defaultValue = {options[2]}
                                onChange={this.handleChange}
                                options={options}
                            />
                            <br/>
                            <Legend
                                ref = {this.legendElement}
                                change = {this.handleLegendChange}
                            />
                            <CustomFilter
                                change = {this.handleFilterSubmit}
                            />
                        </div>
                        <br/>
                    </Col>
                    <Col xs="10">
                        <Map
                            option = {this.state.selectedOption}
                            ref={this.mapElement}
                        />
                    </Col>
                </Row>
            </Container>


        );
    }
}

export default SimpleMap;
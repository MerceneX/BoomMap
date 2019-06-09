import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'leaflet/dist/leaflet.css'
import Select from 'react-select'
import Map from '../components/Map'

const options = [
    { value: 'suho', label: 'Trenutno stanje-suho površje' },
    { value: 'ne_suho', label: 'Trenutno stanje-drugo'},
    { value: 'all', label: 'Kritični odseki' },
];

class SimpleMap extends Component {
    constructor(props){
        super(props)
        this.mapElement = React.createRef();
        this.state = {
            selectedOption: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (selectedOption) => {
        this.mapElement.current.changeOption(selectedOption)
        this.setState({selectedOption: selectedOption });

        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const { selectedOption } = this.state;
        return (
            // Important! Always set the container height explicitly

            <div align={"center"}>
                <div align={"left"}>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                </div>
                <br/>
                <Map
                  //  handleChange = {this.handleChange}
                    option = {this.state.selectedOption}
                    ref={this.mapElement}

                />
            </div>
        );
    }
}

export default SimpleMap;
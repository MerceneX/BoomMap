import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'leaflet/dist/leaflet.css'
import Select from 'react-select'
import Map from '../components/Map'

const options = [
    { value: 'currentState', label: 'Trenutno stanje' },
    { value: 'critical_sections', label: 'Kritični odseki' },
];

class SimpleMap extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
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
                <Map />
            </div>
        );
    }
}

export default SimpleMap;
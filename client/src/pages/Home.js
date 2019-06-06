import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import 'leaflet/dist/leaflet.css'
import Map from '../components/Map'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 45.91,
            lng: 14.91,
        },
        zoom: 8.5
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div align={"center"}>
                <Map />
            </div>
        );
    }
}

export default SimpleMap;
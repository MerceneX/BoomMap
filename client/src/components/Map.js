import React from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import myData from '../../src/data/results_json'
import request from 'request'
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css"
import "leaflet.awesome-markers/dist/leaflet.awesome-markers"
import { Container, Row, Col} from 'reactstrap';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

let weatherData = "";

let weather = {
    Clear: 'J',
    Rain: 'D',
    Clouds: 'O',
    Snow: 'S',
    Fog: 'M'
};

var marker = {
    coords: [46.1491664,14.9860106],
    locText: "test",
    iconColor: "",
    criticalState :0
};
class StreetMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 46.1491664 ,
            lng: 14.9860106,
            zoom: 9,
            selectedOption:"all",
            criticalLevelsChecked: {'4': false, '3': false, '2': false},
            filterOptions: {},
            markers: [],
            surface: ''
        }
    }
    changeOption(newOption){
        this.state.markers = [];
        this.setState({filterOptions: {}})
        this.setState({ selectedOption: newOption.value })

    }
    changeCriticalLevel(newLevel){
        this.state.markers = [];
        this.setState({ criticalLevelsChecked: newLevel })

    }
    changeFilterOptions=(filter,surface)=>{
        this.state.markers = []
        this.setState({filterOptions: filter})
        this.state.surface = surface
    }
    getWeatherData = (lat,lon) => {
        let url = 'http://api.openweathermap.org/data/2.5/find?lat='+lat+'&lon='+lon+'&cnt=1&APPID=19117506641d90371c01ce010e35f032';
        //let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Ljubljana&cnt=1&APPID=19117506641d90371c01ce010e35f032'
        request({url,json:true},(error,{body})=>{
            weatherData = body.list[0].weather[0].main;
            let d = body.list[0].weather[0].main;
            return d;
        })
    };
    getCurrentState = ()=>{
        let date = new Date();
        let day = date.getDay()!==0 ? date.getDay()+1 : 6;
        let month = date.getMonth()!==12 ? date.getMonth()+1: 0;
        let state = {
            PRVR_Vreme: weather[weatherData],
            Cas_Nesrece: date.getHours().toString()+'.0',
            dan_v_tednu: day.toString(),
            mesec: month.toString()
        };
        return state
    };
    isSectionCritical = (section,surfaceType)=>{
        let state = Object.keys(this.state.filterOptions).length !== 0 ? this.state.filterOptions : this.getCurrentState()
        console.log(state)
        let count = 0;
        if(myData[section]["dan_teden"].includes(parseInt(state['dan_v_tednu']))) {
            count++;
        }
        let section_attributes = myData[section]['povrsje'][surfaceType.toString()];
        for(let attribute in state){
            console.log(section_attributes)
            console.log(state[attribute])
            if(section_attributes[attribute].includes(state[attribute])&& attribute!='dan_v_tednu')
                count++;
        }

        return count

    };
    setMarkerColor = (criticalState)=> {
        let url = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png';
            switch (criticalState) {
            case 4: url = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png';     break;
            case 3: url= 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png';   break;
            case 2: url = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png';   break;
            case 1: url = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png';   break;
            }
        return url;
    };
    setMarkersBasedOnLegend= (criticalState,marker) => {
        let isLegendEmpty = (!Object.values(this.state.criticalLevelsChecked).includes(true))
        let legendKeys = Object.keys(this.state.criticalLevelsChecked);
        marker.iconColor = this.setMarkerColor(criticalState);
        if(criticalState>=1) {
            if (isLegendEmpty)
                this.state.markers.push(marker)
            else {
                for (let i = 0; i < legendKeys.length; i++) {
                    if (this.state.criticalLevelsChecked[legendKeys[i]] && (criticalState.toString() === legendKeys[i]))
                        this.state.markers.push(marker)
                }
            }
        }
    };
    addMarkers = () => {
        for(let section in myData) {
            if (!myData[section].koordinate.includes(null)) {
                let coord = myData[section].koordinate.toString().split(',');
                marker = {coords: [coord[0], coord[1]],locText: myData[section].kraj[0][3].toString(),iconColor: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png' };
                if (this.state.selectedOption === 'all') {
                    if(Object.keys(this.state.filterOptions).length === 0)
                        this.state.markers.push(marker)
                    else this.setMarkersBasedOnLegend(this.isSectionCritical(section, this.state.surface),marker)
                }
                else {
                    let criticalState = this.isSectionCritical(section, this.state.selectedOption);
                    this.setMarkersBasedOnLegend(criticalState,marker)
                }
            }
        }

    };
    render() {
        console.log(this.state.filterOptions)
        this.addMarkers();
        let weather =this.getWeatherData(46.55472, 15.64667 );
        const position = [this.state.lat, this.state.lng];
        return (
            <Map className="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {this.state.markers.map((m, idx) =>
                    <Marker
                        key={`marker-${idx}`}
                        position={m.coords}
                        icon={L.icon({
                            iconUrl: m.iconColor,
                            iconSize: [30, 50],
                            iconAnchor:   [22, 50],
                            shadowAnchor: [4, 62],  // the same for the shadow
                            popupAnchor:  [-6, -35],
                        })}>
                    <Popup>
                        <span>{m.locText}</span>
                    </Popup>
                </Marker>
                )}
            </Map>


        );
    }
}

export default StreetMap
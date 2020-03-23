
import React from 'react';
import axios from "axios";
import StanjeNaMejah from "../components/rss/StanjeNaMejah";
import DogodkiNaCestah from "../components/rss/DogodkiNaCestah";


class StanjeNaCestah extends React.Component {
    render(){
    return(
    <React.Fragment>
    <StanjeNaMejah />
    <DogodkiNaCestah/>
    </React.Fragment>
    );


    }
}
export default StanjeNaCestah;

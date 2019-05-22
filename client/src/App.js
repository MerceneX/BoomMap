import React from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import Navigation from "./components/layout/Navigation";
import Album from "./components/layout/Album";
import MyCard from "./components/MyCard";


function App() {
    return (
        <div className="App">

            <Navigation/>
            <Album/>

            <Container>
                <MyCard/>
            </Container>

        </div>
    );
}

export default App;

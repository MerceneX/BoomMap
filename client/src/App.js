import React from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Album from "./components/layout/Album";

function App() {
    return (
        <div className="App">

            <Navigation/>
            <Album/>

            <Container>

            </Container>

        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Container>

                <h1>Welcome to Praktikum II template.</h1>
                <p>Congratulations on making it this far, Marko is proud of you.</p>
            </Container>
        <Footer/>
        </div>
    );
}

export default App;

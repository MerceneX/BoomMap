import React from 'react';
import{BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import './components/design/App.css';
import Container from "reactstrap/es/Container";
import Navigation from "./components/layout/Navigation";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import 'leaflet/dist/leaflet.css'
import Map from "./components/Map"

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Navigation/>

                <Route exact path="/" component={Home}/>
                <Route path="/statistika" component={Statistics}/>

                <Container>

                </Container>

                <Route path="/about" component={About}/>
            </div>
            <Footer/>
        </Router>
    );
}
export default App;

import React from 'react';
import{BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import './components/design/App.css';
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import FrontPage from "./pages/FrontPage";
import 'leaflet/dist/leaflet.css';
import Container from "reactstrap/es/Container";


function App() {
    return (
        <Router>
        <div className="App">

        <Header/>
            <Navigation/>

            <Route exact path="/" component={FrontPage}/>
        <Container>
            
        </Container>
           
         </div>
         <Footer/>
    </Router>
       
    );
}
export default App;

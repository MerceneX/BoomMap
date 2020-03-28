import React from 'react';
import '../design/App.css';
import {Navbar, NavLink} from 'reactstrap';
import { IoIosStats } from "react-icons/io";
import {IoIosHome} from "react-icons/io";
import {MdPerson} from "react-icons/md";
import {FaNewspaper} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaRoad} from "react-icons/fa";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-div">
                <Navbar expand="sm" className="nav-bar">
                        <NavLink href="/"><IoIosHome/> Domov </NavLink>
                        <NavLink href="/zemljevid"><FaMapMarkerAlt/>Zemljevid </NavLink>
                        <NavLink href="/statistika"> <IoIosStats/> Statistika</NavLink>
                        <NavLink href="/prometnenovice"> <FaNewspaper/> Novice</NavLink>
                        <NavLink href="/stanjenacestah"> <FaRoad/> Stanje na cestah</NavLink>
                        <NavLink href="/onas"><MdPerson/> O nas</NavLink>
                </Navbar>
            </div>
        )
    }
}
export default Navigation;
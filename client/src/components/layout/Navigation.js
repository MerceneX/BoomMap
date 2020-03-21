import React from 'react';
import '../design/App.css';
import {Navbar, NavLink} from 'reactstrap';
import { IoIosStats } from "react-icons/io";
import {IoIosHome} from "react-icons/io";
import logo from '../design/VarnoDomov_logo.svg';
import {MdPerson} from "react-icons/md";
import {FaNewspaper} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";

import { Container, Row, Col } from 'reactstrap';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar expand="md" className="nav-bar">
                        <NavLink href="/"><IoIosHome/> Domov </NavLink>
                        <NavLink href="/zemljevid"><FaMapMarkerAlt/>Zemljevid </NavLink>
                        <NavLink href="/statistika"> <IoIosStats/> Statistika</NavLink>
                        <NavLink href="/novice"> <FaNewspaper/> Novice</NavLink>
                        <NavLink href="/onas"><MdPerson/> O nas</NavLink>
                </Navbar>
            </div>

        )
    }
}
export default Navigation;
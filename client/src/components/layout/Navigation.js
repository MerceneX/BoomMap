import React from 'react';
import '../design/App.css';
import {Navbar, NavLink} from 'reactstrap';
import { IoIosStats } from "react-icons/io";
import {MdPerson} from "react-icons/md";

class Navigation extends React.Component {
    render() {
        return (

            <div>
                <Navbar fixed="top" expand="md" className="nav-bar">
                        <NavLink href="/">Domov </NavLink>
                        <NavLink href="/statistika"> <IoIosStats/> Statistika</NavLink>
                        <NavLink href="/about"><MdPerson/> O nas</NavLink>
                </Navbar>
            </div>




        )
    }
}



export default Navigation;

import React from 'react';
//import { Nav, NavItem, NavLink } from 'reactstrap';
import {
    Navbar,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class Navigation extends React.Component {
    render() {
        return (

            <div>

                <Navbar fixed="top" color="light" expand="md">

                        <NavLink href="/">Domov</NavLink>
                        <NavLink href="/statistika">Statistika</NavLink>
                        <NavLink href="/about">O nas</NavLink>

                </Navbar>
            </div>


        )
    }
}



export default Navigation;

import React from 'react';
//import { Nav, NavItem, NavLink } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class Navigation extends React.Component {
    render() {
        return (

            <div>

                <Navbar color="light" expand="md">

                        <NavLink href="#">Domov</NavLink>
                        <NavLink href="#">Statistika</NavLink>
                        <NavLink href="#">Nekaj</NavLink>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    <UncontrolledDropdown>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Navbar>
            </div>


        )
    }
}



export default Navigation;

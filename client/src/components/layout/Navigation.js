import React from 'react';
import {Navbar, NavLink} from 'reactstrap';


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

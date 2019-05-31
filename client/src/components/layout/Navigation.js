import React from 'react';
import '../design/App.css';
import {Navbar, NavLink} from 'reactstrap';

class Navigation extends React.Component {
    render() {
        return (

            <div>
                <Navbar fixed="top" expand="md" className="nav-bar">
                        <NavLink href="/">Domov</NavLink>
                        <NavLink href="/statistika">Statistika</NavLink>
                        <NavLink href="/about">O nas</NavLink>
                </Navbar>
            </div>




        )
    }
}



export default Navigation;

// components/Layout.js
import React from "react";
import "../design/App.css";

import Header from "./Header";
import Navigation from "./Navigation"
import Footer from "./Footer2";




const Layout = props => {


    return (
        <div>
        <Header/>
        <Navigation/>
            {props.children}
<Footer/>
        </div>
    );
};

export default Layout;
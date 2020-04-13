import React, {Component} from "react";
import "../design/App.css";
import Typography from "@material-ui/core/Typography";

export default class Footer2 extends Component{
    render() {


        return (
            <div className="footer">
            <div>
                <h5>
                    Vir podatkov: <a href="https://www.avp-rs.si/">avp-rs.si</a>
                </h5>

            </div>
                <div className="footP">
               <p>
                    Kontakt: info@varno-domov.si
               </p>
                </div>
            </div>
        );
    }
}



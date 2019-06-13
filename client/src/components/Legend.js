import React from 'react'
import Checkbox from "react-simple-checkbox";
import { Container, Row, Col} from 'reactstrap';

class Legend extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checkboxHighChecked: false,
            checkboxMediumChecked: false,
            checkboxLowChecked: false,
            selectedCheckboxes: {'4': false, '3': false, '2': false}
        }

    };
    checkboxHighChanged = () => {
        this.state.checkboxHighChecked = !this.state.checkboxHighChecked;
        this.state.selectedCheckboxes = {4: this.state.checkboxHighChecked, 3: this.state.checkboxMediumChecked, 2: this.state.checkboxLowChecked}

        this.props.change(this.state.selectedCheckboxes)
    }
    checkboxMediumChanged = () => {
        this.state.checkboxMediumChecked = !this.state.checkboxMediumChecked;
        this.state.selectedCheckboxes = {4: this.state.checkboxHighChecked, 3: this.state.checkboxMediumChecked, 2: this.state.checkboxLowChecked}

        this.props.change(this.state.selectedCheckboxes)
    }
    checkboxLowChanged = () => {
        this.state.checkboxLowChecked = !this.state.checkboxLowChecked;
        this.state.selectedCheckboxes = {4: this.state.checkboxHighChecked, 3: this.state.checkboxMediumChecked, 2: this.state.checkboxLowChecked}

        this.props.change(this.state.selectedCheckboxes)
    }
    render(){
        return(
            <div>
                <h6> Kritičnost: </h6>
                <hr/>
                <div className="legendDiv">
                    <Row>
                        <Col>
                            <label className ="legendType"> Visoka</label>
                        </Col>
                        <Col>
                             <Checkbox
                                    id = "high"
                                    color = "#CC2A36"
                                    size = "2"
                                    onChange = {this.checkboxHighChanged}
                                    checked =  {this.state.checkboxHighChecked}

                            />
                        </Col>
                        <Col md={"6"}/>
                    </Row>
                    <Row>
                        <Col >
                           <label className ="legendType"> Srednja  </label>
                        </Col>
                         <Col >
                          <Checkbox
                            id = "medium"
                            color = "#ff9933"
                            size = "2"
                            onChange = {this.checkboxMediumChanged}
                            checked =  {this.state.checkboxMediumChecked}
                        />
                        </Col>
                        <Col md={"6"}/>
                    </Row>
                    <Row>
                    <Col>
                        <label className ="legendType"> Nizka  </label>
                    </Col>
                    <Col>
                        <Checkbox
                            id = "low"
                            color = "#00b300"
                            size = "2"
                            onChange = {this.checkboxLowChanged}
                            checked =  {this.state.checkboxLowChecked}
                        />
                    </Col>
                    <Col md={"6"}/>
                    </Row>
                </div>
            </div>



        );
    }

}

export default Legend;
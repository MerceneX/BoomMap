import React from 'react'
import Select from 'react-select'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Row, Col} from 'reactstrap';


function TimePickers() {

    return (
        <form noValidate>
            <TextField
                id="time"
                label="Čas"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        </form>
    );
}
const day_options = [
    { value: '0', label: 'Ponedeljek' },
    { value: '1', label: 'Torek'},
    { value: '2', label: 'Sreda' },
    { value: '3', label: 'Četrtek' },
    { value: '4', label: 'Petek' },
    { value: '5', label: 'Sobota' },
    { value: '6', label: 'Nedelja' },
];

const weather_options = [
    { value: 'J', label: 'Jasno' },
    { value: 'D', label: 'Deževno'},
    { value: 'O', label: 'Oblačno' },
    { value: 'S', label: 'Sneg' },
    { value: 'V', label: 'Veter'},
    { value: 'M', label: 'Megla'}
];

const month_options = [
    { value: '1', label: 'Januar' },
    { value: '2', label: 'Februar'},
    { value: '3', label: 'Marec' },
    { value: '4', label: 'April' },
    { value: '5', label: 'Maj'},
    { value: '6', label: 'Junij'},
    { value: '7', label: 'Julij'},
    { value: '8', label: 'Avgust' },
    { value: '9', label: 'September' },
    { value: '10', label: 'Oktober'},
    { value: '11', label: 'November' },
    { value: '12', label: 'December'},
]

const surface_options = [
    { value: 'suho', label: 'Suho' },
    { value: 'M', label: 'Mokro' },
    { value: 'SL', label: 'Sneženo' },
]
export default class CustomFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedDay : '-1',
            selectedMonth: '-1',
            selectedTime: '-1',
            selectedWeather:'N',
            surface:{general: 'ne_suho', type: 'SU'}
        }
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleWeatherChange = this.handleWeatherChange.bind(this);
        this.handleSurfaceChange = this.handleSurfaceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDayChange=(selected)=>{
        !selected ?this.setState({selectedDay : -1}) : this.setState({selectedDay : selected.value})
    }
    handleMonthChange=(selected)=>{
        !selected ?this.setState({selectedMonth : -1}) : this.setState({selectedMonth : selected.value})
    }
    handleWeatherChange=(selected)=>{
        !selected ?this.setState({selectedWeather : -1}) : this.setState({selectedWeather : selected.value})
    }
    handleTimeChange(event) {
        let time = event.target.value.toString().split(":")
        let o = parseInt(time[0],10)
        this.setState({selectedTime: o+'.0'});

    }
    handleSurfaceChange(selected){
        let surfaceChoice = "";
        if(selected){
            if(selected.value !== 'suho'){
                surfaceChoice = {
                    general: "ne_suho",
                    type: selected.value
                }
            }
            else {
                surfaceChoice = {
                    general: "suho",
                    type: "suho"
                }
            }

        }
        !selected ?this.setState({surface : 'ne_suho'}) : this.setState({surface : surfaceChoice})
    }
    handleSubmit(event) {
        let state = {
                PRVR_Vreme: this.state.selectedWeather,
                Cas_Nesrece: this.state.selectedTime,
                dan_v_tednu: this.state.selectedDay,
                mesec: this.state.selectedMonth,
                PRPV_Povrsje: this.state.surface
        }

        this.props.change(state,this.state.surface)
        event.preventDefault();
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <h6> Po meri: </h6>
            <hr/>
            <label className="custom"/>
            <Select
                isClearable = {true}
                placeholder = "Dan v tednu..."
                options = {day_options}
                onChange = {this.handleDayChange}
            />
            <br/>
            <Select
                isClearable = {true}
                placeholder = "Vreme..."
                options = {weather_options}
                onChange = {this.handleWeatherChange}
            />
            <br/>
            <Select
                isClearable = {true}
                placeholder = "Mesec..."
                options = {month_options}
                onChange = {this.handleMonthChange}
            />
            <br/>
            <Select
                isClearable = {true}
                placeholder = "Površje..."
                options = {surface_options}
                onChange = {this.handleSurfaceChange}
            />

            <br/>
            <TextField
                id="time"
                label="Čas"
                type="time"
                defaultValue="00:00"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange = {this.handleTimeChange}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
            <br/>
            <br/>
            <Row>
                <Col><Button variant="outlined" type="submit">Prikaži </Button></Col>
            </Row>
            </form>
        </div>
        )
    }
}
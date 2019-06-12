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
export default class CustomFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedDay : '0',
            selectedMonth: '',
            selectedTime: '',
            selectedWeather:'',
            v:''
        }
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleWeatherChange = this.handleWeatherChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDayChange=(selected)=>{
        this.setState({selectedDay: selected.value });
    }
    handleMonthChange=(selected)=>{
        this.setState({selectedMonth: selected.value });
    }
    handleWeatherChange=(selected)=>{
        this.setState({selectedWeather: selected.value });
    }
    handleTimeChange(event) {
        let time = event.target.value.toString().split(":")
        let o = parseInt(time[0],10)
        this.setState({selectedTime: o+'.0'});

    }
    handleSubmit(event) {
        let state = {
                PRVR_Vreme: this.state.selectedWeather,
                Cas_Nesrece: this.state.selectedTime,
                dan_v_tednu: this.state.selectedDay,
                mesec: this.state.selectedMonth
        }
        this.props.change(state)
        event.preventDefault();
    }

    handleDelete(){
        this.props.change({})
    }
    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <h6> Po meri: </h6>
            <label className="custom"/>
            <Select
                placeholder = "Dan v tednu..."
                options = {day_options}
                onChange = {this.handleDayChange}
            />
            <br/>
            <Select
                placeholder = "Vreme..."
                options = {weather_options}
                onChange = {this.handleWeatherChange}
            />
            <br/>
            <Select
                placeholder = "Mesec..."
                options = {month_options}
                onChange = {this.handleMonthChange}
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
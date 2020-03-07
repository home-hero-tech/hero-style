import React from 'react';
import DatePicker from "../components/molecule/datepicker/DatePicker";

export default class DatePickerWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
  }

  render() {
    const _style = {
      marginLeft: "100px"
    };

    return (
      <div>
        <DatePicker
          selected={ this.state.startDate }
          onChange={ this.handleChange }
          name="startDate"
          dateFormat="MM/dd/yyyy"
          popperModifiers={{
            offset: {
              enabled: true
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: "viewport"
            }
          }}
        />
      </div>
    );
  }
}
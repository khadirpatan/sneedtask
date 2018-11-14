import React, { Component } from 'react';
import Switch from 'react-switch';
class Toggler extends Component {
    state = { 
        isOn: this.props.isOn
     }
     handleChange=(checked)=>{
        this.setState({isOn:checked});
        this.props.onClick(true, checked);
     }
    render() { 
        return (
            <label htmlFor="normal-switch">
              <span>{this.state.isOn ? "Available" : "Booked" }</span>&nbsp;&nbsp;
              <Switch
                onChange={this.handleChange}
                checked={this.state.isOn}
                id="normal-switch"
              />
            </label>
          );
    }
}
 
export default Toggler;

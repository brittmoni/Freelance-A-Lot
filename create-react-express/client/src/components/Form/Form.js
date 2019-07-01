import React from 'react';
import "./Form.css";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div class="form">
            <h3>Sign up for free project quotes</h3>
            <hr></hr>
            <form onSubmit={this.handleSubmit}>

                <div className="col-md-12">
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </div>

                 <div className="col-md-12">
                <label>
                    Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </div>

                <div className="col-md-12">
                <label>
                    Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </div>
                <div className="col-md-12">
                <input type="submit" value="Sign Up Now" />
                </div>
            </form>
            </div>
        );}}
    
        export default Form;
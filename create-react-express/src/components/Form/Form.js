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
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                
                <label>
                    Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Sign Up Now" />
            </form>
            </div>
        );}}
    
        export default Form;
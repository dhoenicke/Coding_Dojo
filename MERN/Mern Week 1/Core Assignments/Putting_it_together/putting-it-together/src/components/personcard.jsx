import React, { Component } from 'react';

export class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            haircolor: this.props.haircolor,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.personsName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.haircolor}</p>
                <button className='btn btn-outline-dark' onClick={() =>this.setState({age: this.state.age + 1})}>{this.props.personsName}</button>
            </div>
        );

    }
}

export default PersonComponent;
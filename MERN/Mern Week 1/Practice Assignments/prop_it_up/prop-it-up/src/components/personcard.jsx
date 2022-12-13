import React, { Component } from 'react';

export class PersonComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.personsName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
            </div>
        );

    }
}

export default PersonComponent;
import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: parseInt(this.props.age)
        };
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <fieldset>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button
                    onClick={
                        () => {
                            this.setState({ age: this.state.age + 1 })
                        }
                    }
                >{firstName} {lastName}'s Birthday Button
                </button>
            </fieldset>
        );
    }
}

export default PersonCard;
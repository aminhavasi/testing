import React, { Component } from 'react';
import Person from './person';

class Persons extends Component {
    render() {
        const { persons, deletePerson, personChange } = this.props;
        return (
            <div>
                {persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        personDelete={() => deletePerson(person.id)}
                        changed={event => personChange(event, person.id)}
                    />
                ))}
            </div>
        );
    }
}
export default Persons;

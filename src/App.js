import React, { Component } from 'react';
import Persons from './components/persons';
import './css/index.css';
class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'amin', age: 23 },
            { id: 2, name: 'ali', age: 23 },
            { id: 3, name: 'hassan', age: 23 },
            { id: 4, name: 'mohamad', age: 23 }
        ],
        showPersons: false
    };
    handleShowPersons = () => {
        this.setState({ showPersons: !this.state.showPersons });
        console.log(this.state.showPersons);
    };
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filtredPersons = persons.filter(p => p.id !== id);
        this.setState({ persons: filtredPersons });
    };
    handleNameChange = (name, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.name = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({ persons });
    };
    render() {
        const { persons, showPersons } = this.state;
        let person = null;

        if (showPersons) {
            person = (
                <Persons
                    persons={persons}
                    deletePerson={this.handleDeletePerson}
                    personChange={this.handleNameChange}
                />
            );
        }
        return (
            <div style={{ textAlign: 'center' }}>
                <h2>Personal Manager</h2>
                <h3>number person:{this.state.persons.length}</h3>
                {person}
                <button
                    style={{ padding: '1em', backgroundColor: 'pink' }}
                    onClick={this.handleShowPersons}
                >
                    show
                </button>
            </div>
        );
    }
}
export default App;

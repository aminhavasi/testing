import React, { Component } from 'react';

class Person extends Component {
    render() {
        const { name, age, personDelete, changed } = this.props;
        return (
            <div>
                <p>{`${name},${age}`}</p>
                <input type="text" placeholder={name} onChange={changed} />
                <button onClick={personDelete}>delete</button>
            </div>
        );
    }
}
export default Person;

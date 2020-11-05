import React from 'react'
import Person from './person/Person'


const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.click(index)}
        changedName={props.changedName.bind(this, person.id)}
        // changedName={(event) => this.nameChangeHandler(event, person.id)}
        deletePerson={props.deletePerson}
        key={person.id}
        name={person.name}
        age={person.age} />
});

export default persons;
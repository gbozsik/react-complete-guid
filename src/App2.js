import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App2 extends Component {
    state = {
        persons: [
            { id: 'sgs', name: 'max', age: 23 },
            { id: 'ytdkjg', name: 'name2', age: 24 },
            { id: '4ert', name: 'name3', age: 34 }
        ],
        otherStates: [
            { title: 'some other value' },
            { title: 'some other value 2' }
        ],
        showPerson: false
    }

    switchOtherStateHandler = () => {
        this.setState({
            otherStates: [
                { title: 'other state changed' },
                { title: 'some other value 2 changed' }
            ]
        });
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 23 },
                { name: 'name2777', age: 24 },
                { name: 'name3666', age: 64 }
            ],
        },
        );
    }

    // nameChangeHandler = (id, event) => { //this version if you call it with arrow function
    nameChangeHandler = (id, event) => { //this version with id param first, if you call it with ".bind(this, person.id)"
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        }
        // const person = Object.assign({}, this.state.persons[personIndex]) // older alternative of spread operator above

        person.name = event.target.value;
        const mutatedPersons = [...this.state.persons];
        mutatedPersons[personIndex] = person;
        this.setState({persons: mutatedPersons}
        );
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();  // slice() create new object, not just pointing to a same reference of persons
        const persons = [...this.state.persons]   //creates new object as well, not like "const persons = this.state.persons"
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            margin: '10px'
        };

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            changedName={this.nameChangeHandler.bind(this, person.id)}
                            // changedName={(event) => this.nameChangeHandler(event, person.id)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        // let classes = ['red', 'bold'].join(' ');
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }

        return (
            <div className="App">
                <h1>App 2</h1>
                <p className={classes.join(' ')}>This is a paragraph</p>
                <button style={style} onClick={this.togglePersonHandler} >Toggle persons</button>
                <button style={style} onClick={() => this.switchNameHandler('MMMaamama App 2')} >Switch name</button>
                {persons}
            </div>
            // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
        )
    }
}

export default App2;

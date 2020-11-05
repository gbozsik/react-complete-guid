import React, { Component } from 'react';
// import './App.css';
import App from './App'
import classes from './App.css'
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit'

class App2 extends Component {
    state = {
        persons: [
            { id: 'sgs', name: 'max', age: 23 },
            { id: 'ytdkjg', name: 'name2', age: 24 },
            { id: '4ert', name: 'name3', age: 34 }
        ],
        showPerson: false
    }

    // nameChangeHandler = (event, id) => { //this version if you call it with arrow function
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
        this.setState({ persons: mutatedPersons }
        );
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
        let persons = null;
        let app = null;

        if (this.state.showPerson) {
            persons =
                <Persons
                    persons={this.state.persons}
                    click={this.deletePersonHandler}
                    changedName={this.nameChangeHandler}
                // changedName={(event) => this.nameChangeHandler(event, person.id)}
                />
            app = <App />
        }

        return (
            <div className={classes.App}>
                {/* <h1>App 2</h1>
                <p className={assignedClasses.join(' ')}>This is a paragraph</p>
                <button className={btnClasses} onClick={this.togglePersonHandler} >Toggle persons</button> */}
                <Cockpit
                    showPerson={this.state.showPerson}
                    persons={this.state.persons}
                    clickToggle={this.togglePersonHandler}
                    clickChange={this.switchNameHandler.bind(this, 'newName in App 2')}
                />
                {persons}
                {app}
            </div>
            // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
        )
    }
}

export default App2;

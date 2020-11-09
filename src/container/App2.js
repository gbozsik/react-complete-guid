import React, { Component } from 'react';
// import './App.css';
import App from './App'
import classes from './App.css'
import Persons from '../components/persons/Persons'
import Cockpit from '../components/cockpit/Cockpit'
import withClassFunction from '../hoc/withClassFunction'
import Aux from '../hoc/Auxiliary'

class App2 extends Component {
    constructor(props) {
        super(props)
        console.log('[App2.js] constructor')
    }
    state = {
        persons: [
            { id: 'sgs', name: 'max', age: 23 },
            { id: 'ytdkjg', name: 'name2', age: 24 },
            { id: '4ert', name: 'name3', age: 34 }
        ],
        showPerson: false,
        showCockpit: true,
        changeCounter: 0
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[App2.js] getDerivedStateFromProps', props)
    //     return state;
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App2.js] shoudComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App2.js] componentDidUpdate');
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
        this.setState((prevState, props) => {
            return {
                persons: mutatedPersons,
                changeCounter: prevState.changeCounter + 1      //and DON`T DO THIS: this.state.changeCounter + 1, couse not guaranteed, you`ll set the actual state
            }
        });
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                { id: 'iddfg', name: 'new name in App2', age: 23 },
                { id: 'idrth', name: 'name2777', age: 24 },
                { id: 'idtsrht', name: 'name3666', age: 64 }
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
        console.log('[App2.js] render')
        let persons = null;
        let cockPit = null;
        let app = null;

        if (this.state.showPerson) {
            persons =
                <Persons
                    persons={this.state.persons}
                    click={this.deletePersonHandler}
                    changedName={this.nameChangeHandler}
                // changedName={(event) => this.nameChangeHandler(event, person.id)}
                />
            app = <App title={this.props.subTitle} />
        }
        if (this.state.showCockpit) {
            cockPit = <Cockpit
                title={this.props.appTitle}
                showPerson={this.state.showPerson}
                personsLength={this.state.persons.length}
                clickToggle={this.togglePersonHandler}
                clickChange={this.switchNameHandler}
            />
        }

        return (
            <Aux classes={classes.App}>
                <button onClick={() => {
                    const doesShowCocpit = this.state.showCockpit;
                    this.setState({ showCockpit: !doesShowCocpit })
                }
                }>Remove Cockpit</button>
                {cockPit}
                {persons}
                {app}
            </Aux>
            // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
        )
    }
}

export default withClassFunction(App2, classes.App);

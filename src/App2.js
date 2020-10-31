import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App2 extends Component {
    state = {
        persons: [
            { name: 'max', age: 23 },
            { name: 'name2', age: 24 },
            { name: 'name3', age: 34 }
        ],
        otherStates: [
            { title: 'some other value' },
            { title: 'some other value 2' }
        ]
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
            // this.switchOtherStateHandler
        );
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'max', age: 23 },
                { name: event.target.value, age: 24 },
                { name: 'name3666', age: 64 }
            ],
            shotPerson: false
        }
        );
    }

    togglePersonHandler = () => {
        const doesShow = this.state.shotPerson;
        this.setState({ shotPerson: !doesShow })
    }

    render() {
        const style = {
            backgrondColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>App 2</h1>
                <button style={style} onClick={this.togglePersonHandler} >Toggle persons</button>
                {this.state.shotPerson ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age} >{this.state.otherStates[0].title}
                        </Person>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'manunuuuu')}
                            changedName={this.nameChangeHandler}>
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}>
                        </Person>
                    </div>
                    : null
                }
            </div>
            // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
        )
    }
}

export default App2;

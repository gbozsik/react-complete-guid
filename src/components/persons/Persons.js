import React, { PureComponent } from 'react'
import Person from './person/Person'


class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return null;
    // }

    // shouldComponentUpdate(nextProps, nextState) {            //instead this use PureComponent which checks cahnges for all the prosp
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else{
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Sanpshot!!!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnMount');
    }
    render() {
        console.log('Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.click(index)}
                changedName={this.props.changedName.bind(this, person.id)}
                // changedName={(event) => this.nameChangeHandler(event, person.id)}
                deletePerson={this.props.deletePerson}
                key={person.id}
                name={person.name}
                age={person.age} />
        });
    }
};
export default Persons;
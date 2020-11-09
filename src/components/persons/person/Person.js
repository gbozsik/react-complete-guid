import React, { Component } from 'react';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary'
import Aux from '../../../hoc/Auxiliary'
import WithClass from '../../../hoc/WithClass';

import classes from './Person.css';

class Person extends Component {
    render() {
        // For testing boundary error...
        // const randomNumer = Math.random();
        // if  (randomNumer > 0.7) {
        //     throw new Error('somthing went wrong');
        // }

        console.log('[Person.js] renderin...');
        return (
            <WithClass classes={classes.Person}>
                {/* <div className={classes.Person}> */}
                <ErrorBoundary key={this.props.id}>
                    <p onClick={this.props.click}>I am {this.props.name} an I am {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input type='text' onChange={this.props.changedName} value={this.props.name} />
                </ErrorBoundary>
                {/* </div > */}
            </WithClass>
        )
    }
}

export default Person;
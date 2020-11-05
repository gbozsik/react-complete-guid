import React from 'react';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary'

import classes from './Person.css';

const person = (props) => {

    // For testing boundary error...
    // const randomNumer = Math.random();
    // if  (randomNumer > 0.7) {
    //     throw new Error('somthing went wrong');
    // }

    return (
        <div className={classes.Person}>
            <ErrorBoundary key={props.id}>
                <p onClick={props.click}>I am {props.name} an I am {props.age} years old</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changedName} value={props.name} />
            </ErrorBoundary>
        </div >
    )
}

export default person;
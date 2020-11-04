import React from 'react';

import classes from './Person.css';

const person = (props) => {
    return (
    <div className={classes.Person}>
        <p onClick = {props.click}>I am {props.name} an I am {props.age}</p>
        <p>{props.children}</p>
        <input type = 'text' onChange = {props.changedName} value = {props.name}/>
    </div>
    )
}

export default person;
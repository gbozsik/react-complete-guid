import React from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];

    let btnClasses = '';
    if (props.showPerson) {
        // btnClasses.push(classes.Red)
        btnClasses = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>App</h1>
            <p className={assignedClasses.join(' ')}>This is a paragraph</p>
            <button
                className={btnClasses}
                onClick={props.clickToggle} >Toggle persons</button>
            <button 
            className={assignedClasses.join(' ')}
            onClick={props.clickChange} >Switch name</button>
        </div>
    );
}

export default cockpit;
import React, { useEffect, memo } from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //http request..
        const timer = setTimeout(() => {
            console.log('Saved data to db.')
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] Clean up work in useEffect ')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] Clean up in 2nd useEffect')
        }
    })

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];

    let btnClasses = '';
    if (props.showPerson) {
        // btnClasses.push(classes.Red)
        btnClasses = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
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

export default React.memo(cockpit);
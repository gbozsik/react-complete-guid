import React from 'react';
import Radium, { StyleRoot } from 'radium'

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 800px)': {
            width: '750px'
        }
    };
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I am {props.name} an I am {props.age}</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changedName} value={props.name} />
        </div>
    )
}

export default Radium(person);
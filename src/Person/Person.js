import React from 'react';

import './Person.css';

const person = (props) => {
    return (
    <div className='Person'>
        <p onClick = {props.click}>I am {props.name} an I am {props.age}</p>
        <p>{props.children}</p>
        <input type = 'text' onChange = {props.changedName} value = {props.name}/>
    </div>
    )
}

export default person;
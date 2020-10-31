import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import App2 from './App2'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'max', age: 23},
      {name: 'name2', age: 24},
      {name: 'name3', age: 34}
    ],
  });

  const [otherState, setOtherState] = useState({
    otherStates: [
      {title: 'some other value'},
      {title: 'some other value 2'}
    ]
  }); 

  console.log(personsState, otherState);

  const switchOtherStateHandler = () => {
    setOtherState({
      otherStates: [
        {title: 'other state changed'},
        {title: 'some other value 2 changed'}
      ]
    });
  }

  const switchNameHandler = (newName) => {
    // console.log("Was clicked");
    setPersonsState({
      persons: [
        {name: newName, age: 23},
        {name: 'name2777', age: 24},
        {name: 'name3666', age: 64}
      ],
    },
    switchOtherStateHandler()
    ); 
  }

  const nameChangeHandler = (event) => {
    // console.log("Was clicked");
    setPersonsState({
      persons: [
        {name: 'max', age: 23},
        {name: event.target.value, age: 24},
        {name: 'name3666', age: 64}
      ],
    }
    ); 
  }

  const style = {
    backgrondColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
        <h1>App</h1>
        <button style={style} onClick = {() => switchNameHandler('ammamamamam')} >Switch name</button>
        <Person 
        name = {personsState.persons[0].name} 
        age = {personsState.persons[0].age} >{otherState.otherStates[0].title}
        </Person>
        <Person 
        name = {personsState.persons[1].name} 
        age = {personsState.persons[1].age}
        click = {switchNameHandler.bind(this, 'manunuuuu')}
        changedName = {nameChangeHandler}>  
        </Person>
        <Person 
        name = {personsState.persons[2].name} 
        age = {personsState.persons[2].age}>
        </Person>
        <App2/>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
    );
}

export default app;

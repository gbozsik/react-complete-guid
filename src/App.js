import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import App2 from './App2'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'sdlf', name: 'max', age: 23 },
      { id: 'tfdr', name: 'name2', age: 24 },
      { id: 'p;lk', name: 'name3', age: 34 }
    ],
  });

  const [otherState, setOtherState] = useState({
    otherStates: [
      { title: 'some other value' },
      { title: 'some other value 2' }
    ]
  });

  const [showPersonState, setShowPersonState] = useState({
    showPerson: false
  })

  const switchOtherStateHandler = () => {
    setOtherState({
      otherStates: [
        { title: 'other state changed' },
        { title: 'some other value 2 changed' }
      ]
    });
  }

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 23 },
        { name: 'name2777', age: 24 },
        { name: 'name3666', age: 64 }
      ],
    },
      switchOtherStateHandler()
    );
  }

  const nameChangeHandler = (id, event) => {
    const personIndex = personsState.persons.findIndex(p => p.id === id);
    console.log(personIndex)
    const personForMutation = personsState.persons[personIndex];

    personForMutation.name = event.target.value;

    const mutatablePersonArray = [...personsState.persons]
    mutatablePersonArray[personIndex] = personForMutation;

    setPersonsState({persons: mutatablePersonArray});
  }

  const togglePersonHandler = () => {
    const doesShow = showPersonState.showPerson;
    if (doesShow) {
      setShowPersonState({ showPerson: false })
    } else {
      setShowPersonState({ showPerson: true })
    }
  }

  const deletePersonhandler = (persontIndex) => {
    const mutatablePersons = [...personsState.persons];
    mutatablePersons.splice(persontIndex, 1);
    setPersonsState({ persons: mutatablePersons });
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
      <button style={style} onClick={togglePersonHandler} >Toggle persons</button>
      <button style={style} onClick={() => switchNameHandler('ammamamamam')} >Switch name</button>
      {showPersonState.showPerson ? <div>
        {personsState.persons.map((person, index) => {
          return <Person
            kex={person.id}
            click={deletePersonhandler.bind(this, index)}
            changedName={nameChangeHandler.bind(this, person.id)}
            name={person.name}
            age={person.age}
          />
        })
        })

        <App2 />
      </div> : null}
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
  );
}

export default app;

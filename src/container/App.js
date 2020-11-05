import React, { useState } from 'react';
import classes from './App.css';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'sdlf', name: 'App max', age: 23 },
      { id: 'tfdr', name: 'App name2', age: 24 },
      { id: 'p;lk', name: 'App name3', age: 34 }
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

    setPersonsState({ persons: mutatablePersonArray });
  }

  const togglePersonHandler = () => {
    const doesShow = showPersonState.showPerson;
    setShowPersonState({ showPerson: !doesShow })
  }

  const deletePersonhandler = (persontIndex) => {
    const mutatablePersons = [...personsState.persons];
    mutatablePersons.splice(persontIndex, 1);
    setPersonsState({ persons: mutatablePersons });
  }

  const getPersons = () => {
    let per = null;
    if (showPersonState.showPerson) {
      per = (
        <div>
          <Persons
            persons={personsState.persons}
            click={deletePersonhandler}
            changedName={nameChangeHandler} />
        </div>
      );
    }
    return per;
  }

  return (
    <div className={classes.App}>
      <Cockpit
        showPerson={showPersonState.showPerson}
        persons={personsState.persons}
        clickToggle={togglePersonHandler}
        clickChange={switchNameHandler.bind(this, 'newName in App 1')}
      />
      {getPersons()}
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
  );
}

export default app;

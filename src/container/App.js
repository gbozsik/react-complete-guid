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

  const [showPersonState, setShowPersonState] = useState({
    showPerson: false
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { id: 'idlkj', name: ' new name in App', age: 23 },
        { id: 'idsd', name: 'name2777', age: 24 },
        { id: 'idgb', name: 'name3666', age: 64 }
      ],
    },
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

  const [personComponentsState, setPersonComponentsState] = useState({
    personsComponents:
      <div>
        <Persons
          persons={personsState.persons}
          click={deletePersonhandler}
          changedName={nameChangeHandler} />
      </div>
  })

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

  const getPersons2 = () => {
    if (showPersonState.showPerson) {
    return personComponentsState.personsComponents;
    } 
  }

  return (
    <div className={classes.App}>
      <Cockpit
        title={props.title}
        showPerson={showPersonState.showPerson}
        personsLength={personsState.persons.length}
        clickToggle={togglePersonHandler}
        clickChange={switchNameHandler}
      />
      {getPersons2()}
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'am a react app'))
  );
}

export default React.memo(app);

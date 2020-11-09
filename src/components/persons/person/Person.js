import React, { Component } from 'react';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary'
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types'
import AuthContect from '../../../context/Auth-context'

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        // For testing boundary error...
        // const randomNumer = Math.random();
        // if  (randomNumer > 0.7) {
        //     throw new Error('somthing went wrong');
        // }


        console.log('[Person.js] renderin...');
        return (
            <WithClass classes={classes.Person}>
                <ErrorBoundary key={this.props.id}>
                    <AuthContect.Consumer >{(context) => context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
                    </AuthContect.Consumer>
                    <p onClick={this.props.click} key='id1'>I am {this.props.name} and I am {this.props.age} years old</p>
                    <p key='id2'>{this.props.children}</p>
                    <input
                        key='id3'
                        // ref={(inputRef) => {this.inputElement = inputRef}}
                        ref={this.inputElementRef}
                        type='text'
                        onChange={this.props.changedName}
                        value={this.props.name} />
                </ErrorBoundary>
            </WithClass>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changedName: PropTypes.func
}

export default Person;
import React, { Component } from 'react' 
// const { Component } = require("react")

/*
*   Works in production mode
*/


const { render } = require("react-dom")

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCacth = (error, info) => {
        this.setState({hasError: true, errorMessage: info});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
import React from 'react'

const withClassFunction = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClassFunction;
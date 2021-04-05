import React from 'react'

export const LoginScreen = ({history}) => {
    const handleClick =() => {
        // history.push('/')
        history.replace('/')
    }  
    return (
        <div className="container">
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick ={ handleClick }
            >
                Login
            </button>
        </div>
    )
}

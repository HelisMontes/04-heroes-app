import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { type } from '../../type/types'
export const LoginScreen = ({history}) => {
    const { dispatch } = useContext(AuthContext)
    const handleClick =() => {
        const lastPath = localStorage.getItem('lastPath')
        dispatch({
            type: type.login,
            payload: {
                name: 'Helis',
            }
        });
        history.replace( lastPath )
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

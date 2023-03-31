import React, { useContext } from 'react'
import { userContext } from '../../utils/context/userContext';
import Login from '../log/Login';


const Profile = () => {
    const { user, isLogged } = useContext(userContext);

    return (
        <div>
            {isLogged ?
                <p>{user.lastname}</p> : <Login />}
        </div>
    )
}

export default Profile
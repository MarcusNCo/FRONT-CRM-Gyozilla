import React, { useContext } from 'react'
import Login from '../log/Login';
import { UserContext } from '../../utils/context/UserContext';




const Profile = () => {
    const { user, isLogged } = useContext(UserContext);

    return (
        <div>
            {isLogged ?
                <p>{user.lastname}</p> : <Login />}
        </div>
    )
}

export default Profile
import React, { useContext } from 'react'
import Login from '../log/Login';
import { userContext } from '../../utils/context/usercontext';



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
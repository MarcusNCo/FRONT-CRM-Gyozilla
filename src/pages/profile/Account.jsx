import React, { useContext } from 'react'
import { UserContext } from '../../utils/context/UserContext'
import './Profile.css'
const Account = () => {
    const { user, isLogged } = useContext(UserContext)
    return (
        <div>
            {isLogged ?
                <p>
                    {user.lastname}
                </p> :
                ''
            }
        </div>
    )
}

export default Account
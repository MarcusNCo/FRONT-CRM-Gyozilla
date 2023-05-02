import React, { useContext } from 'react'
import { UserContext } from '../../utils/context/UserContext'

const Fidelity = () => {
    const { user, isLogged } = useContext(UserContext)
    return (
        <div>
            {isLogged ?
                user.fidelityPoints != null ?
                    <p>Mes points : {user.fidelityPoints}</p> :
                    <p>Vous n'avez pas de points</p> :
                <p>Points de fidélité introuvable !</p>
            }

        </div>
    )
}

export default Fidelity

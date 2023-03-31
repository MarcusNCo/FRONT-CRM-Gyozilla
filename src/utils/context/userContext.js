import { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const userContext = createContext({});

    function UserContextProvider(props) {
    const [user, setUser] = useState({});
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        const decoded = jwt_decode(token);
        setUser(decoded);
        setIsLogged(true)
        }
    }, []);


    return (
        <userContext.Provider value={{user, setUser, isLogged, setIsLogged}}>
        {props.children}
        </userContext.Provider>
    );
}

export default UserContextProvider;


import { createContext, useContext, useState, useEffect } from "react";

import {getCurrentUser } from "../api/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getCurrentUser()
            .then((response) => {
                if (response) {
                    setIsLogged(true);
                    setUser(response);
                }
                else {
                    setIsLogged(false);
                    setUser(null);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLogged,
                setIsLogged,
                user,
                setUser,
                loading,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
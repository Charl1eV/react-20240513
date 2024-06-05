import { UserContext } from "./context";
import { useState } from "react";
import { useMemo } from "react";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    const contextValue = useMemo(() => ({
        user,
        logIn: setUser,
        logOut: () => setUser(null)
    }), [user]);

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
};
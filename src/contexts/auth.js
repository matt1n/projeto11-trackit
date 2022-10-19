import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [loginInfo, setLoginInfo] = useState({})
    
    return(
        <AuthContext.Provider value={{setLoginInfo, loginInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
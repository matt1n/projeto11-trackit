import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [loginInfo, setLoginInfo] = useState({})
    const [percent, setPercent] = useState(0)
    const config = {
        headers: {
          Authorization: `Bearer ${loginInfo.token}`,
        },
      };
    
    return(
        <AuthContext.Provider value={{setLoginInfo, loginInfo, config, percent, setPercent}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
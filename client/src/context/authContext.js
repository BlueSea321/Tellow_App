import React from "react";

const AuthContext = React.createContext();

export function useAuthContext() {
    return React.useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [isLogin, setIsLogin] = React.useState(false)
    const [role, setRole] = React.useState('')

    React.useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('tellow_auth'))
        if (userInfo) {
            setIsLogin(true)
            setRole(userInfo.role)
        } else {
            setIsLogin(false)
        }
    }, [])

    const value = {
        isLogin,
        setIsLogin,
        role,
        setRole
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
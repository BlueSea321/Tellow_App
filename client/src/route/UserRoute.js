import React from 'react';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const isAuthenticated = React.useMemo(() => {
        const info = JSON.parse(localStorage.getItem('tellow_auth'))
        return info && info.role === 'user' ? true : false
    }, [])

    return isAuthenticated ? children : <Navigate to='/login' />
} 
  
export default UserRoute;
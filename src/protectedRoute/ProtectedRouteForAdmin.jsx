import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouteForUser = ({children}) => {
    const user=JSON.parse(localStorage.getItem('users'))
  if(user?.role==='admin'){
    return children;
  }else{
    return <Navigate to={'/login'}/>
  }
}

export default ProtectedRouteForUser
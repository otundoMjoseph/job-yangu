import react from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ requiredRole }) => {
    // TO IMPLEMENT LATER 
    return <Outlet />;
    
};

export default ProtectedRoute

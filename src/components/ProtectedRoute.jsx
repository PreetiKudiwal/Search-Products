import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { Context } from '../../Context/MainContext';

export default function ProtectedRoute({ children }) {
    const { user } = useContext(Context);
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
}

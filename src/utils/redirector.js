import { Navigate } from "react-router-dom"

export const redirector=(to)=>{
    return <Navigate to={to} />
}
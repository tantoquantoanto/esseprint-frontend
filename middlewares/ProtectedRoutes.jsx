
import { Outlet } from "react-router-dom";


export const isAuthorized = () => {
  return (localStorage.getItem("Authorization"))
};

export const ProtectedRoutes = () => {

    const isAuth = isAuthorized()
  return isAuth ? <Outlet /> : <Login/>;
};
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../util/requests";

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { client } = useContext(ClientContext);

  return client ? <Outlet /> : <Navigate to="/" />;
};

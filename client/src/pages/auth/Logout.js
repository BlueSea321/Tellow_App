import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useLangContext } from "../../context/langContext";

export default function Logout() {
  const navigate = useNavigate();
  const { langData } = useLangContext();
  const { setIsLogin } = useAuthContext();

  React.useEffect(() => {
    localStorage.removeItem("tellow_auth");
    localStorage.removeItem("tellows_token")
    setIsLogin(false);
    navigate("/login");
  });
  
  return <div>{langData.page.auth.logout}</div>;
}

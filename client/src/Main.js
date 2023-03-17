import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminArea from "./pages/AdminArea/Home";
import Users from "./pages/AdminArea/Users";
import UserArea from "./pages/UserArea/Home";
import Comments from "./pages/UserArea/Comments";
import Settings from "./pages/UserArea/Settings";
import Logout from "./pages/auth/Logout";
import SearchArea from "./pages/SearchArea";
import Verification from "./pages/auth/Verification";
import { useAuthContext } from "./context/authContext";
import Phones from "./pages/AdminArea/Phones";
import CommentsManage from "./pages/AdminArea/CommentsManage";
import AdminRoute from "./route/AdminRoute";
import UserRoute from "./route/UserRoute";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

export default function Main() {
  const { setIsLogin } = useAuthContext();

  React.useEffect(() => {
    const session = JSON.parse(localStorage.getItem("tellow_auth"));
    if (session) {
      const expire = session.expire;
      if (expire >= Date.now()) {
        setIsLogin(true);
      } else {
        localStorage.removeItem("tellow_auth");
        setIsLogin(false);
      }
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/logout" element={<Logout />} />
        <Route exact={true} path="/signup" element={<Signup />} />
        <Route exact={true} path="/verify" element={<Verification />} />
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route exact={true} path="/privacy-policy" element={<Privacy />} />
        <Route 
          exact={true} 
          path="/adminarea" 
          element={
            <AdminRoute>
              <AdminArea />
            </AdminRoute>
          }
        />
        <Route 
          exact={true} 
          path="/adminarea/users" 
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />
        <Route 
          exact={true} 
          path="/adminarea/phones" 
          element={
            <AdminRoute>
              <Phones />
            </AdminRoute>
          }
        />
        <Route 
          exact={true} 
          path="/adminarea/comments" 
          element={
            <AdminRoute>
              <CommentsManage />
            </AdminRoute>
          }
        />
        <Route 
          exact={true} 
          path="/userarea" 
          element={
            <UserRoute>
              <UserArea />
            </UserRoute>
          }
        />
        <Route 
          exact={true} 
          path="/userarea/comments" 
          element={
            <UserRoute>
              <Comments />
            </UserRoute>
          }
        />
        <Route 
          exact={true} 
          path="/userarea/settings" 
          element={
            <UserRoute>
              <Settings />
            </UserRoute>
          }
        />
        <Route exact={true} path="/num/:number" element={<SearchArea />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FaHome, FaUsers, FaPhoneAlt, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../context/myContext";
import "../styles/sidebar.css";
import { useLangContext } from "../context/langContext";

export default function AdminSideBar(props) {
  const navigate = useNavigate();
  const { langData } = useLangContext();
  const { isAdminVisible, setIsAdminVisible } = useMyContext();

  const myhandler = (dest) => {
    navigate(`/adminarea${dest}`);
  };

  return (
    <SideNav
      className={isAdminVisible ? 'userarea_sidebar' : ''}
      style={{ 'background': '#0d777c' }}
      expanded={isAdminVisible}
    >
      <SideNav.Toggle onClick={() => setIsAdminVisible(!isAdminVisible)} />
      <SideNav.Nav defaultSelected={props.chooseType}>
        <NavItem eventKey="home" onClick={() => myhandler("")}>
          <NavIcon>
            <FaHome style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.adminSideBar.home}</NavText>
        </NavItem>
        <NavItem eventKey="users" onClick={() => myhandler("/users")}>
          <NavIcon>
            <FaUsers style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.adminSideBar.userManage}</NavText>
        </NavItem>
        <NavItem eventKey="phones" onClick={() => myhandler("/phones")}>
          <NavIcon>
            <FaPhoneAlt style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.adminSideBar.phoneManage}</NavText>
        </NavItem>
        <NavItem eventKey="comments" onClick={() => myhandler("/comments")}>
          <NavIcon>
            <FaComments style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.adminSideBar.commentManage}</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

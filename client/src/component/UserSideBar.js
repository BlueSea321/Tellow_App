import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FaHome, FaComments, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../context/myContext";
import "../styles/sidebar.css";
import { useLangContext } from "../context/langContext";

export default function UserSideBar(props) {
  const navigate = useNavigate();
  const { langData } = useLangContext();
  const { isUserVisible, setIsUserVisible } = useMyContext();

  const myhandler = (dest) => {
    navigate(`/userarea${dest}`);
  };

  return (
    <SideNav
      className={isUserVisible ? 'userarea_sidebar' : ''}
      style={{ 'background': '#0d777c' }}
      expanded={isUserVisible}
    >
      <SideNav.Toggle onClick={() => setIsUserVisible(!isUserVisible)} />
      <SideNav.Nav defaultSelected={props.chooseType}>
        <NavItem eventKey="home" onClick={() => myhandler("")}>
          <NavIcon>
            <FaHome style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.userSideBar.home}</NavText>
        </NavItem>
        <NavItem eventKey="comments" onClick={() => myhandler("/comments")}>
          <NavIcon>
            <FaComments style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.userSideBar.comment}</NavText>
        </NavItem>
        <NavItem eventKey="settings" onClick={() => myhandler("/settings")}>
          <NavIcon>
            <FaCogs style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>{langData.component.userSideBar.setting}</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import UserSideBar from "../../component/UserSideBar";
import { useMyContext } from "../../context/myContext";
import { useLangContext } from "../../context/langContext";

export default function Settings() {
  const { langData } = useLangContext();
  const { isUserVisible, setIsUserVisible } = useMyContext();
  const [userData, setUserData] = React.useState("");

  React.useEffect(() => {
    const personalData = JSON.parse(localStorage.getItem("tellow_auth"));
    if (personalData) {
      setUserData(personalData);
    }
    if (window.innerWidth < 700) {
      setIsUserVisible(false)
    }
  }, [setIsUserVisible]);

  return (
    <>
      <Header />
      <Container
        className="userarea_home userarea_content"
        style={ isUserVisible ? { 'paddingLeft': '240px' } : { 'paddingLeft': '64px' } }
        fluid
      >
        <div style={{ marginLeft: "30px" }}>
          <h1>{langData.page.userarea.setting.title}</h1>
          <h4>{langData.page.userarea.setting.sTitle}</h4>
          <Form.Label htmlFor="username" className="mt-3" style={{ fontWeight: "bold" }}>
            {langData.page.userarea.setting.username}
          </Form.Label>
          <Form.Control
            type="text"
            id="username"
            value={userData.username}
            style={{ width: "50%" }}
          />
          <Form.Label htmlFor="username" className="mt-3" style={{ fontWeight: "bold" }}>
            {langData.page.userarea.setting.email}
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={userData.email}
            style={{ width: "50%" }}
          />
          {/* <Button variant="success" className="mt-5">{langData.page.userarea.setting.save}</Button> */}
        </div>
        <UserSideBar chooseType="settings" />
      </Container>
      <Footer />
    </>
  );
}

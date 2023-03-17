import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import AdminSideBar from "../../component/AdminSideBar";
import { useAuthContext } from "../../context/authContext";
import { useMyContext } from "../../context/myContext";
import "../../styles/adminarea.css";
import { getTotalStatus } from "../../api/admin";
import { useLangContext } from "../../context/langContext";

export default function AdminArea() {
  const { langData } = useLangContext();
  const { isAdminVisible, setIsAdminVisible } = useMyContext();
  const [totalStatus, setTotalStatus] = React.useState({})

  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setIsAdminVisible(false);
    }
  }, [setIsAdminVisible]);

  React.useEffect(() => {
    const getStatus = async () => {
      const status = await getTotalStatus()
      setTotalStatus(status)
    }
    getStatus()
  })

  return (
    <>
      <Header />
      <Container
        className="userarea_home userarea_content"
        style={
          isAdminVisible ? { paddingLeft: "240px" } : { paddingLeft: "64px" }
        }
        fluid
      >
        <div
          style={{
            marginLeft: "30px",
          }}
        >
          <h1>{langData.page.adminarea.home.title}</h1>
          <div className="statistics_box">
            <div className="user_statistics">
              <div className="title">{langData.page.adminarea.home.userStatusTitle}</div>
              <div className="user_count">
                <span>{langData.page.adminarea.home.userStatusContent1}</span>
                <span>{totalStatus.total}</span>
              </div>
              <div className="user_count">
                <span>{langData.page.adminarea.home.userStatusContent2}</span>
                <span>{totalStatus.active}</span>
              </div>
              <div className="user_count">
                <span>{langData.page.adminarea.home.userStatusContent3}</span>
                <span>{totalStatus.passive}</span>
              </div>
            </div>
            <div className="user_statistics">
              <div className="title">{langData.page.adminarea.home.phoneStatusTitle}</div>
              <div className="user_count">
                <span>{langData.page.adminarea.home.phoneStatusContent1}</span>
                <span>{totalStatus.totalPhones}</span>
              </div>
              {/* <div className="user_count">
                <span>Verified Users</span>
                <span>180</span>
              </div>
              <div className="user_count">
                <span>Unverified Users</span>
                <span>50</span>
              </div> */}
            </div>
            <div className="user_statistics">
              <div className="title">{langData.page.adminarea.home.commentStatusTitle}</div>
              <div className="user_count">
                <span>{langData.page.adminarea.home.commentStatusContent1}</span>
                <span>{totalStatus.totalComments}</span>
              </div>
              {/* <div className="user_count">
                <span>Verified Users</span>
                <span>180</span>
              </div>
              <div className="user_count">
                <span>Unverified Users</span>
                <span>50</span>
              </div> */}
            </div>
          </div>
        </div>
        <AdminSideBar chooseType="home" />
      </Container>
      <Footer />
    </>
  );
}

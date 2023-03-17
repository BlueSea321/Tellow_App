import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import UserSideBar from "../../component/UserSideBar";
import { useAuthContext } from "../../context/authContext";
import { useMyContext } from "../../context/myContext";
import "../../styles/userarea.css";
import { useLangContext } from "../../context/langContext";

export default function UserArea() {
  const { langData } = useLangContext();
  const { isUserVisible, setIsUserVisible } = useMyContext();

  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setIsUserVisible(false)
    }
  }, [setIsUserVisible])

  return (
    <>
      <Header />
      <Container
        className="userarea_home userarea_content"
        style={ isUserVisible ? { 'paddingLeft': '240px' } : { 'paddingLeft': '64px' } }
        fluid
      >
        <div style={{ marginLeft: "30px" }}>
          <h1>{langData.page.userarea.home.title}</h1>
          <h3>{langData.page.userarea.home.welcome}</h3>
          {langData.page.userarea.home.text1}
          <ul>
            <li>{langData.page.userarea.home.category1}</li>
            <li>{langData.page.userarea.home.category2}</li>
            <li>{langData.page.userarea.home.category3}</li>
          </ul>
          <br />
          {/* <img alt="karma" src="https://www.tellows.com/images/karma.png" />
          <br />
          Your tellows karma is <b>0</b>! Your karma will increase if your comments receive positive ratings.
          <br />
          <br />
          <b>Congratulation!</b> You have now the possibility to use tellows Premium for the Android App until 2022-11-13 for free! To activate, download the <a href="https://play.google.com/store/apps/details?id=app.tellows" rel="noreferrer" target="_blank">tellows Android App</a> on your phone, log in to the app and activate premium in the premium menu via the Play Store.
          <br />
          With your personal tellows you can manage all your rated phone numbers (e. g. update or delete) and benefit from your personal blacklist.
          <br />
          It doesn't matter if you use the tellows website or mobile tellows apps. The only important thing is to log in to the website or link the app to your tellows account.
          <br />
          <br />
          Your personal blacklist contains all numbers that you have rated yourself (regardless of the ratings of other users) and of course all other phone numbers rated by the tellows community. The blacklist can then be used on the <a href="https://shop.tellows.de/en/scorelist-fritzbox-new.html?utm_source=website&amp;utm_medium=startpage&amp;utm_campaign=memberarea" rel="noreferrer" target="_blank">Fritz!Box</a>, in mobile <a href="https://www.tellows.co.uk/c/about-tellows-uk/tellows-apps-callerid-blocker/" rel="noreferrer" target="_blank">tellows apps</a>, phone systems (via <a href="https://shop.tellows.de/en/number-blacklist-csv-all-countries.html" rel="noreferrer" target="_blank">CSV API</a>). */}
        </div>
        <UserSideBar chooseType="home" />
      </Container>
      <Footer />
    </>
  );
}

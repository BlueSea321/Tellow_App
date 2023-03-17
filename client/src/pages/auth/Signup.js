import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import { signUp } from "../../api/auth";
import { useAuthContext } from "../../context/authContext";
import { msgs } from "../../utils/utils";
import "../../styles/login.css";
import { useLangContext } from "../../context/langContext";

export default function Signup() {
  const navigate = useNavigate();
  const { langData } = useLangContext();
  const [alertMsg, setAlertMsg] = React.useState("");
  const { setSignupData } = useAuthContext();

  const [personalData, setPersonalData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setPersonalData({
      ...personalData,
      [name]: val,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    const res = await signUp(personalData);

    if (res.msg === msgs.error) {
      setAlertMsg(langData.page.auth.signUp.errMsg)
      console.log(res.err)
    } else if (res.msg === msgs.alreadyExist) {
      setAlertMsg(langData.page.auth.signUp.emailDuplicateMsg);
    } else {
      setSignupData(personalData);

      setPersonalData({
        username: "",
        email: "",
        password: "",
      });

      localStorage.setItem("tellow_signup_id", res.data._id);
      navigate("/verify");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="home-part">
          <div className="register_contain">
            {alertMsg && (
              <Alert variant="danger" className="mt-4">
                {alertMsg}
              </Alert>
            )}
            <form className="signin_form" onSubmit={(e) => register(e)}>
              <h3>{langData.page.auth.signUp.signUp}</h3>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="username"
                  value={personalData.username}
                  className="form-control"
                  placeholder={langData.page.auth.signUp.placeHolder1}
                  onChange={(e) => changeHandler(e)}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="email"
                  name="email"
                  value={personalData.email}
                  className="form-control"
                  placeholder={langData.page.auth.signUp.placeHolder2}
                  onChange={(e) => changeHandler(e)}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="password"
                  name="password"
                  value={personalData.password}
                  className="form-control"
                  placeholder={langData.page.auth.signUp.placeHolder3}
                  onChange={(e) => changeHandler(e)}
                  required
                />
              </div>

              <div className="form-group mt-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label ms-2"
                    htmlFor="customCheck1"
                  >
                    {langData.page.auth.signUp.remember}
                  </label>
                </div>

                <button className="btn btn-primary btn-block login_submit">
                  {langData.page.auth.signUp.submit}
                </button>
              </div>

              <div className="d-flex align-items-center">
                <p>
                  {langData.page.auth.signUp.query} <a href="/login">{langData.page.auth.signUp.login}</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

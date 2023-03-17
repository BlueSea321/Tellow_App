import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";

import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import { login } from "../../api/auth";
import { useAuthContext } from "../../context/authContext";
import "../../styles/login.css";
import { useLangContext } from "../../context/langContext";

export default function Login() {
  const navigate = useNavigate();
  const { langData } = useLangContext();
  const { setIsLogin, setRole } = useAuthContext();
  const [alertMsg, setAlertMsg] = React.useState("");
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setLoginData({
      ...loginData,
      [name]: val,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault()
    const res = await login(loginData);

    if (res.status === "ok") {
      const session = {
        id: res.data._id,
        username: res.data.username,
        email: res.data.email,
        role: res.data.role,
        expire: Date.now() + 3600 * 24 * 2 * 1000
      }
      localStorage.setItem('tellows_token', res.token)
      localStorage.setItem("tellow_auth", JSON.stringify(session));
      setIsLogin(true);
      setRole(res.data.role)
      navigate('/')
    } else if (res.status === 'suspend') {
      setAlertMsg(langData.page.auth.login.suspendMsg)
    } else if (res.status === "verify") {
      localStorage.setItem("tellow_signup_id", res.id);
      navigate("/verify");
    } else if (res.status === 'err') {
      setAlertMsg(langData.page.auth.login.errMsg)
      console.log(res.err)
    } else {
      const err_type = res.status;
      if (err_type === "wrong_pwd") {
        setAlertMsg(langData.page.auth.login.wrongPwdMsg);
      } else if (err_type === "not_exist") {
        setAlertMsg(langData.page.auth.login.notExistMsg);
      }
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
            <form className="signin_form" onSubmit={(e) => loginUser(e)}>
              <h3>{langData.page.auth.login.signIn}</h3>
              <div className="form-group mt-3">
                <input
                  type="email"
                  value={loginData.email}
                  name="email"
                  className="form-control"
                  onChange={(e) => changeHandler(e)}
                  placeholder={langData.page.auth.login.placeHolder1}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="password"
                  value={loginData.password}
                  name="password"
                  onChange={(e) => changeHandler(e)}
                  className="form-control"
                  placeholder={langData.page.auth.login.placeHolder2}
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
                    {langData.page.auth.login.remember}
                  </label>
                </div>

                <button className="btn btn-primary btn-block login_submit">
                  {langData.page.auth.login.submit}
                </button>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <a href="/signup">{langData.page.auth.login.register}</a>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { FaSearch, FaStar } from "react-icons/fa";
import Footer from "../component/Footer";
import { Header } from "../component/Header";
import { useLangContext } from "../context/langContext";
import { useMyContext } from "../context/myContext";
import { getRecentNumbers, getUnwantedNumbers } from "../api/user";
import { nativePhoneNumber } from "../utils/utils";
import "../styles/home.css";
import image from '../image/start_score.jpg';
import { useAuthContext } from "../context/authContext";

export default function Home() {
  const { langData } = useLangContext();
  const { role } = useAuthContext();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const {
    unwantedNumbers,
    setUnwantedNumbers,
    recentNumbers,
    setRecentNumbers,
  } = useMyContext();

  const onChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const searchPhoneNumber = async (e) => {
    e.preventDefault();
    navigate(`/num/${phoneNumber}`);
  };

  React.useEffect(() => {
    const getDatas = async () => {
      const unwantedData = (await getUnwantedNumbers()).data;
      setUnwantedNumbers(unwantedData);
      const recentData = (await getRecentNumbers()).data;
      setRecentNumbers(recentData);
    };
    getDatas();
  }, [setRecentNumbers, setUnwantedNumbers]);

  return (
    <>
      <Header />
      <Container fluid>
        <div className="home-part">
          <div className="home-contain">
            <div className="home-image">
              <h2>{langData.page.home.introTitle}</h2>
              <p>{langData.page.home.introContent}</p>
              <div className="row justify-content-center">
                <div className="search-box col-auto mb-4">
                  {role === "admin" ? (
                    ""
                  ) : (
                    <Form
                      className="d-flex"
                      onSubmit={(e) => searchPhoneNumber(e)}
                    >
                      <Form.Control
                        type="number"
                        placeholder={langData.page.home.placeHolder1}
                        value={phoneNumber}
                        onChange={(e) => onChangeHandler(e)}
                        className="me-2 border-0"
                        aria-label="Search"
                        required
                      />
                      <Button
                        type="submit"
                        variant="success"
                        className="search-btn"
                      >
                        <FaSearch className="search-icon" />
                      </Button>
                    </Form>
                  )}
                </div>
              </div>
            </div>
            <div className="home-intro">
              <img
                alt="tellow score"
                src={image}
                className="home-intro_image"
              />
              <p>{langData.page.home.text1}</p>
            </div>
            <hr className="home-intro_divide"></hr>
            <div className="col-md-12 mb-4">
              <h3>{langData.page.home.unwantedTitle}</h3>
              {langData.page.home.unwantedContent1}
              <ol className="commentlist list-unstyled">
                {unwantedNumbers.length > 0 ? (
                  unwantedNumbers.map((item) => (
                    <li key={item._id}>
                      <div className="row">
                        <div className="col-auto mt-3">
                          <div
                            className={`realscore realscore${item.score}`}
                          ></div>
                        </div>
                        <div className="col comment-body">
                          <p className="lead mt-3 mb-1">
                            <FaStar className="star-icon" />
                            <i>{item.username}</i>
                            &nbsp;reported
                            <span> {item.callername} </span>
                            with number
                            <span> {item.number} </span>
                            as {item.callertype}
                          </p>
                          <div className="comment-meta">{item.createdDate}</div>
                          <p
                            className="mb-0"
                            style={{ wordBreak: "break-word" }}
                          >
                            {item.content}
                          </p>
                          {role === "admin" ? (
                            ""
                          ) : (
                            <a
                              href={`/num/` + nativePhoneNumber(item.number)}
                              className="btn btn-outline-primary mb-2"
                              style={{ textDecoration: "none" }}
                            >
                              1 Ratings for {item.number}
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>{langData.page.home.noData}</p>
                )}
              </ol>
            </div>
            <div className="col-md-12 mb-4">
              <h3>{langData.page.home.recentTitle}</h3>
              <ol className="commentlist list-unstyled">
                {recentNumbers.length > 0 ? (
                  recentNumbers.map((item) => (
                    <li key={item._id}>
                      <div className="row">
                        <div className="col-auto mt-3">
                          <div
                            className={`realscore realscore${item.score}`}
                          ></div>
                        </div>
                        <div className="col comment-body">
                          <p className="lead mt-3 mb-1">
                            <FaStar className="star-icon" />
                            <i>{item.username}</i>
                            &nbsp;reported
                            <span> {item.callername} </span>
                            with number
                            <span> {item.number} </span>
                            as {item.callertype}
                          </p>
                          <div className="comment-meta">{item.createdDate}</div>
                          <p
                            className="mb-0"
                            style={{ wordBreak: "break-word" }}
                          >
                            {item.content}
                          </p>
                          {role === "admin" ? (
                            ""
                          ) : (
                            <a
                              href={`/num/` + nativePhoneNumber(item.number)}
                              className="btn btn-outline-primary mb-2"
                              style={{ textDecoration: "none" }}
                            >
                              1 Ratings for {item.number}
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>{langData.page.home.noData}</p>
                )}
              </ol>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

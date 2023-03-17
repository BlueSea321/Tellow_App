import React from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Card, Container, Image, Alert } from "react-bootstrap";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { Header } from "../component/Header";
import Footer from "../component/Footer";
import { useAuthContext } from "../context/authContext";
import { useMyContext } from "../context/myContext";
import {
  createComment,
  createPhoneNumberInfo,
  getPhoneCommentData,
  getPhoneNumberInfo,
  getTellowsData,
  phoneCheck,
} from "../api/user";
import { cities } from "../utils/citis";
import { completedPhoneNumber, scoreImages } from "../utils/utils";
import "../styles/searcharea.css";
import { useLangContext } from "../context/langContext";



export default function SearchArea() {
  const phoneNumber = useParams().number;
  const { langData } = useLangContext();
  const [number, setNumber] = React.useState(phoneNumber);
  const { isLogin } = useAuthContext();
  const { phoneData, setPhoneData } = useMyContext();
  const [callerFlag, setCallerFlag] = React.useState(false);
  const [commentData, setCommentData] = React.useState({
    score: "5",
    callername: "",
    callertypeid: "1",
    content: "",
  });
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState('')
  const [curComments, setCurComments] = React.useState([])

  const callerType = [
    langData.callertype.text1,
    langData.callertype.text2,
    langData.callertype.text3,
    langData.callertype.text4,
    langData.callertype.text5,
    langData.callertype.text6,
    langData.callertype.text7,
    langData.callertype.text8,
    langData.callertype.text9,
    langData.callertype.text10,
    langData.callertype.text11,
  ];

  React.useEffect(() => {
    setNumber(phoneNumber);
  }, [phoneNumber]);

  React.useEffect(() => {
    const getPhoneDetail = async () => {
      setCurComments([])
      const validPhoneNumber = completedPhoneNumber(number);
      if (isValidPhoneNumber(validPhoneNumber, "IT")) {
        //search on database
        const res = await getPhoneNumberInfo(number);
        if (res.status === "exist") {
          setPhoneData(res.data[0]);
          const phoneCommentStatus = await getPhoneCommentData(validPhoneNumber)
          if (phoneCommentStatus.status === 'ok') {
            setCurComments(phoneCommentStatus.data)
          } else {
            console.log('not exist')
          }
        } else {
          //search from tellows API
          const res = await getTellowsData();
          if (res.status === "ok") {
            const tellowsData = res.data;
            const properDatas = tellowsData.filter((data) =>
              data.number.includes(number)
            );
            let info;
            if (properDatas.length > 0) {
              info = {
                number: properDatas[0].number,
                score: properDatas[0].score,
                callername: properDatas[0].callername,
                callertype: properDatas[0].callertype,
                callertypeid: properDatas[0].callertypeid,
                prefix: properDatas[0].prefix,
                prefixname: properDatas[0].prefixname,
                comments: properDatas[0].complains,
                lastcomment: properDatas[0].lastcomment,
              };
            } else {
              const res = await phoneCheck(validPhoneNumber);
              if (res.status === "ok") {
                const phoneDetail = res.data;
                if (phoneDetail) {
                  const temp = phoneDetail.national_format.split(" ");
                  const prefix = temp[0];
                  const locationInfo = cities.filter(
                    (city) => parseInt(city.areaCode) === parseInt(prefix)
                  );
                  let prefixname = "";
                  if (locationInfo.length > 0) {
                    prefixname = locationInfo[0].areaName;
                  } else {
                    prefixname = "unknown";
                  }
                  info = {
                    number: phoneDetail.phone_number,
                    score: 5,
                    callername: "",
                    callertype: "",
                    callertypeid: "",
                    prefix: prefix,
                    prefixname: prefixname,
                    comments: 0,
                    lastcomment: "",
                  };
                } else {
                  setAlertMsg(langData.page.searcharea.unCorrectMsg)
                  return;
                }
              } else if (res.status === "err") {
                setAlertMsg(langData.page.searcharea.wrongMsg)
                console.log(res.err);
              }
              const phoneData = await createPhoneNumberInfo(info);
              if (phoneData.status === "ok") {
                setPhoneData(phoneData.data);
              } else {
                setPhoneData(phoneData.data);
              }
            }
          } else if (res.status === "err") {
            setAlertMsg(langData.page.searcharea.wrongMsg)
            console.log(res.err);
          }
        }
      } else {
        setAlertMsg(langData.page.searcharea.invalidMsg)
      }
    };
    getPhoneDetail();
  }, [number, langData, setPhoneData]);

  const radioHandler = (e) => {
    const currentValue = e.target.value;
    if (currentValue === "unknown") {
      setCommentData({
        ...commentData,
        callername: currentValue,
      });
    } else {
      setCommentData({
        ...commentData,
        callername: "",
      });
    }
    setCallerFlag(true);
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setCommentData({
      ...commentData,
      [name]: val,
    });
  };

  const onSubmit = async (e) => {
    setIsSubmit(true);
    e.preventDefault();
    const username = JSON.parse(localStorage.getItem("tellow_auth")).username;
    const userid = JSON.parse(localStorage.getItem("tellow_auth")).id;
    const data = {
      number: "+39" + number,
      score: commentData.score,
      callername: commentData.callername,
      callertype: callerType[commentData.callertypeid - 1],
      callertypeid: commentData.callertypeid,
      userid: userid,
      username: username,
      content: commentData.content,
    };

    const res = await createComment(data);
    setPhoneData(res.phoneInfo);
    setCurComments(res.commentInfo)
    setCommentData({
      score: "5",
      callername: "",
      callertypeid: "1",
      content: "",
    });
    setIsSubmit(false);
  };

  return (
    <>
      <Header />
      <Container fluid>
        <div className="home-part">
          <div className="register-contain mt-3 mb-3">
            {
              alertMsg && 
              <Alert variant="danger">
                {alertMsg}
              </Alert>
            }
            {phoneData.number && (
              <h1>
                {phoneData.number} from {phoneData.prefixname}
              </h1>
            )}
            {phoneData.score && (
              <Card style={{ width: "100%" }}>
                <Card.Body className="card_content">
                  <Image
                    className="card_image"
                    src={scoreImages[phoneData.score - 1]}
                  ></Image>
                  <Card.Title>{langData.page.searcharea.detailTitle}</Card.Title>
                  {phoneData.callername ? (
                    <div>
                      <b>{langData.page.searcharea.label1}&nbsp;</b>
                      {phoneData.callertype}
                      <br />
                      <b>{langData.page.searcharea.label2}&nbsp;</b>
                      {phoneData.callername}
                    </div>
                  ) : (
                    <p>{langData.page.searcharea.text1}</p>
                  )}
                  <b>{langData.page.searcharea.label3}&nbsp;</b>
                  {phoneData.prefixname} - {langData.page.searcharea.country}
                  <br />
                  <b>{langData.page.searcharea.label4}&nbsp;</b>
                  {phoneData.number
                    ? isPossiblePhoneNumber(phoneData.number.toString())
                      ? phoneData.number
                      : "+39" + phoneData.number
                    : ""}
                  {!isLogin && (
                    <div className="mt-3">
                    {langData.page.searcharea.text2}&nbsp;
                      <a href="/login">{langData.page.searcharea.login}</a> {langData.page.searcharea.text3}
                    </div>
                  )}
                </Card.Body>
              </Card>
            )}
            {
              curComments.length > 0 ?
              <div className="mt-4">
                <h4>Who calls with {number}?</h4>
                <ol className="commentlist list-unstyled">
                {
                  curComments.map((comment) => (
                <li key={comment._id}>
                    <div className="row">
                      <div className="col-auto mt-3">
                        <div
                          className={`realscore realscore${comment.score}`}
                        ></div>
                      </div>
                      <div className="col comment-body">
                        <p className="lead mt-3 mb-1">
                          <i>{comment.username}</i>
                          &nbsp;reported number
                          <span> {comment.number} </span>
                          as {comment.callername}
                        </p>
                        <div className="comment-meta">
                          {comment.createdDate}
                        </div>
                        <p className="mb-0" style={{ wordBreak: "break-word" }}>
                          {comment.content}
                        </p>
                        <br />
                      </div>
                    </div>
                  </li>
              ))
                }
              </ol>
              </div> : 
              <div className="mt-4 d-flex justify-content-center">
                <h5>No comment data</h5>
              </div>
            }
            {isLogin && (
              <Form className="mt-2" onSubmit={onSubmit}>
                <h1>{langData.page.searcharea.newCommentTitle} {number}</h1>
                <div className="mt-3">
                  <Form.Range
                    min="1"
                    max="9"
                    name="score"
                    step="1"
                    value={commentData.score}
                    onChange={(e) => onChangeHandler(e)}
                    className={`test${commentData.score}`}
                  />
                </div>
                <div className="mb-3">
                  <Form.Label
                    className="mt-3"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    {langData.page.searcharea.newCommentLabel1}
                  </Form.Label>
                  <div className="form-check">
                    <Form.Label>
                      <Form.Check
                        type="radio"
                        name="callername"
                        value="unknown"
                        onChange={radioHandler}
                        required
                      />
                      {langData.page.searcharea.radio1}
                    </Form.Label>
                  </div>
                  <div className="form-check">
                    <Form.Label>
                      <Form.Check
                        type="radio"
                        name="callername"
                        value="new"
                        onChange={radioHandler}
                        required
                      />
                      {langData.page.searcharea.radio2}
                    </Form.Label>
                  </div>
                  {callerFlag && (
                    <Form.Control
                      className="mt-2"
                      value={commentData.callername}
                      onChange={(e) => onChangeHandler(e)}
                      name="callername"
                      type="text"
                      required
                    />
                  )}
                </div>
                <div className="mb-3">
                  <Form.Label>{langData.page.searcharea.newCommentLabel2}</Form.Label>
                  <Form.Select
                    name="callertypeid"
                    value={commentData.callertypeid}
                    onChange={(e) => onChangeHandler(e)}
                  >
                    <option value="1">{langData.callertype.text1}</option>
                    <option value="2">{langData.callertype.text2}</option>
                    <option value="3">{langData.callertype.text3}</option>
                    <option value="4">{langData.callertype.text4}</option>
                    <option value="5">{langData.callertype.text5}</option>
                    <option value="6">{langData.callertype.text6}</option>
                    <option value="7">{langData.callertype.text7}</option>
                    <option value="8">{langData.callertype.text8}</option>
                    <option value="9">{langData.callertype.text9}</option>
                    <option value="10">{langData.callertype.text10}</option>
                    <option value="11">{langData.callertype.text11}</option>
                  </Form.Select>
                </div>
                <div className="mb-3">
                  <Form.Label>{langData.page.searcharea.newCommentLabel3}</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={commentData.content}
                    name="content"
                    onChange={(e) => onChangeHandler(e)}
                    rows={3}
                    required
                  />
                </div>
                {isSubmit ? (
                  <Button variant="success" type="submit" disabled>
                    {langData.page.searcharea.submitting}
                  </Button>
                ) : (
                  <Button variant="success" type="submit">
                    {langData.page.searcharea.submit}
                  </Button>
                )}
              </Form>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

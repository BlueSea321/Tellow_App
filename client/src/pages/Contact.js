import React from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { SupportHeader } from "../component/SupportHeader";
import { useLangContext } from "../context/langContext";
import "../styles/support.css";
import Faqs from "../component/Faqs";
import { removeAccount, reportBug, sendCooperation, sendProblem } from "../api/contact";

export default function Contact() {
  const { langData } = useLangContext();
  const [alertMsg, setAlertMsg] = React.useState("");
  const [currentOption, setCurrentOption] = React.useState("");
  const [commentOption, setCommentOption] = React.useState("business");
  const [problemOption, setProblemOption] = React.useState("request");
  const [isSolve, setIsSolve] = React.useState("");
  const [emailData, setEmailData] = React.useState({});
  const [sendStatus, setSendStatus] = React.useState("submit");

  const emailChangeHandler = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const changeHandler = (e) => {
    setCurrentOption(e.target.value);
  };

  const onSubmitHandler = async (e, formName) => {
    e.preventDefault();
    setSendStatus("sending");
    if (formName === "solveForm") {
      const res = await sendProblem(emailData);
      if (res.status === "ERROR") {
        setAlertMsg("Something went wrong!");
      } else {
        setAlertMsg("Message Sent!");
      }
    } else if (formName === "reportForm") {
      const res = await reportBug(emailData);
      if (res.status === "ERROR") {
        setAlertMsg("Something went wrong!");
      } else {
        setAlertMsg("Message Sent!");
      }
    } else if (formName === "removeForm") {
      const res = await removeAccount(emailData);
      if (res.status === "ERROR") {
        setAlertMsg("Something went wrong!");
      } else {
        setAlertMsg("Message Sent!");
      }
    } else if (formName === 'cooperationOffer') {
      const res = await sendCooperation(emailData)
      if (res.status === "ERROR") {
        setAlertMsg("Something went wrong!");
      } else {
        setAlertMsg("Message Sent!");
      }
    }
    setEmailData({});
    setSendStatus("submit");
  };

  return (
    <>
      <SupportHeader />
      <Container fluid>
        <div className="home-part">
          <div className="home-contain">
            {alertMsg && (
              <Alert className="mt-4" variant="success">
                {alertMsg}
              </Alert>
            )}
            <div className="d-flex flex-column mt-4 contact_box">
              <h1>{langData.page.contact.title}</h1>
              <p className="mt-4" style={{ fontSize: "20px" }}>
                <strong>{langData.page.contact.optionTitle}</strong>
              </p>
              <Form.Select className="mb-4" onChange={(e) => changeHandler(e)}>
                <option value="">{langData.page.contact.optionContent1}</option>
                <option value="comment">
                  {langData.page.contact.optionContent2}
                </option>
                <option value="problem">
                  {langData.page.contact.optionContent3}
                </option>
                <option value="cooperation">
                  {langData.page.contact.optionContent4}
                </option>
              </Form.Select>
              {currentOption === "comment" && (
                <div className="mt-8">
                  <p>
                    <strong>{langData.page.contact.commentOption.title}</strong>
                  </p>
                  <Form.Select
                    value={commentOption}
                    onChange={(e) => setCommentOption(e.target.value)}
                  >
                    <option value="business">
                      {langData.page.contact.commentOption.optionContent1}
                    </option>
                    <option value="comments">
                      {langData.page.contact.commentOption.optionContent2}
                    </option>
                  </Form.Select>
                  <br />
                  {commentOption === "business" ? (
                    <div>
                      <Faqs
                        id="business1"
                        quiz={
                          langData.page.contact.commentOption.business.faq1.quiz
                        }
                        ans={
                          langData.page.contact.commentOption.business.faq1.ans
                        }
                      />
                      <Faqs
                        id="business2"
                        quiz={
                          langData.page.contact.commentOption.business.faq2.quiz
                        }
                        ans={
                          langData.page.contact.commentOption.business.faq2.ans
                        }
                      />
                      <Faqs
                        id="business3"
                        quiz={
                          langData.page.contact.commentOption.business.faq3.quiz
                        }
                        ans={
                          langData.page.contact.commentOption.business.faq3.ans
                        }
                      />
                    </div>
                  ) : (
                    <div>
                      <Faqs
                        id="comment1"
                        quiz={
                          langData.page.contact.commentOption.comments.faq1.quiz
                        }
                        ans={
                          langData.page.contact.commentOption.comments.faq1.ans
                        }
                      />
                      <Faqs
                        id="comment2"
                        quiz={
                          langData.page.contact.commentOption.comments.faq2.quiz
                        }
                        ans={
                          langData.page.contact.commentOption.comments.faq2.ans
                        }
                      />
                      <Faqs
                        id="comment3"
                        quiz={
                          langData.page.contact.commentOption.comments.faq3.quiz
                        }
                        ans={
                          langData.page.contact.commentOption.comments.faq3.ans
                        }
                      />
                    </div>
                  )}
                  <br />
                  <p>
                    <strong>
                      {langData.page.contact.commentOption.solveTitle}
                    </strong>
                  </p>
                  <Form.Select
                    className="mb-4"
                    value={isSolve}
                    onChange={(e) => setIsSolve(e.target.value)}
                  >
                    <option value="">
                      {langData.page.contact.commentOption.solveOption1}
                    </option>
                    <option value="yes">
                      {langData.page.contact.commentOption.solveOption2}
                    </option>
                    <option value="no">
                      {langData.page.contact.commentOption.solveOption3}
                    </option>
                  </Form.Select>
                  {isSolve === "yes" && (
                    <div>{langData.page.contact.commentOption.great}</div>
                  )}
                  {isSolve === "no" && (
                    <div>
                      <p>
                        {langData.page.contact.commentOption.solveForm.title}
                      </p>
                      <Form onSubmit={(e) => onSubmitHandler(e, "solveForm")}>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.commentOption.solveForm
                                .label1
                            }
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.commentOption.solveForm
                                .label2
                            }
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.commentOption.solveForm
                                .label3
                            }
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.commentOption.solveForm
                                .label4
                            }
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            onChange={(e) => emailChangeHandler(e)}
                            rows={5}
                            required
                          />
                        </div>
                        <div className="mt-4 d-flex">
                          <Form.Check
                            type="checkbox"
                            className="me-2"
                            required
                          />
                          <span>
                            {
                              langData.page.contact.commentOption.solveForm
                                .part1
                            }{" "}
                            <a href="/privacy-policy">
                              {
                                langData.page.contact.commentOption.solveForm
                                  .part2
                              }
                            </a>
                            .{" "}
                            {
                              langData.page.contact.commentOption.solveForm
                                .part3
                            }
                          </span>
                        </div>
                        <Button
                          type="submit"
                          variant="success"
                          className="mt-4"
                        >
                          {sendStatus === "submit"
                            ? langData.page.contact.commentOption.solveForm.send
                            : langData.page.contact.commentOption.solveForm
                                .sending}
                        </Button>
                      </Form>
                    </div>
                  )}
                </div>
              )}
              {currentOption === "problem" && (
                <div className="mt-8">
                  <p>
                    <strong>{langData.page.contact.problemOption.title}</strong>
                  </p>
                  <Form.Select
                    className="mb-4"
                    value={problemOption}
                    onChange={(e) => setProblemOption(e.target.value)}
                  >
                    <option value="request">
                      {langData.page.contact.problemOption.optionContent1}
                    </option>
                    <option value="scamm">
                      {langData.page.contact.problemOption.optionContent2}
                    </option>
                    <option value="getNumber">
                      {langData.page.contact.problemOption.optionContent3}
                    </option>
                    <option value="report">
                      {langData.page.contact.problemOption.optionContent4}
                    </option>
                    <option value="remove">
                      {langData.page.contact.problemOption.optionContent5}
                    </option>
                  </Form.Select>
                  {problemOption === "request" && (
                    <p>
                      {langData.page.contact.problemOption.request.part1}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.request.part2}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.request.part3}
                    </p>
                  )}
                  {problemOption === "scamm" && (
                    <p>
                      {langData.page.contact.problemOption.scamm.part1}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.scamm.part2}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.scamm.part3}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.scamm.part4}
                    </p>
                  )}
                  {problemOption === "getNumber" && (
                    <p>
                      {langData.page.contact.problemOption.getNumber.part1}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.getNumber.part2}
                      <br />
                      <br />
                      {langData.page.contact.problemOption.getNumber.part3}
                    </p>
                  )}
                  {problemOption === "report" && (
                    <div>
                      <p>
                        {langData.page.contact.problemOption.report.content}
                      </p>

                      <Form onSubmit={(e) => onSubmitHandler(e, "reportForm")}>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.report
                                .reportForm.label1
                            }
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.report
                                .reportForm.label2
                            }
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.report
                                .reportForm.label3
                            }
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            name="detail"
                            rows={3}
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.report
                                .reportForm.label4
                            }
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            rows={3}
                            onChange={(e) => emailChangeHandler(e)}
                            required
                          />
                        </div>
                        <div className="mt-4 d-flex">
                          <Form.Check
                            type="checkbox"
                            className="me-2"
                            required
                          />
                          <span>
                            {
                              langData.page.contact.problemOption.report
                                .reportForm.part1
                            }{" "}
                            <a href="/privacy-policy">
                              {
                                langData.page.contact.problemOption.report
                                  .reportForm.part2
                              }
                            </a>
                            .{" "}
                            {
                              langData.page.contact.problemOption.report
                                .reportForm.part3
                            }
                          </span>
                        </div>
                        <Button
                          type="submit"
                          variant="success"
                          className="mt-4"
                        >
                          {sendStatus === "submit"
                            ? langData.page.contact.problemOption.report
                                .reportForm.send
                            : langData.page.contact.problemOption.report
                                .reportForm.sending}
                        </Button>
                      </Form>
                    </div>
                  )}
                  {problemOption === "remove" && (
                    <div>
                      <p>
                        {langData.page.contact.problemOption.remove.content}
                      </p>
                      <Form onSubmit={(e) => onSubmitHandler(e, 'removeForm')}>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.label1
                            }
                          </Form.Label>
                          <Form.Control type="text" name="name" onChange={(e) => emailChangeHandler(e)} required />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.label2
                            }
                          </Form.Label>
                          <Form.Control type="email" name="email" onChange={(e) => emailChangeHandler(e)} required />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.label3
                            }
                          </Form.Label>
                          <Form.Control type="email" name="registerEmail" onChange={(e) => emailChangeHandler(e)} required />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.label4
                            }
                          </Form.Label>
                          <Form.Control type="text" name="registerPlace" onChange={(e) => emailChangeHandler(e)} required />
                        </div>
                        <div className="mt-2">
                          <Form.Label>
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.label5
                            }
                          </Form.Label>
                          <Form.Control as="textarea" name="message" rows={5} onChange={(e) => emailChangeHandler(e)} required />
                        </div>
                        <div className="mt-4 d-flex">
                          <Form.Check type="checkbox" className="me-2" required />
                          <span>
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.part1
                            }{" "}
                            <a href="/privacy-policy">
                              {
                                langData.page.contact.problemOption.remove
                                  .removeForm.part2
                              }
                            </a>
                            .{" "}
                            {
                              langData.page.contact.problemOption.remove
                                .removeForm.part3
                            }
                          </span>
                        </div>
                        <Button type="submit" variant="success" className="mt-4">
                          {sendStatus === "submit"
                            ? langData.page.contact.problemOption.remove
                                .removeForm.send
                            : langData.page.contact.problemOption.remove
                                .removeForm.sending}
                        </Button>
                      </Form>
                    </div>
                  )}
                </div>
              )}
              {currentOption === "cooperation" && (
                <div>
                  <p>{langData.page.contact.cooperationOption.part1}</p>
                  <p>{langData.page.contact.cooperationOption.part2}</p>
                  <p>{langData.page.contact.cooperationOption.part3}</p>
                  <Form onSubmit={(e) => onSubmitHandler(e, 'cooperationOffer')}>
                    <div className="mt-2">
                      <Form.Label>
                        {langData.page.contact.cooperationOption.form.label1}
                      </Form.Label>
                      <Form.Control type="text" name="name" onChange={(e) => emailChangeHandler(e)} required />
                    </div>
                    <div className="mt-2">
                      <Form.Label>
                        {langData.page.contact.cooperationOption.form.label2}
                      </Form.Label>
                      <Form.Control type="email" name="email" onChange={(e) => emailChangeHandler(e)} required />
                    </div>
                    <div className="mt-2">
                      <Form.Label>
                        {langData.page.contact.cooperationOption.form.label3}
                      </Form.Label>
                      <Form.Control as="textarea" name="message" rows={5} onChange={(e) => emailChangeHandler(e)} required />
                    </div>
                    <div className="mt-4 d-flex">
                      <Form.Check type="checkbox" className="me-2" required />
                      <span>
                        {langData.page.contact.cooperationOption.form.part1}{" "}
                        <a href="/privacy-policy">
                          {langData.page.contact.cooperationOption.form.part2}
                        </a>
                        . {langData.page.contact.cooperationOption.form.part3}
                      </span>
                    </div>
                    <Button type="submit" variant="success" className="mt-4">
                      {sendStatus === "submit"
                        ? langData.page.contact.cooperationOption.form.send
                        : langData.page.contact.cooperationOption.form.sending}
                    </Button>
                  </Form>
                </div>
              )}
              {!currentOption && (
                <p>{langData.page.contact.blankOption.content}</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

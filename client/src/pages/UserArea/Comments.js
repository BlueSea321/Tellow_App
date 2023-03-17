import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import UserSideBar from "../../component/UserSideBar";
import { useMyContext } from "../../context/myContext";
import { getCommentData, removeComment, updateComments } from "../../api/user";
import { nativePhoneNumber } from "../../utils/utils";
import { useLangContext } from "../../context/langContext";
import '../../styles/userarea.css';
import ConfirmModal from "../../component/ConfirmModal";

export default function Comments() {
  const { langData } = useLangContext();
  const { 
    isUserVisible, 
    setIsUserVisible, 
    commentData, 
    setCommentData 
  } = useMyContext();
  const [updateComment, setUpdateComment] = React.useState({})
  const [currentId, setCurrentId] = React.useState('')
  const [showModal, setShowModal] = React.useState(false)
  const [removeCommentInfo, setRemoveCommentInfo] = React.useState({})

  const callerTypes = [
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
  ]

  const handleClose = () => {
    setRemoveCommentInfo({})
    setShowModal(false)
  }

  const handleShow = (id, userid) => {
    setRemoveCommentInfo({
      id: id,
      userid: userid
    })
    setShowModal(true)
  }

  const editHandler = (comment) => {
    setCurrentId(comment._id)
    setUpdateComment(comment)
  }

  const removeHandler = async (id, userid) => {
    const res = await removeComment(id, userid)

    if (res.status === 'ok') {
      setCommentData(res.data)
    }

    setRemoveCommentInfo({})
    setShowModal(false)
  }

  const changeHandler = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setUpdateComment({
      ...updateComment, [nam]: val
    })
  }
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const submitData = {
      id: updateComment._id,
      callername: updateComment.callername,
      callertype: callerTypes[updateComment.callertypeid - 1],
      callertypeid: updateComment.callertypeid,
      content: updateComment.content,
      userid: updateComment.userid,
      username: updateComment.username,
      score: updateComment.score
    }

    const res = await updateComments(submitData)

    if (res.status === 'ok') {
      const newComments = res.data;
      setCommentData(newComments)
      setCurrentId('')
      setUpdateComment({})
    }
  }

  React.useEffect(() => {
    const fetchCommentData = async () => {
      const userid = JSON.parse(localStorage.getItem("tellow_auth")).id;
      const res = await getCommentData(userid);
      if (res.status === "ok") {
        await setCommentData(res.data);
      } else {
        await setCommentData([]);
      }
    };
    if (window.innerWidth < 700) {
      setIsUserVisible(false);
    }
    fetchCommentData();
  }, [setCommentData, setIsUserVisible]);

  return (
    <>
      <Header />
      <Container
        className="userarea_home userarea_content"
        style={isUserVisible ? { paddingLeft: "240px" } : { paddingLeft: "64px" }}
        fluid
      >
        <div style={{ marginLeft: "30px" }}>
          <h1>{langData.page.userarea.comments.title}</h1>
          <ol className="commentlist list-unstyled">
            {commentData.length > 0
              ? commentData.map((comment) => (
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
                        <button 
                          className="btn btn-outline-success btn-sm mb-2 mt-2"
                          onClick={() => editHandler(comment)}
                        >{langData.page.userarea.comments.edit}</button>
                        <button 
                          className="btn btn-outline-danger btn-sm m-2"
                          onClick={() => handleShow(comment._id, comment.userid)}
                        >{langData.page.userarea.comments.remove}</button>
                        <br />
                        <a
                          href={`/num/` + nativePhoneNumber(comment.number)}
                          className="btn btn-outline-primary mb-2"
                          style={{ textDecoration: "none" }}
                        >
                          1 Ratings for {comment.number}
                        </a>
                        {
                          currentId === comment._id ?
                          <div className="d-flex flex-column mt-3">
                          <h4>{langData.page.userarea.comments.editTitle}</h4>
                          <Form className="mt-2" onSubmit={(e) => submitHandler(e)}>
                            <div className="mb-3">
                              <Form.Label>
                                <strong>{langData.page.userarea.comments.label1}</strong>
                              </Form.Label>
                              <Form.Select name="score" onChange={(e) => changeHandler(e)} value={updateComment.score}>
                                <option value={1}>1 - {langData.page.userarea.comments.scoreTrust}</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5 - {langData.page.userarea.comments.scoreUnknown}</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9 - {langData.page.userarea.comments.scoreUntrust}</option>
                              </Form.Select>
                            </div>
                            <div className="mb-3">
                              <Form.Label>
                                <strong>{langData.page.userarea.comments.label2}</strong>
                              </Form.Label>
                              <Form.Control name="callername" onChange={(e) => changeHandler(e)} type="text" value={updateComment.callername} />
                            </div>
                            <div className="mb-3">
                              <Form.Label>
                                <strong>{langData.page.userarea.comments.label3}</strong>
                              </Form.Label>
                              <Form.Select name="callertypeid" onChange={(e) => changeHandler(e)} value={updateComment.callertypeid}>
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
                                <Form.Label>
                                  <strong>{langData.page.userarea.comments.label4}</strong>
                                </Form.Label>
                                <Form.Control type="text" onChange={(e) => changeHandler(e)} name="username" value={updateComment.username} />
                            </div>
                            <div className="mb-3">
                              <Form.Label><strong>{langData.page.userarea.comments.label5}</strong></Form.Label>
                              <Form.Control
                                as="textarea"
                                name="content"
                                rows={3}
                                value={updateComment.content}
                                onChange={(e) => changeHandler(e)}
                                required
                              />
                            </div>
                            <Button type="submit" variant="success" className="w-100">{langData.page.userarea.comments.submit}</Button>
                          </Form>
                        </div> : ''
                        }
                      </div>
                    </div>
                  </li>
                ))
              : ""}
          </ol>

        </div>
        <UserSideBar chooseType="comments" />
      </Container>
      <ConfirmModal 
        show={showModal}
        modalBody={langData.component.confirmModal.body}
        handleClose={handleClose}
        callback={() => removeHandler(removeCommentInfo.id, removeCommentInfo.userid)}
      />
      <Footer />
    </>
  );
}

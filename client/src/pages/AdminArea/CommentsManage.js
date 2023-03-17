import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import AdminSideBar from "../../component/AdminSideBar";
import { useAuthContext } from "../../context/authContext";
import { useMyContext } from "../../context/myContext";
import "../../styles/adminarea.css";
import { getAllCommentData, removeComment } from "../../api/admin";
import FilterComponent from "../../component/FilterComponent";
import ConfirmModal from "../../component/ConfirmModal";
import { useLangContext } from "../../context/langContext";

export default function CommentsManage() {
  const { langData } = useLangContext();
  const { isAdminVisible, setIsAdminVisible } = useMyContext();
  const [showModal, setShowModal] = React.useState(false);
  const [currentId, setCurrentId] = React.useState('')
  const [commentDatas, setCommentDatas] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  React.useEffect(() => {
    const getCommentData = async () => {
      const commentData = (await getAllCommentData()).data;
      setCommentDatas(commentData);
    };
    getCommentData();
  }, []);

  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setIsAdminVisible(false);
    }
  }, [setIsAdminVisible]);

  const columns = React.useMemo(
    () => [
      {
        name: langData.page.adminarea.commentManage.colName1,
        selector: (row) => row.number,
        sortable: true,
      },
      {
        name: langData.page.adminarea.commentManage.colName2,
        selector: (row) => row.score,
        sortable: true,
      },
      {
        name: langData.page.adminarea.commentManage.colName3,
        selector: (row) => row.username,
        sortable: true,
      },
      {
        name: langData.page.adminarea.commentManage.colName4,
        selector: (row) => row.createdDate,
        sortable: true,
      },
    ],
    []
  );

  const handleClose = () => {
    setCurrentId('')
    setShowModal(false)
  }

  const handleShow = (id) => {
    setCurrentId(id)
    setShowModal(true)
  }

  const removeHandler = React.useCallback(async (id) => {
    const commentData = (await removeComment(id)).data
    setCurrentId('')
    setShowModal(false)
    setCommentDatas(commentData)
  }, [])

  const filteredComments = React.useMemo(() => {
    const temp = commentDatas.filter(
      (data) =>
        data.number &&
        data.number.toLowerCase().includes(filterText.toLowerCase())
    );
    return temp;
  }, [filterText, commentDatas]);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
        placeHolderText={langData.page.adminarea.commentManage.placeHolder}
      />
    );
  }, [filterText, langData, resetPaginationToggle]);

  const ExpandedComponent = ({ data }) => (
    <div className="p-4 comment_detail">
     <div className="comment_content">
        <div className="w-100 d-flex flex-column">
          <span>{langData.page.adminarea.commentManage.content}</span>
          <span 
            style={{'fontWeight': 'normal'}}
          >
            {data.content}
          </span>
        </div>
      </div>
      <div className="common_detail">
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.number}</span>
          <span>{data.number}</span>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.score}</span>
          <span>{data.score}</span>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.callername}</span>
          <span>{data.callername}</span>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.callertype}</span>
          <span>{data.callertype}</span>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.callertypeid}</span>
          <span>{data.callertypeid}</span>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.username}</span>
          <span>{data.username}</span>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <span>{langData.page.adminarea.commentManage.createdDate}</span>
          <span>{data.createdDate}</span>
        </div>
      </div>
     
      <div className="w-100 mt-2 d-flex justify-content-end">
        <button className="btn btn-danger" onClick={() => handleShow(data._id)}>
            {langData.page.adminarea.commentManage.remove}
        </button>
      </div>
    </div>
  );

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
          <DataTable
            title="Comments"
            data={filteredComments}
            columns={columns}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
        <AdminSideBar chooseType="comments" />
      </Container>
      <ConfirmModal 
        show={showModal}
        handleClose = {handleClose}
        callback = {() => removeHandler(currentId)}
      />
      <Footer />
    </>
  );
}

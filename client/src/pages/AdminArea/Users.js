import React from "react";
import { Container } from "react-bootstrap";

import Footer from "../../component/Footer";
import { Header } from "../../component/Header";
import AdminSideBar from "../../component/AdminSideBar";
import { useMyContext } from "../../context/myContext";
import "../../styles/adminarea.css";
import DataTable from "react-data-table-component";
import { activeUser, getAllUserData, removeUser, suspendUser } from "../../api/admin";
import FilterComponent from "../../component/FilterComponent";
import ConfirmModal from "../../component/ConfirmModal";
import { useLangContext } from "../../context/langContext";

export default function Users() {
  const { langData } = useLangContext();
  const { isAdminVisible, setIsAdminVisible } = useMyContext();
  const [showModal, setShowModal] = React.useState(false);
  const [currentId, setCurrentId] = React.useState('');
  const [userDatas, setUserDatas] = React.useState([]);
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)

  React.useEffect(() => {
    const getUserData = async () => {
      const userData = (await getAllUserData()).data;
      setUserDatas(userData);
    };
    getUserData();
  }, []);

  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setIsAdminVisible(false);
    }
  }, [setIsAdminVisible]);

  const columns = React.useMemo(
    () => [
      {
        name: langData.page.adminarea.users.colName1,
        selector: (row) => row.username,
        sortable: true,
      },
      {
        name: langData.page.adminarea.users.colName2,
        selector: (row) => row.email,
      },
      {
        name: langData.page.adminarea.users.colName3,
        selector: (row) => (row.isSuspend ? "suspend" : "active"),
        sortable: true,
      },
    ],
    []
  );

  const activeHandler = React.useCallback(async (id) => {
    const newUsers = (await activeUser(id)).data
    setUserDatas(newUsers)
  }, []) 

  const suspendHandler = React.useCallback(async (id) => {
    const newUsers = (await suspendUser(id)).data
    setUserDatas(newUsers)
  }, [])

  const removeHandler = React.useCallback(async (id) => {
    const newUsers = (await removeUser(id)).data
    setCurrentId('')
    setShowModal(false)
    setUserDatas(newUsers)
  }, [])

  const handleClose = () => {
    setCurrentId('')
    setShowModal(false)
  }

  const handleShow = (id) => {
    setCurrentId(id)
    setShowModal(true)
  }

  const filteredUsers = React.useMemo(() => {
    const temp = userDatas.filter(data => 
        data.username && data.username.toLowerCase().includes(filterText.toLowerCase())
    )
    return temp
  }, [filterText, userDatas])

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle)
            setFilterText('')
        }
    }

    return (
        <FilterComponent
            onFilter = {e => setFilterText(e.target.value)}
            onClear = {handleClear}
            filterText = {filterText}
            placeHolderText={langData.page.adminarea.users.placeHolder}
        />
    )
  }, [filterText, langData, resetPaginationToggle])

  const ExpandedComponent = ({ data }) => (
    <div className="p-4 table_detail">
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.users.username}</span>
        <span>{data.username}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.users.email}</span>
        <span>{data.email}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.users.status}</span>
        <span>{data.isSuspend ? langData.page.adminarea.users.verifyStatus1 : langData.page.adminarea.users.verifyStatus2}</span>
      </div>
      <div className="w-100 mt-2 d-flex justify-content-end">
        {!data.isSuspend ? (
          <button 
            className="btn btn-warning me-2" 
            style={{ color: "white" }} 
            onClick={() => suspendHandler(data._id)}
        >
            {langData.page.adminarea.users.suspend}
          </button>
        ) : (
            <button 
                className="btn btn-success me-2" 
                style={{ color: "white" }}
                onClick={() => activeHandler(data._id)}
            >
            {langData.page.adminarea.users.active}
          </button>
        )}

        <button 
            className="btn btn-danger"
            onClick={() => handleShow(data._id)}
        >
            {langData.page.adminarea.users.remove}
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
            title="Users"
            data={filteredUsers}
            columns={columns}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
        <AdminSideBar chooseType="users" />
      </Container>
      <ConfirmModal
        show = {showModal}
        modalBody = {langData.component.confirmModal.body}
        handleClose = {handleClose}
        callback = {() => removeHandler(currentId)}
        />
      <Footer />
    </>
  );
}

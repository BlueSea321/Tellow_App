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
import { getAllPhoneData } from "../../api/admin";
import FilterComponent from "../../component/FilterComponent";
import { useLangContext } from "../../context/langContext";

export default function Phones() {
  const { langData } = useLangContext()
  const { isAdminVisible, setIsAdminVisible } = useMyContext();
  const [phoneDatas, setPhoneDatas] = React.useState([])
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)

  React.useEffect(() => {
    const getPhoneData = async () => {
      const phoneData = (await getAllPhoneData()).data
      setPhoneDatas(phoneData)
    }
    getPhoneData()
  }, [])

  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setIsAdminVisible(false);
    }
  }, [setIsAdminVisible]);

  const columns = React.useMemo(() => [
    {
      name: langData.page.adminarea.phones.colName1,
      selector: (row) => row.number,
      sortable: true
    },
    {
      name: langData.page.adminarea.phones.colName2,
      selector: (row) => row.score,
      sortable: true
    },
    {
      name: langData.page.adminarea.phones.colName3,
      selector: (row) => row.comments,
      sortable: true
    }
  ], [])

  const filteredPhones = React.useMemo(() => {
    const temp = phoneDatas.filter(data =>
      data.number && data.number.toLowerCase().includes(filterText.toLowerCase())
    )
    return temp
  }, [filterText, phoneDatas])

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
        placeHolderText={langData.page.adminarea.phones.placeHolder}
      />
    )
  }, [filterText, langData, resetPaginationToggle])

  const ExpandedComponent = ({ data }) => (
    <div className="p-4 table_detail">
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.number}</span>
        <span>{data.number}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.score}</span>
        <span>{data.score}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.callername}</span>
        <span>{data.callername}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.callertype}</span>
        <span>{data.callertype}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.callertypeid}</span>
        <span>{data.callertypeid}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.prefix}</span>
        <span>{data.prefix}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.prefixname}</span>
        <span>{data.prefixname}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.comments}</span>
        <span>{data.comments}</span>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <span>{langData.page.adminarea.phones.lastComments}</span>
        <span>{data.lastcomment}</span>
      </div>
      {/* <div className="w-100 mt-2 d-flex justify-content-end">
        <button className="btn btn-danger">
            Remove
        </button>
      </div> */}
    </div>
  )

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
            title="Phones"
            data={filteredPhones}
            columns={columns}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
        <AdminSideBar chooseType="phones" />
      </Container>
      <Footer />
    </>
  );
}

import React from "react";
import { Table, Switch } from "antd";
import { Link } from 'react-router-dom';
import SidebarNav from "../sidebar";
import { itemRender, onShowSizeChange, } from "../../components/paginationfunction";
import Doctor from '../../assets/json/Doctor'

const Doctors = () => {

  const data = Doctor?.Doctor?.mainMenu

  const dataSource = {
    data,

  };

  const onChangeHandle = () => { }


  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "Name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/admin/profile" className="avatar avatar-sm me-2"
          >
            <img alt="" src={record.image} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Speciality",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },
    {
      title: "Member since",
      dataIndex: "Members",
      render: (text, record) => (
        <div className="sorting_1">
          {text}

          <span className="d-block">
            <small>{record.Time}</small>
          </span>
        </div>
      ),
      sorter: (a, b) => a.Members.length - b.Members.length,
    },
    {
      title: "Earned",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Account Status",
      dataIndex: "status",
      key: "status",
      render: (e) => (
        <Switch onChange={onChangeHandle} defaultChecked={e} />
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ];

  return (
    <>

      <SidebarNav />


      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Doctors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#0">Users</Link>
                  </li>
                  <li className="breadcrumb-item active">Doctor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      // bordered
                      dataSource={data}
                      rowKey={(record) => record.id}
                      showSizeChanger={true}
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Doctors;

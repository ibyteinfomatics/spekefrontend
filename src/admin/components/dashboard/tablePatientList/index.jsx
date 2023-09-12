import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Patient from '../../../assets/json/Patient'

const TablePatientsList = () => {

  const data = Patient?.Patient?.mainMenu

  const dataSource = {
    data,

  };

  const columns = [
    {
      title: 'Doctor Name',
      dataIndex: 'Name',
      render: (text, record, data) => (
        <h2 className="table-avatar">
          <Link to="/admin/profile" className="avatar avatar-sm me-2"><img alt="" src={record.img} /></Link>
          <Link to="/admin/profile">{text}</Link>
        </h2>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'Phone'
    },
    {
      title: 'LastVisit',
      dataIndex: 'LastVisit',
    },
    {
      title: 'Paid',
      dataIndex: 'Paid',
    },

  ]
  return (
    <div>
      <Table className="table-striped"
        style={{ overflowX: 'auto' }}
        columns={columns}
        // bordered
        dataSource={data}
        rowKey={record => record.id}
        pagination={false}
      />
    </div>

  )

};

export default TablePatientsList;
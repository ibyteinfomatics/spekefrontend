import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Doctor from '../../../assets/json/Doctordata';

const TableDoctor = () => {

  const data = Doctor?.Doctor?.mainMenu
  const columns = [
    {
      title: 'Doctor Name',
      dataIndex: 'Name',
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/admin/profile" className="avatar avatar-sm me-2"><img alt="" src={record.image} /></Link>
          <Link to="/admin/profile">{text}</Link>
        </h2>
      ),
    },
    {
      title: 'Speciality',
      dataIndex: 'Speciality'
    },
    {
      title: 'Earned',
      dataIndex: 'Earned',
    },
    {
      title: 'Reviews',
      render: () => (
        <>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star-o text-secondary"></i>
        </>
      ),
    },
  ];
  const dataSource = {
    data,

  };

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

export default TableDoctor;


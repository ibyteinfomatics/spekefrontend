import React from "react";
import { Link } from 'react-router-dom';
import { Table } from "antd";
import SidebarNav from "../sidebar";
import {itemRender,onShowSizeChange,} from "../../components/paginationfunction";
import Invoicereport from '../../assets/json/Invoicereport'

const InvoiceReport = () => {


  const data = Invoicereport?.Invoicereport?.mainMenu

  const dataSource = {
    data,

  };

  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "id",
      render: (text, record) => (

        <Link to="/admin/invoice" className="invoice-link">{text}</Link>

      ),
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Patient Id",
      dataIndex: "patientid",
      sorter: (a, b) => a.patientid.length - b.patientid.length,
    },
    {
      title: "Patient Name",
      dataIndex: "patientName",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link
            to="/admin/profile"
            className="avatar avatar-sm me-2"
          >
            <img alt="" src={record.patientimg} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.patientName.length - b.patientName.length,
    },
    {
      title: "Total Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Created Date",
      dataIndex: "date",

      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (record) => (
        <span className="badge badge-pill bg-success inv-badge">{record}</span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <div className="actions">

          <a data-bs-toggle="modal" href="#edit_invoice_report" className="btn btn-sm bg-success-light me-2">
            <i className="fe fe-pencil"></i> Edit
          </a>
          <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
            <i className="fe fe-trash"></i> Delete
          </a>
        </div>
      ),

    }
  ];

  return (
    <>
      <SidebarNav />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Invoice Report</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Invoice Report</li>
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
        {/* Edit Modal */}
        <div className="modal fade" id="edit_invoice_report" aria-hidden="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document" >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Invoice Report</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row form-row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Invoice Number</label>
                        <input type="text" className="form-control" defaultValue="#INV-0001" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Patient ID</label>
                        <input type="text" className="form-control" defaultValue="	#PT002" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Patient Name</label>
                        <input type="text" className="form-control" defaultValue="R Amer" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Patient Image</label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Total Amount</label>
                        <input type="text" className="form-control" defaultValue="$200.00" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Created Date</label>
                        <input type="text" className="form-control" defaultValue="29th Oct 2019" />
                      </div>
                    </div>

                  </div>
                  <button type="submit" className="btn btn-primary w-100">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Modal */}
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document" >
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-content p-2">
                  <h4 className="modal-title">Delete</h4>
                  <p className="mb-4">Are you sure want to delete?</p>
                  <button type="button" className="btn btn-primary">Save </button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Delete Modal */}
      </div>
    </>
  );
}


export default InvoiceReport;

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import SidebarNav from '../sidebar';
import { Modal } from 'react-bootstrap';
import { itemRender, onShowSizeChange } from "../../components/paginationfunction";
import Specialitie from '../../assets/json/Specialities'


const Specialities = () => {

	const data = Specialitie?.Specialitie?.mainMenu

	const dataSource = {
		data,

	};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	const handleShow = () => setShow(true);




	const columns = [
		{
			title: '#',
			dataIndex: 'id',
			sorter: (a, b) => a.id.length - b.id.length,
		},
		{
			title: 'Speciality',
			dataIndex: 'specialities',
			render: (text, record) => (
				<h2 className="table-avatar">
					<Link to="/admin/profile" className="avatar avatar-sm me-2"><img src={record.image} className="avatar-img" alt="" /></Link>
					<Link to="/admin/profile">{record.specialities}</Link>
				</h2>
			),
			sorter: (a, b) => a.specialities.length - b.specialities.length,
		},
		{
			title: 'Actions',
			render: (text, record) => (
				<div className="actions">
					<a className="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_specialities_details">
						<i className="fe fe-pencil"></i> Edit
					</a>
					<a data-bs-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
						<i className="fe fe-trash"></i> Delete
					</a>
				</div>

			),
		},
	]

	return (
		<>
			<SidebarNav />
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-7 col-auto">
								<h3 className="page-title">Specialities</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
									<li className="breadcrumb-item active">Specialities</li>
								</ul>
							</div>
							<div className="col-sm-5 col">
								<a href="#Add_Specialities_details" data-bs-toggle="modal" className="btn btn-primary float-end mt-2">Add</a>
							</div>

						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">

										<Table className="table-striped"

											style={{ overflowX: 'auto' }}
											columns={columns}
											// bordered
											dataSource={data}
											ascend={true}
											rowKey={record => record.id}
											showSizeChanger={true}
											pagination={{
												total: data.length,
												showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
												showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
				{/* <!-- Add Modal --> */}
				<div className="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document" >
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Add Specialities</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<form>
									<div className="row form-row">
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Specialities</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Image</label>
												<input type="file" className="form-control" />
											</div>
										</div>

									</div>
									<button type="submit" className="btn btn-primary w-100">Save Changes</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /ADD Modal --> */}
				{/* Edit Modal */}
				<div className="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document" >
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Edit Specialities</h5>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<form>
									<div className="row form-row">
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Specialities</label>
												<input type="text" className="form-control" defaultValue="Cataract Surgery" />
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<label>Image</label>
												<input type="file" className="form-control" />
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
	)
}


export default Specialities; 
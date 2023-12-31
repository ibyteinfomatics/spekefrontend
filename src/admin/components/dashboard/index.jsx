import React from 'react';
import SidebarNav from '../sidebar';
import StatusChart from './status';
import RevenueChart from './revenue';
import TableDoctor from './tableDoctor';
import TablePatientsList from './tablePatientList';
import TableAppointmentList from './appointment';

const Dashboard = () => {

	return (
		<>
			<SidebarNav />
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Welcome Admin!</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item active">Dashboard</li>
								</ul>
							</div>
						</div>
					</div>

					{/* breadcrumb */}

					<div className="row">
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-primary border-primary">
											<i className="fe fe-users"></i>
										</span>
										<div className="dash-count">
											<h3>168</h3>
										</div>
									</div>
									<div className="dash-widget-info">
										<h6 className="text-muted">Doctors</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-primary w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-success">
											<i className="fe fe-credit-card"></i>
										</span>
										<div className="dash-count">
											<h3>487</h3>
										</div>
									</div>
									<div className="dash-widget-info">

										<h6 className="text-muted">Patients</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-success w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-danger border-danger">
											<i className="fe fe-money"></i>
										</span>
										<div className="dash-count">
											<h3>485</h3>
										</div>
									</div>
									<div className="dash-widget-info">

										<h6 className="text-muted">Appointment</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-danger w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon text-warning border-warning">
											<i className="fe fe-folder"></i>
										</span>
										<div className="dash-count">
											<h3>$62523</h3>
										</div>
									</div>
									<div className="dash-widget-info">

										<h6 className="text-muted">Revenue</h6>
										<div className="progress progress-sm">
											<div className="progress-bar bg-warning w-50"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-6">
							{/* Sales Chart */}
							<div className="card card-chart">
								<div className="card-header">
									<h4 className="card-title">Revenue</h4>
								</div>
								<div className="card-body">
									<RevenueChart />
								</div>
							</div>
							{/* /Sales Chart */}
						</div>
						<div className="col-md-12 col-lg-6">
							{/* Sales Chart */}
							<div className="card card-chart">
								<div className="card-header">
									<h4 className="card-title">Status</h4>
								</div>
								<div className="card-body">
									<StatusChart />
								</div>
							</div>
							{/* /Sales Chart */}
						</div>
					</div>
					{/*  row */}
					<div className="row">
						<div className="col-md-6 col-lg-6">
							<div className="card card-table flex-fill">
								<div className="card-header">
									<h4 className="card-title">Doctors List</h4>
								</div>
								<div className="card-body">
									<div className="table-responsive">
										<TableDoctor />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6">
							<div className="card card-table flex-fill">
								<div className="card-header">
									<h4 className="card-title">Patients List</h4>
								</div>
								<div className="card-body">
									<div className='table-responsive'>
										<TablePatientsList />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-12">
							<div className="card card-table flex-fill">
								<div className="card-header">
									<h4 className="card-title">Appointment List</h4>
								</div>
								<div className="card-body">
									<TableAppointmentList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default Dashboard; 
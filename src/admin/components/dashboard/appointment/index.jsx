import React from 'react';
import { Link } from "react-router-dom";
import { IMG01, IMG02, IMG03, IMG04, IMG05, patient1, patient2, patient3, patient4, patient5 } from "./img"

const TableAppointmentList = () => {


  return (
    <div className='appoinment'>
      <div className="table-responsive">
        <table className="table table-hover table-center mb-0">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Speciality</th>
              <th>Patient Name</th>
              <th>Apointment Time</th>
              <th>Status</th>
              <th className="text-end">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={IMG01}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Dr. Compton Arnold</Link>
                </h2>
              </td>
              <td>Low Backpain Surgery</td>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={patient1}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Michelle Sharp</Link>
                </h2>
              </td>
              <td>
                9 Nov 2019{" "}
                <span className="text-primary d-block">11.00 AM - 11.15 AM</span>
              </td>
              <td>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status_1"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="status_1" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="text-end">$200.00</td>
            </tr>
            <tr>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={IMG02}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Dr. Reginald Arnold</Link>
                </h2>
              </td>
              <td>Low Backpain Surgery</td>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={patient2}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Michelle Wagner</Link>
                </h2>
              </td>
              <td>
                5 Nov 2019{" "}
                <span className="text-primary d-block">11.00 AM - 11.35 AM</span>
              </td>
              <td>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status_2"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="status_2" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="text-end">$300.00</td>
            </tr>
            <tr>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={IMG03}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Dr. Alexis Combs</Link>
                </h2>
              </td>
              <td>Cataract Surgery</td>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={patient3}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">James Lopez</Link>
                </h2>
              </td>
              <td>
                11 Nov 2019{" "}
                <span className="text-primary d-block">12.00 PM - 12.15 PM</span>
              </td>
              <td>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status_3"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="status_3" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="text-end">$150.00</td>
            </tr>
            <tr>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={IMG04}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Dr.Kevin Glover</Link>
                </h2>
              </td>
              <td>Cataract Surgery</td>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={patient4}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Connie Robinson</Link>
                </h2>
              </td>
              <td>
                7 Nov 2019
                <span className="text-primary d-block">1.00 PM - 1.20 PM</span>
              </td>
              <td>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status_4"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="status_4" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="text-end">$150.00</td>
            </tr>
            <tr>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={IMG05}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Dr. Marvin Campbell</Link>
                </h2>
              </td>
              <td>Free Skin Graft</td>
              <td>
                <h2 className="table-avatar">
                  <Link to="/admin/profile" className="avatar avatar-sm me-2">
                    <img
                      className="avatar-img rounded-circle"
                      src={patient5}
                      alt="User Image"
                    />
                  </Link>
                  <Link to="/admin/profile">Carol Joseph</Link>
                </h2>
              </td>
              <td>
                15 Nov 2019{" "}
                <span className="text-primary d-block">1.00 PM - 1.15 PM</span>
              </td>
              <td>
                <div className="status-toggle">
                  <input
                    type="checkbox"
                    id="status_5"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="status_5" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="text-end">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )

};

export default TableAppointmentList;
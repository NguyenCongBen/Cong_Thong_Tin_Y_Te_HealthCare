"use client"
import Link from 'next/link';
import React from 'react';
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Doctors() {
  const { data, error } = useSWR('http://localhost:3000/doctor', fetcher);
  console.log(data);
  // Kiểm tra lỗi
  if (error) return <strong>Error loading Doctors</strong>;

  if (!data || data.length === 0) return <p>No Doctors data available.</p>;

  return (
    <>
      <div id="main-content">
        <div className="container-fluid">
          <div className="block-header">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <h2>
                  <a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth">
                    <i className="fa fa-arrow-left"></i>
                  </a>
                  All Doctors
                </h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html"><i className="icon-home"></i></a>
                  </li>
                  <li className="breadcrumb-item">Doctor</li>
                  <li className="breadcrumb-item active">All Doctors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row clearfix ">
            {data.map((doctor) => (
              <div key={doctor.id_bac_si} className="col-lg-3 col-md-6 col-sm-12">
                <Link href={`/admin/Doctors/${doctor.id_bac_si}`}>
                  <div className="card doctors_main">
                    <div className="body text-center">
                      <div className="chart" data-percent="75">
                        <span>
                          <img
                            src={doctor.hinh_anh || "/images/sm/avatar1.jpg"} // Nếu không có ảnh thì dùng ảnh mặc định
                            data-toggle="tooltip"
                            data-placement="top"
                            title={doctor.ten}
                            alt="user"

                          />
                        </span>
                      </div>
                      <h6 className="mb-0 name_doctors_admin">
                        <a href="#" title="">{doctor.ten}</a>
                      </h6>
<<<<<<< HEAD
                      <small>{doctor.chuyen_khoa}</small>< br />
                      
                      <span>{doctor.dia_chi}</span>
=======
                      <small class="chuyen_khoa_admin_doctor"> Khoa : {doctor.chuyen_khoa}</small>

                      <span class="adress_admin_doctors">{doctor.dia_chi}</span>
                      <div class="icon_ngoisao_admin_doctors">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                      <div class="all_doctors_btn">

                        <button class="edit_doctors">Sửa</button>
                        <button class="delete_doctors">Xóa</button>
                      </div>

>>>>>>> 1e9ca17f88bd1e19a948de4918f8d764bfc5743e
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
                <div class="body text-center">
                  <div class="p-t-80 p-b-80">
                    <h6>Add New <br /> Docter</h6>
                    <button type="button" class="btn btn-outline-primary m-t-10" data-toggle="modal" data-target="#addcontact"><i class="fa fa-plus-circle"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="addcontact" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="title" id="defaultModalLabel">Add Doctor</h6>
            </div>
            <div class="modal-body">
              <div class="row clearfix">
                <div class="col-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <input type="number" class="form-control" placeholder="Phone Number" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <input type="number" class="form-control" placeholder="Specialist" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter Address" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                    <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                  </div>
                  <hr />
                </div>
                <div class="col-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-facebook"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Facebook" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-twitter"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Twitter" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-linkedin"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Linkedin" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-instagram"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Instagram" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Add</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

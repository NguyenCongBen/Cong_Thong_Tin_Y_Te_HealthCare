"use client"
import Link from 'next/link'; 
import React from 'react';
import useSWR from "swr";
const fetcher = (...args)=>fetch(...args).then((res)=>res.json())
export default function Doctors() {
  const { data, error } = useSWR('http://localhost:3000/doctor', fetcher);
console.log(data);
  // Kiểm tra lỗi
  if (error) return <strong>Error loading Doctors</strong>;

  // Kiểm tra nếu không có dữ liệu
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

          <div className="row clearfix">
            {data.map((doctor) => (
              <div key={doctor.id_bac_si} className="col-lg-3 col-md-6 col-sm-12">
                <Link href={`/admin/Doctors/${doctor.id_bac_si}`}>
                  <div className="card">
                    <div className="body text-center">
                      <div className="chart easy-pie-chart-1" data-percent="75"> 
                        <span>
                          <img 
                            src={doctor.hinh_anh || "/images/sm/avatar1.jpg"} // Nếu không có ảnh thì dùng ảnh mặc định
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title={doctor.ten} 
                            alt="user" 
                            className="rounded-circle" 
                          />
                        </span> 
                      </div>
                      <h6 className="mb-0">
                        <a href="#" title="">{doctor.ten}</a> 
                      </h6>
                      <small>{doctor.chuyen_khoa}</small>
                      <ul className="social-links list-unstyled">
                        <li><a title="facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
                        <li><a title="twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
                        <li><a title="instagram" href="javascript:void(0);"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                      <span>{doctor.dia_chi}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

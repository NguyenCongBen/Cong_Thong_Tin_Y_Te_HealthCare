"use client";
import Link from 'next/link';
import React from 'react';
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Doctors() {
  const { data, error } = useSWR('http://localhost:3000/dichvu', fetcher);

  // Handle loading state
  if (!data) return <p>Loading...</p>;

  // Handle errors
  if (error) return <strong>Error loading services</strong>;

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
                  All Departments
                </h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html"><i className="icon-home"></i></a>
                  </li>
                  <li className="breadcrumb-item">Department</li>
                  <li className="breadcrumb-item active">All Departments</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-12 text-right">
                {/* Placeholder for statistics (optional) */}
                <div className="bh_chart hidden-xs">
                  <div className="float-left m-r-15">
                    <small>Visitors</small>
                    <h6 className="mb-0 mt-1"><i className="icon-user"></i> 1,784</h6>
                  </div>
                </div>
                <div className="bh_chart hidden-sm">
                  <div className="float-left m-r-15">
                    <small>Visits</small>
                    <h6 className="mb-0 mt-1"><i className="icon-globe"></i> 325</h6>
                  </div>
                </div>
                <div className="bh_chart hidden-sm">
                  <div className="float-left m-r-15">
                    <small>Chats</small>
                    <h6 className="mb-0 mt-1"><i className="icon-bubbles"></i> 13</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>           

          <div className="row">
            {data.map((service) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={service.id}>
                <div className="card project_widget">
                  <div className="pw_img">
                    <img className="img-fluid" src="/images/banner4.PNG" alt="Service" />
                  </div>
                  <div className="pw_content">
                    <div className="pw_header">
                      <h6>{service.ten_dich_vu}</h6>
                     
                    </div>
                    <div className="pw_meta">
                      <p>{service.mo_ta}</p>
                      <Link href={`service/${service.id}`} className="btn btn-outline-primary">More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

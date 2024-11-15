"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import useSWR from "swr";
import ReactPaginate from 'react-paginate';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Doctors() {
    const { data, error } = useSWR('http://localhost:3000/benhnhan', fetcher);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Số lượng bệnh nhân hiển thị trên mỗi trang

    if (error) return <strong>Lỗi khi tải dữ liệu bệnh nhân</strong>;
    if (!data || data.length === 0) return <p>Không có dữ liệu bệnh nhân.</p>;

    // Tính toán số lượng trang
    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Xử lý khi người dùng chuyển trang
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

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
                                    Tất cả Bệnh Nhân
                                </h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                                    <li className="breadcrumb-item">Bệnh Nhân</li>
                                    <li className="breadcrumb-item active">Tất cả Bệnh Nhân</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card patients-list">
                                <div className="header">
                                    <h2>Danh Sách Bệnh Nhân</h2>
                                </div>
                                <div class="body">

                                    <ul class="nav nav-tabs-new2">
                                        <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#All">Tất cả</a></li>
                                        {/* <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#USA">Mỹ</a></li>
                                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#India">Ấn Độ</a></li> */}
                                    </ul>


                                    <div class="tab-content m-t-10 padding-0">
                                        <div class="tab-pane table-responsive active show" id="All">
                                            <table class="table m-b-0 table-hover">
                                                <thead class="thead-dark">
                                                    <tr className='hihihi'>
                                                        <th>Hình Ảnh</th>
                                                        <th>Mã Bệnh Nhân</th>
                                                        <th>Tên</th>
                                                        <th>Ngày sinh</th>
                                                        <th>Số Điện Thoại</th>
                                                        <th>Email</th>
                                                        <th>Hành Động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((e) => (
                                                        <tr>
                                                            <td><span class="list-icon"><img class="patients-img" src="/images/xs/avatar1.jpg" alt="" /></span></td>
                                                            <td><span class="list-name">#BN 00{e.id}</span></td>
                                                            <td>{e.ten} </td>
                                                            <td>{e.ngay_sinh.split('T')[0]}</td>
                                                            <td>{e.so_dien_thoai}</td>
                                                            <td>{e.email}</td>
                                                            <td>
                                                                <Link href={`/admin/BenhNhan/${e.id}`}>
                                                                    <button className="detail_benhnhan_btn_admin">Chi tiết</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Phân trang */}
                                    <ReactPaginate
                                        previousLabel={"← Trước"}
                                        nextLabel={"Tiếp →"}
                                        pageCount={pageCount}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination"}
                                        activeClassName={"active"}
                                        pageLinkClassName={"page-link"}
                                        previousLinkClassName={"page-link"}
                                        nextLinkClassName={"page-link"}
                                        disabledClassName={"disabled"}
                                        breakLinkClassName={"page-link"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

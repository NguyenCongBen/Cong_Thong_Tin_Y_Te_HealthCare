"use client"
import Link from 'next/link';
import React from 'react';
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function BenhNhan() {
    const { data, error } = useSWR('http://localhost:3000/patient', fetcher);
    console.log(data);
    if (error) return <strong>lỗi bệnh nhân</strong>;

    if (!data || data.length === 0) return <p>Không có dữ liệu bác sĩ.</p>;

    return (
        <>
            <div id="main-content">
                <div class="container-fluid">
                    <div class="block-header">
                        <div class="row">
                            <div class="col-lg-6 col-md-8 col-sm-12">
                                <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Tất cả Bệnh Nhân</h2>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                    <li class="breadcrumb-item">Bệnh Nhân</li>
                                    <li class="breadcrumb-item active">Tất cả Bệnh Nhân</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div class="row clearfix">
                        <div class="col-md-12">
                            <div class="card patients-list">
                                <div class="header">
                                    <h2>Danh Sách Bệnh Nhân</h2>
                                    <ul class="header-dropdown">
                                        <li><a class="tab_btn" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Hàng Tuần">W</a></li>
                                        <li><a class="tab_btn" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Hàng Tháng">M</a></li>
                                        <li><a class="tab_btn active" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Hàng Năm">Y</a></li>
                                        <li class="dropdown">
                                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li><a href="javascript:void(0);">Hành Động</a></li>
                                                <li><a href="javascript:void(0);">Hành Động Khác</a></li>
                                                <li><a href="javascript:void(0);">Một Điều Gì Đó Khác</a></li>
                                            </ul>
                                        </li>
                                    </ul>
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
                                                            <td><Link href={`/admin/BenhNhan/${e.id}`}> <button class="detail_benhnhan_btn_admin">Chi tiết</button> </Link></td>

                                                        </tr>

                                                    ))};
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

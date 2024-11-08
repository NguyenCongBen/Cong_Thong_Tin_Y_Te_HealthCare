"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr"; // Import useSWR

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    const { data, error: errorTotalPatients } = useSWR('http://localhost:3000/thong-ke/tong-so-benh-nhan', fetcher);
    const { data: dataGender, error: errorGender } = useSWR('http://localhost:3000/thong-ke/benh-nhan-theo-gioi-tinh', fetcher);
    const { data: dataAge, error: errorAge } = useSWR('http://localhost:3000/thong-ke/benh-nhan-theo-do-tuoi', fetcher);
    const { data: dataTreatmentStatus, error: errorTreatmentStatus } = useSWR('http://localhost:3000/thong-ke/ke-hoach-dieu-tri-theo-trang-thai', fetcher);
    const { data: dataRevenue, error: errorRevenue } = useSWR('http://localhost:3000/thong-ke/doanh-thu', fetcher);
    const { data: dataPharmacyRevenue, error: errorPharmacyRevenue } = useSWR('http://localhost:3000/thong-ke/doanh-thu-hieu-thuoc', fetcher); // Pharmacy revenue
    const { data: dataServiceRevenue, error: errorServiceRevenue } = useSWR('http://localhost:3000/thong-ke/doanh-thu-dich-vu', fetcher); // Service revenue

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    // Handle loading state
    if (!data || !dataGender || !dataAge || !dataTreatmentStatus || !dataRevenue || !dataPharmacyRevenue || !dataServiceRevenue) {
        return <div>Loading...</div>;
    }

    // Handle errors
    if (errorTotalPatients || errorGender || errorAge || errorTreatmentStatus || errorRevenue || errorPharmacyRevenue || errorServiceRevenue) {
        console.error('Error fetching data:', errorTotalPatients || errorGender || errorAge || errorTreatmentStatus || errorRevenue || errorPharmacyRevenue || errorServiceRevenue);
        return <div>Error loading data</div>;
    }

    const maleCount = Array.isArray(dataGender) ? dataGender.find(item => item.gioi_tinh === 'Nam')?.so_luong || 0 : 0;
    const femaleCount = Array.isArray(dataGender) ? dataGender.find(item => item.gioi_tinh === 'Nữ')?.so_luong || 0 : 0;

    return (
        <>
            <div id="main-content">
                <div className="container-fluid">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-sm-12">
                                <h2><a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth"><i className="fa fa-arrow-left"></i></a> Bảng Điều Khiển</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                                    <li className="breadcrumb-item active">Bảng Điều Khiển</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-6">
                                    <div className="card top_counter">
                                        <div className="body">
                                            <div id="top_counter1" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="icon"><i className="fa fa-user"></i> </div>
                                                        <div className="content">
                                                            <div className="text_thongke_main">
                                                                <div className="text">Tất Cả Bệnh Nhân</div>
                                                                <h5 className="number">{data.tong_so_benh_nhan}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="icon"><i className="fa fa-user"></i></div>
                                                        <div className="content main_admin_gioitinh">
                                                            <div className="text_thongke_main">
                                                                <div className="text">Nam</div>
                                                                <h5 className="number">{maleCount}</h5>
                                                            </div>
                                                            <div className="text_thongke_main">
                                                                <div className="text">Nữ</div>
                                                                <h5 className="number">{femaleCount}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div id="top_counter2" className="carousel slide" data-ride="carousel">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="icon"><i className="fa fa-user-md"></i> </div>
                                                        <div className="content">
                                                            <div className="text">Hoạt Động</div>
                                                            <h5 className="number">06</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="card top_counter">
                                        <div className="body">
                                            <div id="top_counter3" className="carousel vert slide" data-ride="carousel" data-interval="2300">
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="icon"><i className="fa fa-eye"></i> </div>
                                                        <div className="content">
                                                            <div className="text">Tổng Lượt Truy Cập</div>
                                                            <h5 className="number">10K</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="icon"><i className="fa fa-university"></i> </div>
                                            <div className="content">
                                                <div className="text">Doanh Thu</div>
                                                <h5 className="number">$18,925</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="card top_counter">
                                        <div className="body">
                                            <div className="icon"><i className="fa fa-thumbs-o-up"></i> </div>
                                            <div className="content">
                                                <div className="text">Khách Hàng Hài Lòng</div>
                                                <h5 className="number">528</h5>
                                            </div>
                                            <hr />
                                            <div className="icon"><i className="fa fa-smile-o"></i> </div>
                                            <div className="content">
                                                <div className="text">Tích Cực</div>
                                                <h5 className="number">2,528</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2>Tổng Doanh Thu</h2>
                                    <ul className="header-dropdown">

                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li><a href="javascript:void(0);">Hành Động </a></li>
                                                <li><a href="javascript:void(0);">Hành Động Khác</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-md-4">
                                            <div className="body_title bg_title_1 text-light">
                                                {dataRevenue ? (
                                                    dataRevenue.map((item, index) => (
                                                        <div key={index}>
                                                             <h4><i className="icon-wallet"></i> {item.doanh_thu} </h4>
                                                            <span>Thu Nhập Hoạt Động</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-center text-muted">Loading revenue statistics...</div>
                                                )}
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <div className="body_title bg_title_2 text-light">
                                                <h4>
                                                    <i className="icon-wallet"></i>
                                                    {dataPharmacyRevenue?.doanh_thu_hieu_thuoc}
                                                </h4>

                                                <span>Thu Nhập Từ Hiệu Thuốc</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="body_title  bg_title_3 text-light">
                                                <h4><i className="icon-wallet"></i> {dataServiceRevenue?.tong_doanh_thu_dich_vu}</h4>
                                                <span>Chi Phí Hoạt Động</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="khung_2ben_doanhthu">
                            <div className="card">
                                <div className="card-header bg-primary text-white" style={{ backgroundColor: "#4B72F0" }}>
                                    <h4 className="mb-0">Thống Kê Bệnh Nhân Theo Độ Tuổi</h4>
                                </div>
                                <div className="card-body">
                                    {dataAge ? (
                                        <ul className="list-group">
                                            {dataAge.map((item, index) => (
                                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                    Độ tuổi {item.do_tuoi}
                                                    <span className="badge badge-primary badge-pill">{item.so_luong} bệnh nhân</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="text-center text-muted">Loading age statistics...</div>
                                    )}
                                </div>
                            </div>
                            <div className="card ">
                                <div className="card-header text-white" style={{ backgroundColor: "#F0864B" }}>
                                    <h4 className="mb-0">Thống Kê Kế Hoạch Điều Trị Theo Trạng Thái</h4>
                                </div>
                                <div className="card-body">
                                    {dataTreatmentStatus ? (
                                        <ul className="list-group">
                                            {dataTreatmentStatus.map((item, index) => (
                                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                    Trạng thái {item.trang_thai}
                                                    <span className="badge badge-success badge-pill">{item.so_luong} kế hoạch</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="text-center text-muted">Loading treatment plan statistics...</div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}

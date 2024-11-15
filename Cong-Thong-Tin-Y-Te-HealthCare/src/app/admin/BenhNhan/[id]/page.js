"use client";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function BenhNhanDetail({ params }) {
    const [benhnhan, setBenhNhan] = useState(null);
    const { data, error } = useSWR(`http://localhost:3000/patient/${params.id}`, fetcher);

    useEffect(() => {
        if (data) {
            setBenhNhan(data);
        }
    }, [data]);

    if (error) return <strong>Lỗi khi tải thông tin bệnh nhân</strong>;
    if (!benhnhan) return <div className="loader">Đang tải...</div>;

    return (
        <>
            <div id="main-content" className="profilepage_1">
                <div className="container-fluid">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-sm-12">
                                <h2><a href="javascript:void(0);" className="btn btn-xs btn-link btn-toggle-fullwidth"><i className="fa fa-arrow-left"></i></a> Hồ sơ bệnh nhân</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="icon-home"></i></a></li>
                                    <li className="breadcrumb-item">Bệnh nhân</li>
                                    <li className="breadcrumb-item active">Hồ sơ bệnh nhân</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                            <div className="card member-card">
                                <div className="header l-coral">
                                    <h4 className="m-t-10 text-light">{benhnhan.ten}</h4>
                                </div>
                                <div className="member-img">
                                    <a href="patient-invoice.html">
                                        <img src="/images/sm/avatar2.jpg" className="rounded-circle" alt="hình đại diện" />
                                    </a>
                                </div>
                                <div className="body">
                                    <div className="col-12">
                                        <ul className="social-links list-unstyled">
                                            <li><a title="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a title="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a title="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <strong>Nghề nghiệp</strong>
                                    <p>Ăn hàng ở không nói gọn là Hàng không</p>
                                    <strong>Email</strong>
                                    <p>{benhnhan.email}</p>
                                    <hr />
                                    <strong>Địa chỉ</strong>
                                    <address>{benhnhan.dia_chi}</address>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2>Báo cáo tổng quát</h2>
                                </div>
                                <div className="body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Huyết áp</div>
                                                <small>Số liệu : <b>{benhnhan.huyet_ap}</b></small>
                                            </div>

                                            <div className="progress m-b-20">

                                                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.nhip_tim}%` }}   > <span className="sr-only">40% Hoàn thành (thành công)</span> </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Nhịp tim</div>
                                                <small>Số liệu : <b>{benhnhan.nhip_tim}</b></small>
                                            </div>

                                            <div className="progress m-b-20">
                                                <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.nhip_tim}%` }}> <span className="sr-only">20% Hoàn thành</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Hemoglobin</div>
                                                <small>Số liệu : <b>{benhnhan.bmi}</b></small>
                                            </div>

                                            <div className="progress m-b-20">
                                                <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.bmi}%` }}> <span className="sr-only">60% Hoàn thành (cảnh báo)</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="title_thongtin_benhnhan">
                                                <div>Đường huyết</div>
                                                <small>Số liệu : <b>{benhnhan.duong_huyet}</b></small>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: `${benhnhan.duong_huyet}%` }}> <span className="sr-only">80% Hoàn thành (nguy hiểm)</span> </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="card">
                                <div className="body">
                                    <ul className="nav nav-tabs-new2">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#activity">Hoạt động</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#billings">Kết Quả</a></li>

                                    </ul>
                                    <div className="tab-content mt-3">

                                        <div className="tab-pane active" id="activity">
                                            <p><strong>Hồ sơ bệnh nhân:</strong> Đây là thông tin y tế và chi tiết khám bệnh của bệnh nhân <strong>{benhnhan.ten}</strong>.</p>

                                            <div className="timeline-item green">
                                                <span className="date">Thông tin cá nhân</span>
                                                <div className="msg">
                                                    <p><strong>Họ tên:</strong> {benhnhan.ten}</p>
                                                    <p><strong>Ngày sinh:</strong> {new Date(benhnhan.ngay_sinh).toLocaleDateString()}</p>
                                                    <p><strong>Giới tính:</strong> {benhnhan.gioi_tinh}</p>
                                                    <p><strong>Địa chỉ:</strong> {benhnhan.dia_chi}</p>
                                                    <p><strong>Số điện thoại:</strong> {benhnhan.so_dien_thoai}</p>
                                                    <p><strong>Email:</strong> {benhnhan.email}</p>
                                                </div>
                                            </div>

                                            <div className="timeline-item">
                                                <span className="date">Chi tiết khám bệnh</span>
                                                <div className="msg">
                                                    <strong>Ngày khám:</strong> {new Date(benhnhan.ngay).toLocaleDateString()}
                                                    <table className="table table-hover">
                                                        <tbody>
                                                            <tr>
                                                                <td>Huyết áp</td>
                                                                <td>{benhnhan.huyet_ap}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nhịp tim</td>
                                                                <td>{benhnhan.nhip_tim} bpm</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Cân nặng</td>
                                                                <td>{benhnhan.can_nang} kg</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Chiều cao</td>
                                                                <td>{benhnhan.chieu_cao} m</td>
                                                            </tr>
                                                            <tr>
                                                                <td>BMI</td>
                                                                <td>{benhnhan.bmi}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Đường huyết</td>
                                                                <td>{benhnhan.duong_huyet} mmol/L</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Cholesterol tổng</td>
                                                                <td>{benhnhan.cholesterol_total} mg/dL</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane" id="billings">


                                            <div className="treatment-plan">
                                                <h6 className="mt-3 mb-3">Chi tiết kế hoạch điều trị</h6>
                                                <table className="table table-bordered table-striped billing-history">
                                                    <thead className="sr-only">
                                                        <tr>
                                                            <th>Chi tiết</th>
                                                            <th>Thông tin</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Bác sĩ ID <span className="invoice-number">#{benhnhan.id_bac_si}</span></h5>
                                                                <span className="text-muted">Ngày lập kế hoạch: {new Date(benhnhan.ngay_ke_hoach).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.chi_tiet_dieu_tri}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Trạng thái</h5>
                                                                <span className="text-muted">Ngày khám: {new Date(benhnhan.ngay_kham).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.trang_thai}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Chẩn đoán</h5>
                                                                <span className="text-muted">Phương pháp điều trị</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.cham_doan}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Phương pháp điều trị</h5>
                                                                <span className="text-muted">{benhnhan.phuong_phap_dieu_tri}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.phuong_phap_dieu_tri}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Dược phẩm ID <span className="invoice-number">#{benhnhan.id_duoc_pham}</span></h5>
                                                                <span className="text-muted">Ngày sử dụng: {new Date(benhnhan.ngay_su_dung).toLocaleDateString()}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.lieu_luong}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5 className="billing-title">Ghi chú</h5>
                                                                <span className="text-muted">{benhnhan.ghi_chu}</span>
                                                            </td>
                                                            <td className="amount">{benhnhan.ghi_chu}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="d-flex justify-content-end mt-3">
                                                    <button
                                                        type="button"
                                                        style={{ margin: "0 10px" }}
                                                        className="btn btn-primary me-2"
                                                    >
                                                        Cập nhật
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={() => {
                                                            if (window.confirm("Bạn có chắc chắn muốn xóa mục này không?")) {
                                                                // Perform delete action here
                                                                console.log("Deleted!");
                                                            } else {
                                                                console.log("Deletion canceled.");
                                                            }
                                                        }}
                                                    >
                                                        Xóa
                                                    </button>
                                                </div>

                                            </div>


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

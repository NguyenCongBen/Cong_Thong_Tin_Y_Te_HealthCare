"use client";
import React from 'react';
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Appointments() {
    const { data, error } = useSWR('http://localhost:3000/lichhen', fetcher);

    if (error) return <strong>Error loading appointments</strong>;
    if (!data || data.length === 0) return <p>No appointment data available.</p>;

    const getStatusClass = (status) => {
        switch (status) {
            case 'Đang chờ': return 'status-pending';
            case 'Đã xác nhận': return 'status-confirmed';
            case 'Đã hoàn thành': return 'status-completed';
            case 'Đã hủy': return 'status-cancelled';
            default: return '';
        }
    };

    return (
        <>
            <style>
                {`
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #eef2f6;
                    margin: 0;
                    padding: 20px;
                }

                #main-content {
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                }

                .table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 16px;
                }

                th, td {
                    padding: 12px 15px;
                    text-align: left;
                    border-bottom: 1px solid #e0e0e0;
                }

                th {
                    background-color: #6c63ff;
                    color: #ffffff;
                }

                tr:hover {
                    background-color: #f1f1f1;
                }

                .status-label {
                    padding: 0.5em 1em;
                    border-radius: 4px;
                    color: #ffffff;
                    font-weight: bold;
                }

                .status-pending { background-color: #ffab00; }
                .status-confirmed { background-color: #00c853; }
                .status-completed { background-color: #2196f3; }
                .status-cancelled { background-color: #d50000; }

                .detail_appointment_btn_admin {
                    background-color: #007bff;
                    color: #ffffff;
                    border: none;
                    padding: 10px 15px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    font-weight: bold;
                }

                .detail_appointment_btn_admin:hover {
                    background-color: #0056b3;
                }
                `}
            </style>
            <div id="main-content">
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <table className="table m-b-0 table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ID Bệnh Nhân</th>
                                        <th>ID Chuyên Khoa</th>
                                        <th>Thời Gian Hẹn</th>
                                        <th>Mô Tả</th>
                                        <th>Trạng Thái</th>
                                        <th>ID Bác Sĩ</th>
                                        <th>ID Bệnh Viện</th>
                                        <th>Ảnh Bác Sĩ</th>
                                        <th>Tên Bác Sĩ</th>
                                        <th>Ngày Sinh</th>
                                        <th>Giới Tính</th>
                                      
                                       
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((appointment) => (
                                        <tr key={appointment.id}>
                                            <td>{appointment.id}</td>
                                            <td>{appointment.id_benh_nhan}</td>
                                            <td>{appointment.id_chuyen_khoa}</td>
                                            <td>{new Date(appointment.thoi_gian_hen).toLocaleString()}</td>
                                            <td>{appointment.mo_ta}</td>
                                            <td>
                                                <span className={`status-label ${getStatusClass(appointment.trang_thai)}`}>
                                                    {appointment.trang_thai}
                                                </span>
                                            </td>
                                            <td>{appointment.id_bac_si}</td>
                                            <td>{appointment.id_benh_vien}</td>
                                            <td>
                                                <img src={`/${appointment.anh}`} alt="Doctor" width="50" />
                                            </td>
                                            <td>{appointment.ten}</td>
                                            <td>{new Date(appointment.ngay_sinh).toLocaleDateString()}</td>
                                            <td>{appointment.gioi_tinh}</td>
                                            <td>
                                                <button
                                                    className="detail_appointment_btn_admin"
                                                    onClick={() => handleStatusChange(appointment.id, appointment.trang_thai)}
                                                >
                                                    Cập nhật
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

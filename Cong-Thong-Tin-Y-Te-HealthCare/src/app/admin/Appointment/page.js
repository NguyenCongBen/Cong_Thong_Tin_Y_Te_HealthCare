"use client";
import React, { useState } from 'react';
import useSWR from "swr";

export default function Appointments() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [newStatus, setNewStatus] = useState("");

    // Lấy dữ liệu cuộc hẹn và trạng thái
    const { data, error, isLoading, mutate } = useSWR('http://localhost:3000/lichhen', fetcher);
    const { data: dataTrangthai, error: errorTrangthai, isLoading: isLoadingTrangthai } = useSWR('http://localhost:3000/lichhen/status', fetcher);

    if (error || errorTrangthai) return <strong>Lỗi...</strong>;
    if (isLoading || isLoadingTrangthai) return <strong>Loading...</strong>;

    // Hàm khi người dùng nhấn "Cập nhật"
    const handleUpdateClick = (appointment) => {
        setSelectedAppointment(appointment);
        setNewStatus(appointment.trang_thai); // Set trạng thái hiện tại cho form
    };

    // Hàm thay đổi trạng thái
    const handleStatusChange = (event) => {
        setNewStatus(event.target.value);
    };

    // Hàm lưu trạng thái đã cập nhật
    const handleSave = async () => {
        if (selectedAppointment) {
            try {
                const response = await fetch(`http://localhost:3000/lichhen/${selectedAppointment.id}/status`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ trang_thai: newStatus }),
                });

                if (response.ok) {
                    console.log(`Cập nhật trạng thái của cuộc hẹn ID ${selectedAppointment.id} thành: ${newStatus}`);
                    // Cập nhật lại danh sách cuộc hẹn
                    mutate(); // Gọi lại SWR để làm mới dữ liệu
                    setSelectedAppointment(null);
                    setNewStatus("");
                } else {
                    console.error('Cập nhật thất bại!');
                }
            } catch (error) {
                console.error('Lỗi khi cập nhật trạng thái:', error);
            }
        }
    };

    return (
        <>
            <div id="main-content">
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <table className="table m-b-0 table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th> Bệnh Nhân</th>
                                        <th> Chuyên Khoa</th>
                                        <th>Thời Gian Hẹn</th>
                                        <th>Mô Tả</th>
                                        <th> Bác Sĩ</th>
                                        <th> Bệnh Viện</th>
                                        <th>Ảnh Bác Sĩ</th>
                                        <th>Trạng Thái</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((appointment) => (
                                        <tr key={appointment.id}>
                                            <td>{appointment.id}</td>
                                            <td>{appointment.ten_benh_nhan}</td>
                                            <td>{appointment.ten_chuyen_khoa}</td>
                                            <td>{new Date(appointment.thoi_gian_hen).toLocaleString()}</td>
                                            <td>{appointment.mo_ta}</td>
                                            <td>{appointment.ten_bac_si}</td>
                                            <td>{appointment.ten}</td>
                                            <td>
                                                <img src={`/${appointment.anh}`} alt="Doctor" width="50" />
                                            </td>
                                            <td>
                                                {/* Nếu cuộc hẹn đã được chọn, hiển thị dropdown */}
                                                {selectedAppointment && selectedAppointment.id === appointment.id ? (
                                                    <select value={newStatus} onChange={handleStatusChange}>
                                                        {dataTrangthai.map((status) => (
                                                            <option key={status} value={status}>
                                                                {status}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    appointment.trang_thai
                                                )}
                                            </td>
                                            <td>
                                                {/* Nút "Cập nhật" sẽ hiển thị khi cuộc hẹn chưa được chọn */}
                                                {!selectedAppointment || selectedAppointment.id !== appointment.id ? (
                                                    <button
                                                        className="detail_appointment_btn_admin"
                                                        onClick={() => handleUpdateClick(appointment)}
                                                    >
                                                        Cập nhật
                                                    </button>
                                                ) : (
                                                    // Nút "Lưu" khi cuộc hẹn đã được chọn và đang chỉnh sửa
                                                    <div>
                                                        <button className="detail_appointment_btn_admin" onClick={handleSave}>Lưu</button>
                                                    </div>
                                                )}
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
